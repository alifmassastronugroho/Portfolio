# Portfolio | Alif Mas Sastro Nugroho

Situs portofolio pribadi satu halaman yang dibangun dengan Next.js App Router. Berisi profil, keahlian teknis, proyek, pengalaman, dan formulir kontak dalam satu alur scroll dengan navigasi yang mengikuti posisi pembaca.

## Teknologi

| Bagian | Yang dipakai |
| --- | --- |
| Framework | Next.js 16.3.5 (App Router) |
| UI | React 19.2.8 |
| Bahasa | TypeScript 5 |
| Styling | Tailwind CSS 4 lewat `@tailwindcss/postcss` |
| Ikon | lucide-react |
| Linting | ESLint 9 + eslint-config-next |
| Font | Inter dan JetBrains Mono dari Google Fonts |

## Fitur

- Preloader saat halaman pertama dimuat
- Navigasi sticky dengan penanda section aktif dan smooth scroll
- Animasi mengetik untuk pergantian role di bagian Hero
- Scroll reveal dan animasi bertahap pada kartu
- Grid 23 skill dengan bar progres per kategori
- Carousel pada bagian Journey
- Formulir kontak dengan state React
- Tema warna terpusat lewat blok `@theme` di `globals.css`

## Struktur folder

```
portfolio/
├── public/
│   ├── alif.jpg
│   └── *.svg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Preloader.tsx
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Process.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Journey.tsx
│   │   ├── SoftSkills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── hooks/
│       ├── useActiveSection.ts
│       ├── useJourneyCarousel.ts
│       ├── useScrollReveal.ts
│       └── useTypingAnimation.ts
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

Semua section dirangkai di `src/app/page.tsx`. Setiap section adalah satu komponen mandiri.

## Menjalankan di lokal

Prasyarat: Node.js 20.9 atau lebih baru. Next.js 16 tidak lagi mendukung Node.js 18.

1. Clone repo

```bash
git clone https://github.com/alifmassastronugroho/portfolio.git
cd portfolio
```

2. Install dependensi

```bash
npm install
```

3. Jalankan server pengembangan

```bash
npm run dev
```

4. Buka http://localhost:3000

## Script

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Server pengembangan dengan Turbopack |
| `npm run build` | Build produksi |
| `npm run start` | Menjalankan hasil build |
| `npm run lint` | Menjalankan ESLint |

Turbopack aktif secara default di Next.js 16, jadi flag `--turbopack` tidak diperlukan lagi.

## Deploy

Cara paling singkat adalah lewat Vercel. Import repo ini, biarkan pengaturan default Next.js, lalu deploy. Build command `next build`, output ditangani otomatis.

## Kontak

alifmassastronugroho@gmail.com

