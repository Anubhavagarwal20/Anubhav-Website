# Anubhav Agarwal — Personal Portfolio Website

A premium, fully responsive personal portfolio built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS v3 | Utility-first styling |
| Framer Motion | Animations & scroll effects |
| Lucide React | Icon library |
| Google Fonts | Space Grotesk + Inter |

---

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Buttons.tsx        # PrimaryButton, SecondaryButton
│   │   └── FadeIn.tsx         # Reusable scroll-reveal animation
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ExpertiseMarquee.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceTimeline.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── data/
│   └── index.ts               # All site content (edit here to update copy)
├── types/
│   └── index.ts               # TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css                  # Global styles, custom utilities, marquee
```

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally:

```bash
npm run preview
```

---

## Customizing Content

All editable content lives in **`src/data/index.ts`**:

- `navLinks` — navigation items
- `expertiseLabels` — marquee keywords
- `services` — services/capabilities accordion
- `experiences` — professional timeline
- `projects` — project showcase cards
- `skillCategories` — skills grouped by category

Update these arrays and the UI updates automatically — no component changes needed.

---

## Setup Checklist Before Launch

### 1. ⚠️ Replace Placeholder Content

Search the codebase for `YOUR-DOMAIN-HERE` and replace with your actual domain in:
- `index.html` — canonical URL, og:url, og:image, JSON-LD Person schema URL

### 2. 📸 Add Your Portrait Photo

In `src/components/HeroSection.tsx`, replace the `HeroVisual` abstract component on the right column with a real portrait:

```tsx
<img
  src="/anubhav-agarwal.webp"
  alt="Anubhav Agarwal — Digital Marketing Specialist"
  width={420}
  height={420}
  className="rounded-2xl object-cover w-full max-w-[420px]"
/>
```

Place your photo in the `public/` folder as a WebP file for best performance.

### 3. 📬 Connect the Contact Form

In `src/components/ContactSection.tsx`, find the `handleSubmit` function and replace the placeholder `setTimeout` with a real form delivery service:

**Option A — Formspree (easiest, free tier available)**
```ts
const result = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' },
});
if (result.ok) setFormState('success');
else setFormState('error');
```
Sign up at https://formspree.io, create a form, and copy the form ID.

**Option B — EmailJS**
```bash
npm install @emailjs/browser
```
See https://www.emailjs.com/docs/ for setup guide.

**Option C — Custom backend**
Replace with your own API endpoint using `fetch()`.

Also remove the disclaimer `<p>` elements at the bottom of the form once integrated.

### 4. 🔍 SEO Configuration

- Set real `<link rel="canonical" href="..." />` in `index.html`
- Replace the `og:image` meta tag with a real 1200×630 social preview image
- Add a `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://YOUR-DOMAIN.com/sitemap.xml
  ```
- Generate and add a `public/sitemap.xml` after your domain is confirmed

### 5. 🌐 Add Live Project URLs

When you have confirmed public URLs for any projects, add them to the `projects` array in `src/data/index.ts`:

```ts
{
  id: 1,
  url: 'https://your-confirmed-live-url.com', // Only add when confirmed and live
  ...
}
```

### 6. 🖼️ Replace Favicon

Replace `public/favicon.svg` with your finalized brand favicon once branding is complete. For broad browser support, also add a `public/favicon.ico` and update the `<link>` in `index.html`.

### 7. 📝 Add Your Personal Email (Optional)

If you want to display a contact email address publicly, add it to the Contact section in `ContactSection.tsx`. Do not display the GEO SEO Lab company email as a personal address.

---

## Deployment

### Netlify (recommended)

1. Run `npm run build`
2. Drag the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop)
3. **Or** connect your Git repo and configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages

```bash
npm install -D gh-pages
```

Add to `package.json`:
```json
"homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

---

## Accessibility

- Skip-to-main-content link for keyboard users
- All interactive elements have visible `:focus-visible` styles
- Form labels associated with inputs via `htmlFor`/`id`
- Marquee content duplicated in a visually-hidden `<ul>` for screen readers
- `prefers-reduced-motion` respected throughout all Framer Motion animations
- Semantic HTML throughout: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<form>`
- ARIA attributes: `aria-label`, `aria-expanded`, `aria-controls`, `aria-labelledby`

---

## Performance

- **JS bundle:** ~410 kB raw / ~127 kB gzip
- **CSS:** ~25 kB raw / ~6 kB gzip
- Google Fonts loaded with `preconnect` and `display=swap`
- No unused third-party scripts
- Use WebP/AVIF for photos; set explicit `width`/`height` to prevent layout shifts
- Images below the fold should use `loading="lazy"`

---

*Built for Anubhav Agarwal — Digital Marketing, SEO & GEO Specialist*
