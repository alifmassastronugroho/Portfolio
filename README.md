<p align="center">
  <img src="https://raw.githubusercontent.com/alifmassastronugroho/portfolio/main/public/Favicon.png" alt="Logo M Portfolio" width="100" />
  <h1 align="center">Portfolio Personal</h1>
  <p align="center">
    <strong>Alif Massa Stronugroho</strong>
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

##  Struktur Folder

```text
portfolio/
├── public/                 # Aset statis (gambar, favicon, logo)
│   ├── Favicon.png         # Logo utama (M)
│   ├── alif.jpg            # Foto profil
│   └── ...                 # Aset proyek lainnya (misal: moneralepy-logo.png)
├── src/
│   ├── app/                # Next.js App Router (pages, layouts, routing)
│   ├── components/         # Komponen UI yang dapat digunakan kembali (reusable)
│   └── hooks/              # Custom React hooks untuk logika bisnis yang terpisah
├── .gitignore              # File dan folder yang diabaikan oleh Git
├── next.config.ts          # Konfigurasi kustom Next.js
├── package.json            # Dependensi dan skrip proyek
└── README.md               # Dokumentasi ini
