import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#c45a1a",
        bg: "#f5f5f3",
        card: "#ffffff",
        muted: "#6b6b6b",
        border: "#e5e5e5",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease forwards",
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        "blur-in": "blurIn 1.5s ease forwards",
        "swing": "swing 4s ease-in-out infinite",
        "blink": "blink 1s infinite",
        "loading-dots": "loadingDots 1.5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blurIn: {
          "0%": { filter: "blur(20px)", opacity: "0", transform: "scale(0.95)" },
          "100%": { filter: "blur(0px)", opacity: "1", transform: "scale(1)" },
        },
        swing: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        loadingDots: {
          "0%, 20%": { content: "''" },
          "40%": { content: "'.'" },
          "60%": { content: "'..'" },
          "80%, 100%": { content: "'...'" },
        },
      },
    },
  },
  plugins: [],
};
export default config;