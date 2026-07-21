# Aye Chan Aung - Personal Portfolio Project

## Project Overview
A modern, interactive, single-page React portfolio website migrating content from existing portfolio, supporting Light/Dark themes and English/Japanese bi-language features.
- **Developer Profile:** Aye Chan Aung (Senior Software Engineer)
- **Primary Data Source:** https://ayechanaungdev.github.io/portfolio/

## Tech Stack
- **Framework:** React + Vite + TypeScript
- **Styling:** Tailwind CSS (v4) + Framer Motion
- **State/Context:** React Context API (`ThemeContext` for Light/Dark mode, `LanguageContext` for EN/JP translation)
- **Icons:** Lucide React (`lucide-react`)
- **Map Integration:** Leaflet / React-Leaflet
- **Email Service:** EmailJS / Web3Forms
- **Deployment:** GitHub Pages (`gh-pages`)

## UI/UX & Design Standards
- **Dual Theme Support:** Smooth transition between Dark Mode (`#0b0f19` background with cyan/violet glowing accents) and Light Mode (clean slate/indigo accents).
- **Bi-Language Switcher:** Seamless English (EN) and Japanese (JP) toggling across all UI text and sections.
- **Header & Navbar:** Fixed top glassmorphism navigation bar with section links, Theme Toggle Switch (☀️/🌙), and Language Switcher (EN/JP).

## Architecture & Coding Conventions
- **Bilingual Data Separation:** All text inside `src/data/portfolioData.json` must support localized keys for English (`en`) and Japanese (`ja`/`jp`).
- **Modular Contexts:** Store state management inside `src/context/ThemeContext.tsx` and `src/context/LanguageContext.tsx`.

## Dynamic Business Logic & Features
1. **Theme Switcher:** Toggles Tailwind `dark` class and persists choice in `localStorage`.
2. **Language Switcher:** Dynamically switches UI copy between English and Japanese without full page reload.
3. **Dynamic Age & Duration Calculators:** Compute age and job/education duration dynamically in `src/utils/dateHelpers.ts`.
4. **Direct Email Delivery & Interactive Dark Map:** Yangon-centered Leaflet map and EmailJS integration.