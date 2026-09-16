import { Resend } from "resend";

type ContactPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const firstName = typeof payload.firstName === "string" ? payload.firstName.trim() : "";
  const lastName = typeof payload.lastName === "string" ? payload.lastName.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (
    !firstName ||
    firstName.length > 100 ||
    lastName.length > 100 ||
    !emailPattern.test(email) ||
    email.length > 254 ||
    !message ||
    message.length > 5000
  ) {
    return Response.json({ error: "Please provide valid contact details." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !contactEmail || !fromEmail) {
    return Response.json({ error: "Email service is not configured." }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: email,
      subject: `Portfolio contact from ${firstName}${lastName ? ` ${lastName}` : ""}`,
      text: [
        `Name: ${firstName}${lastName ? ` ${lastName}` : ""}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      return Response.json({ error: "Unable to send your message." }, { status: 502 });
    }

    return Response.json({ message: "Your message has been sent." });
  } catch {
    return Response.json({ error: "Unable to send your message." }, { status: 500 });
  }
}