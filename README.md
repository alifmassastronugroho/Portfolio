<p align="center">
  <img src="https://raw.githubusercontent.com/alifmassastronugroho/portfolio/main/public/Favicon.png" alt="Logo M Portfolio" width="100" />
  <h1 align="center">Portfolio Personal</h1>
  <p align="center">
    <strong>Alif Mas Sastro Nugroho</strong>
    <br />
    Website portofolio personal yang modern, responsif, dan berkinerja tinggi, dibangun dengan Next.js dan TypeScript.
    <br />
    <br />
    <a href="https://github.com/alifmassastronugroho/portfolio"><strong>Jelajahi Kode »</strong></a>
    <br />
    <br />
    <a href="https://github.com/alifmassastronugroho/portfolio/issues">Laporkan Bug</a>
    ·
    <a href="https://github.com/alifmassastronugroho/portfolio/issues">Minta Fitur</a>
  </p>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel" alt="Vercel" />
</p>

---

##  Tentang Proyek

Proyek ini adalah website portofolio personal yang dirancang untuk menampilkan profil, keahlian, pengalaman, dan proyek-proyek yang telah dikerjakan secara profesional. Dibangun dengan fokus pada **kinerja (performance)**, **aksesibilitas (accessibility)**, dan **pengalaman pengguna (UX)** yang mulus di berbagai perangkat.

Website ini memanfaatkan ekosistem modern React melalui **Next.js (App Router)** dengan **TypeScript** untuk memastikan kode yang tipe-aman (*type-safe*), mudah dipelihara (*maintainable*), dan siap untuk produksi.

##  Fitur Utama

-  **Performa Tinggi**: Memanfaatkan Server-Side Rendering (SSR) dan Static Site Generation (SSG) dari Next.js untuk waktu muat yang sangat cepat.
-  **Responsif Penuh**: Tampilan UI yang beradaptasi dengan sempurna di desktop, tablet, dan perangkat mobile (termasuk navigasi mobile yang telah dioptimalkan).
-  **Desain Modern & Bersih**: Tipografi yang dioptimalkan secara otomatis menggunakan `next/font` (Geist Font) untuk menghilangkan *layout shift* (CLS) dan meningkatkan estetika.
-  **Type-Safe**: Pengembangan menggunakan TypeScript (>93% dari kodebase) untuk mengurangi bug runtime dan meningkatkan kualitas kode.
-  **Optimasi Aset**: Pemuatan gambar dan aset statis yang efisien (menggunakan komponen `next/image` dan folder `public` yang terstruktur).
-  **Arsitektur Komponen**: Pemisahan logika yang rapi antara `app/`, `components/`, dan `hooks/` untuk skalabilitas jangka panjang.

## 🛠️ Tech Stack

| Kategori       | Teknologi                                                                 |
|----------------|---------------------------------------------------------------------------|
| **Framework**  | [Next.js](https://nextjs.org/) (App Router)                               |
| **Bahasa**     | [TypeScript](https://www.typescriptlang.org/), JavaScript, CSS            |
| **Styling**    | CSS Modules / Tailwind CSS *(sesuai konfigurasi proyek)*                  |
| **Font**       | [Geist](https://vercel.com/font) (via `next/font` untuk optimasi otomatis)|
| **Deployment** | [Vercel](https://vercel.com/)                                             |
| **Versioning** | [Git](https://git-scm.com/) & [GitHub](https://github.com/)               |

##  Struktur Folder Lengkap

Proyek ini mengikuti arsitektur modular yang memisahkan dengan jelas antara konfigurasi, aset statis, logika komponen, dan *custom hooks*. Berikut adalah struktur direktori lengkap beserta file-file di dalamnya:

```text
portfolio/
├── public/                           # Aset statis (dapat diakses langsung oleh browser)
│   ├── Favicon.png                   # Logo utama website (M)
│   ├── alif.jpg                      # Foto profil
│   ├── kalivergo-logo.jpg            # Aset logo proyek (Kalivergo)
│   ├── moneralepy-logo.png           # Aset logo proyek (Moneralepy)
│   └── [file.svg, globe.svg, ...]    # Ikon dan gambar pendukung lainnya
│
├── src/
│   ├── app/                          # Next.js App Router & Konfigurasi Global
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts          # API Endpoint (Next.js Route) untuk form kontak
│   │   ├── favicon.ico               # Favicon default Next.js
│   │   ├── globals.css               # Styling global (CSS Reset, Tailwind directives)
│   │   ├── layout.tsx                # Root Layout (Metadata, Font, Wrapper)
│   │   └── page.tsx                  # Halaman utama (Home)
│   │
│   ├── components/                   # Komponen UI yang dapat digunakan kembali (Reusable)
│   │   ├── Hero.tsx                  # Section pembuka (Header & Intro)
│   │   ├── About.tsx                 # Section tentang saya
│   │   ├── Skills.tsx & SoftSkills.tsx # Daftar hard skills dan soft skills
│   │   ├── Experience.tsx            # Pengalaman kerja / profesional
│   │   ├── Journey.tsx               # Riwayat perjalanan (carousel/timeline)
│   │   ├── Process.tsx               # Proses kerja / alur kerja
│   │   ├── Projects.tsx              # Daftar proyek yang telah dikerjakan
│   │   ├── Contact.tsx               # Section dan formulir kontak
│   │   ├── Navigation.tsx            # Navbar / Menu navigasi responsif
│   │   ├── Footer.tsx                # Footer website
│   │   ├── Preloader.tsx             # Animasi loading awal sebelum website muncul
│   │   └── SocialIcons.tsx           # Komponen ikon media sosial
│   │
│   └── hooks/                        # Custom React Hooks (Memisahkan logic dari UI)
│       ├── useActiveSection.ts       # Logika scroll-spy untuk navigasi aktif
│       ├── useJourneyCarousel.ts     # Logika state untuk carousel Journey
│       ├── useScrollReveal.ts        # Logika animasi reveal saat elemen di-scroll
│       └── useTypingAnimation.ts     # Logika animasi mesin ketik (typewriter effect)
│
├── eslint.config.mjs                 # Konfigurasi ESLint (Linting standar kode)
├── next.config.ts                    # Konfigurasi khusus Next.js
├── package.json                      # Daftar dependensi dan skrip npm
├── package-lock.json                 # Kunci versi dependensi (npm)
├── postcss.config.mjs                # Konfigurasi PostCSS (untuk Tailwind/CSS)
├── tsconfig.json                     # Konfigurasi TypeScript
└── README.md                         # Dokumentasi proyek ini
