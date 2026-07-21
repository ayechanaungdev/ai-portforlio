# Portfolio Migration & Development Tasks

- [x] **Phase 1: Project Setup & Environment**
  - [x] Initialize Vite + React (TypeScript) project (with ESLint).
  - [x] Install dependencies (`tailwindcss`, `@tailwindcss/vite`, `framer-motion`, `lucide-react`, `leaflet`, `react-leaflet`, `@types/leaflet`, `gh-pages`).
  - [x] Configure `vite.config.ts` (with `base: './'`) and `src/index.css` for Tailwind CSS v4.
  - [x] Configure `.gitignore` to protect `.env` and `node_modules`.
  - [x] Save `CLAUDE.md` and `TASKS.md` in root directory.

- [x] **Phase 2: Data Extraction & Bilingual Type Safety**
  - [x] Extract content from `https://ayechanaungdev.github.io/portfolio/`.
  - [x] Create `src/types/portfolio.ts` with strict TypeScript interfaces supporting EN and JP fields.
  - [x] Generate `src/data/portfolioData.json` populated with English and Japanese translations.

- [ ] **Phase 3: State Contexts & Dynamic Helpers**
  - [ ] Create `src/context/ThemeContext.tsx` (Light / Dark mode toggle with `localStorage`).
  - [ ] Create `src/context/LanguageContext.tsx` (EN / JP toggle).
  - [ ] Create `src/utils/dateHelpers.ts` for dynamic age and job duration calculations.

- [ ] **Phase 4: Modern & Attractive UI Components Development**
  - [ ] **Navbar:** Create `src/components/Navbar.tsx` with logo, navigation links, Theme Toggle (☀️/🌙), and Language Switcher (EN/JP).
  - [ ] **Hero Section:** Create `src/components/Hero.tsx` with dynamic age badge, Framer Motion animations, and CV download trigger.
  - [ ] **About & Stats Section:** Create `src/components/AboutStats.tsx` with bilingual support.
  - [ ] **Skills Section:** Create `src/components/BentoSkills.tsx` in Apple-style Bento Grid layout.
  - [ ] **Timeline Section:** Create `src/components/Timeline.tsx` with dynamic duration ranges.
  - [ ] **Works & Services Section:** Create `src/components/ServicesPortfolio.tsx` with hover effects.
  - [ ] **Contact & Map Section:** Create `src/components/ContactMap.tsx` featuring Leaflet map + email form.

- [ ] **Phase 5: Email Service & Integration**
  - [ ] Create `src/services/emailService.ts` for EmailJS API integration.
  - [ ] Set up EmailJS keys in `.env` file.
  - [ ] Connect `ContactMap.tsx` form submission to `emailService.ts`.

- [ ] **Phase 6: Quality Verification & Build**
  - [ ] Run `npm run build` to verify strict TypeScript checks.
  - [ ] Test Light/Dark theme switching, EN/JP translation switching, and mobile responsiveness.

- [ ] **Phase 7: GitHub Pages Deployment**
  - [ ] Run `npm run deploy` to publish live site to GitHub Pages.