# Roufi Vet: Project Overview

Roufi Vet is the public website for Roufi Vet Clinic, a veterinary practice in Hamma Bouziane, Constantine, Algeria. It presents the clinic and its small- and large-animal services, and offers a contact form and an appointment form.

It is a Next.js 15 site written in JavaScript, with 20 pages and one API route. There is no database and no login.

*Reviewed on 2026-11-05 at commit `35d4451`. Everything below comes from the code, a local production build, and `npm audit`, not from the root README, which is out of date ([see below](#why-the-root-readme-doesnt-match)).*

## Current status

| Area | Status |
|---|---|
| Production build | Passes (`npm run build`, Node 24.21) |
| Public pages | All 20 build and are statically prerendered |
| Contact form | Built to email the clinic once mail settings are configured (not tested with real credentials), but shows the visitor no confirmation |
| **Appointment booking** | **Does not work.** Submitted bookings are not sent or saved anywhere |
| **Page content** | **Names another clinic on 6 pages and other people on 1** |
| **Dependencies** | **`npm audit`: 8 vulnerable production packages, 1 critical and 7 high** |
| Linting | `npm run lint` fails |
| Tests and CI | None |
| Admin dashboard | Removed from the repo |

Details and fixes are in [Known issues](#known-issues).

## The clinic

This is what the site currently tells visitors. Have the clinic confirm it, because the site contradicts itself in places ([issues 7 and 11](#should-fix)).

| | |
|---|---|
| **Name** | Roufi Vet Clinic (also written Roufi Vet, RoufiVet, and Roufi Veterinary Clinic) |
| **Address** | CH3J+GJ9, Hamma Bouziane, Constantine |
| **Phone** | +213 551.21.76.99 (main and emergency), +213 771.12.40.91 |
| **Email** | roufivet92@gmail.com |
| **Veterinarian** | Dr. Belkacemi Abdelkrim, over 33 years of experience |
| **Founded** | 1992 |
| **Hours** | Saturday–Thursday 8:00 AM–7:00 PM; Friday 9:00 AM–12:00 AM |

## Tech stack

Versions are the ones installed from `package-lock.json`.

| Purpose | Technology |
|---|---|
| Framework | Next.js 15.1.7 (App Router) |
| UI | React 19.1.0, JavaScript and JSX (no TypeScript) |
| Styling | Tailwind CSS 3.4.17 |
| Components | shadcn/ui-style components on Radix UI primitives, kept in `components/ui/` |
| Icons | lucide-react 0.475.0 |
| Forms | react-hook-form 7.55.0, Zod 3.24.2 |
| Dates | date-fns 4.1.0, react-day-picker 9.6.4 |
| Email | nodemailer 6.10.0 through Gmail |
| Font | Poppins, loaded with `next/font/google` |

## Repository layout

```text
Roufi-Vet/
├── README.md                  Out of date
├── PROJECT_OVERVIEW.md        This file
└── roufi-vet-web/             The application; run all commands here
    ├── app/
    │   ├── layout.js          Root layout, font, site metadata
    │   ├── page.js            Home page
    │   ├── globals.css        Tailwind directives and base font
    │   ├── api/contact/       Contact form email endpoint
    │   ├── About/  BookAppointment/  Contact/  ServicesPage/
    │   ├── LargeAnimal/       Section page + 3 service pages
    │   └── SmallAnimal/       Section page + 10 service pages
    ├── components/            Shared site components
    │   └── ui/                Low-level UI components
    ├── hooks/use-toast.js     In-memory toast notification store
    ├── lib/utils.js           cn() class name helper
    ├── public/assets/         Images and SVGs
    ├── tailwind.config.mjs    Brand colors
    └── package.json
```

The `@/` import alias points to `roufi-vet-web/` (set in `jsconfig.json`).

## Getting started

You need Node.js 18.18 or later, which is the minimum for Next.js 15. The build was verified on Node 24.

```bash
git clone https://github.com/fadibel/Roufi-Vet.git
cd Roufi-Vet/roufi-vet-web
npm install
npm run dev
```

Open <http://localhost:3000>.

### Environment variables

The contact form needs these three values. Without them the site still runs, but sending the form fails. Create `roufi-vet-web/.env.local`, which git ignores:

```bash
EMAIL_USER=sending-address@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=inbox-that-receives-messages@example.com
```

| Variable | Purpose |
|---|---|
| `EMAIL_USER` | Gmail account that sends the message |
| `EMAIL_PASS` | A Gmail App Password for that account, not its normal password |
| `EMAIL_TO` | Address that receives contact form messages |

### Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `.next/` |
| `npm start` | Serve the production build |
| `npm run lint` | Run lint checks (currently fails, see [issue 13](#should-fix)) |

## Site map

Routes are case-sensitive: `/About` works, `/about` returns a 404.

### Main pages

| Route | Contents |
|---|---|
| `/` | Hero, welcome text, links to the two service sections, call to action |
| `/About` | Clinic story, core values, Dr. Belkacemi, facility |
| `/ServicesPage` | Service overview, detailed descriptions, FAQ |
| `/BookAppointment` | Appointment form, service summary, hours |
| `/Contact` | Contact form, clinic details, Google Map |
| `/api/contact` | `POST` endpoint that emails contact form messages |

### Large animal services

| Route | Contents |
|---|---|
| `/LargeAnimal` | Section page linking to the three services below |
| `/LargeAnimal/equine` | Wellness, vaccinations, pre-purchase exams, lameness, dentistry, surgery, reproduction |
| `/LargeAnimal/cattle` | Wellness, vaccinations, breeding soundness, health certificates, dehorning, C-sections |
| `/LargeAnimal/farmhouse-call` | On-site visits for farm animals, cattle, and horses |

### Small animal services

| Route | Contents |
|---|---|
| `/SmallAnimal` | Section page linking to the ten services below |
| `/SmallAnimal/willnesscare` | Annual exams, puppy and kitten care (the route name is misspelled) |
| `/SmallAnimal/diagnostics` | Digital X-rays, ultrasound, in-house lab |
| `/SmallAnimal/ultrasoundandecho` | Ultrasound and echocardiograms |
| `/SmallAnimal/dentistry` | Dental exams and care |
| `/SmallAnimal/surgery` | Surgical services and what to expect |
| `/SmallAnimal/orthopedics` | ACL/CCL repair, FHO, luxating patella, fractures |
| `/SmallAnimal/tplo` | Tibial plateau leveling osteotomy |
| `/SmallAnimal/tta` | Tibial tuberosity advancement |
| `/SmallAnimal/painmanagement` | Pain relief and rehabilitation |
| `/SmallAnimal/exotic-pocketpets` | Rabbits, hamsters, and other small pets |

## How it works

### Rendering

All 20 pages are prerendered as static HTML at build time. Only `/api/contact` runs on demand.

Three files are client components, because they need browser state: [Header.jsx](roufi-vet-web/components/Header.jsx), [BookAppointment/page.jsx](roufi-vet-web/app/BookAppointment/page.jsx), and [Contact/page.js](roufi-vet-web/app/Contact/page.js). Everything else is a server component.

The root layout only sets the font and metadata. Each page imports and renders `Header` and `Footer` itself, and adds `mt-20` so its content clears the fixed header.

### Shared components

| Component | Purpose |
|---|---|
| `Header` | Fixed navigation that hides when scrolling down and returns when scrolling up, with a mobile menu |
| `Footer` | Logo, social icons, links, contact details |
| `Hero`, `About`, `Services`, `CallToAction` | The sections of the home page |
| `Service2` | Six-card service overview on `/ServicesPage` |
| `HeroBanner` | Image banner with a title, on the two section pages |
| `ServiceCard` | Image-and-title card used in the service grids |
| `ui/*` | Button, Card, Input, Select, Calendar, Form, and other low-level components |

### Contact form

```text
/Contact form ──> Zod validation in the browser
              ──> POST /api/contact
              ──> nodemailer through Gmail
              ──> Email arrives at EMAIL_TO
```

The form collects name, email, phone, subject, message, and a "current pet owner" checkbox. The email includes everything except that checkbox. Code: [route.js](roufi-vet-web/app/api/contact/route.js).

### Appointment form

The form has four sections (owner, date and time, pet, service) plus optional notes, and it validates with Zod. Weekends and past dates are disabled, and there are 14 half-hour slots from 9:00 AM to 4:30 PM, with no slots from 12:00 to 1:00 PM.

On submit, the only thing that happens is this ([page.jsx:112-120](roufi-vet-web/app/BookAppointment/page.jsx#L112-L120)):

```text
Submit ──> console.log in the visitor's own browser
       ──> toast() call, which displays nothing
       ──> form clears
```

No request is sent, so the clinic never learns about the booking.

### Styling

Styling is Tailwind utility classes. Two sets of brand colors are in use, and the site should settle on one:

| Color | Hard-coded in components | Tailwind token |
|---|---|---|
| Green | `#1a8b00` | `roufi-green` `#2D9D3A` |
| Red | `#ff0302` | `roufi-red` `#FF0000` |
| Cream | `#fffcf7` | `roufi-cream` `#FFF9F0` |
| Brown | | `roufi-brown` `#8D5B4C` |
| Light green | | `roufi-light-green` `#7CD655` |

## Deployment

The repo doesn't record where, or whether, the site is deployed: the README's Live Demo section is empty and there is no Vercel configuration. To deploy on Vercel:

1. Import the GitHub repository.
2. Set **Root Directory** to `roufi-vet-web`. This is required because the app isn't at the repo root.
3. Add `EMAIL_USER`, `EMAIL_PASS`, and `EMAIL_TO` in the project's environment variables.
4. Deploy.

**Fix issues 1 to 6 below before going live**, or right away if the site is already up.

## Project history

The repo has 29 commits from 2025-02-23 to 2025-05-31. Work went from project setup, through the home page sections and the About, Contact, and booking pages, to the service pages and a series of changes to the call button.

A separate `dashboard/` app was then added (`1628657`) and later deleted (`35d4451`). It was a prototype, never connected to this website:

- It displayed hard-coded sample appointments.
- Its login was a hard-coded check in browser code, with a `localStorage` flag.

It can still be recovered from git if you want the interface as a starting point:

```bash
git checkout 35d4451^ -- dashboard
```

A real version would need a database, server-side authentication, and the booking form connected to it.

## Why the root README doesn't match

The root [README.md](README.md) describes a different version of the project.

| Topic | README says | Actually |
|---|---|---|
| Framework | React 18 with Vite | Next.js 15 with React 19 |
| Language | TypeScript | JavaScript |
| Routing | React Router | Next.js file-based routing |
| Data and charts | React Query, Recharts | Neither is installed |
| Where to install | Repo root | `roufi-vet-web/` |
| Node version | 16+ | 18.18+ |
| Dev URL | `localhost:8080` | `localhost:3000` |
| Build output | `dist` | `.next` |
| Admin dashboard | Fully featured | Deleted |
| Brand colors | `#4F7942`, `#DC2626`, `#FAF7F0` | See [Styling](#styling) |
| License | MIT | No license file in the repo |

The README also publishes demo admin credentials ([lines 126-130](README.md#L126-L130)). Remove them, and take down any old dashboard deployment if one still exists.

## Known issues

### Fix first

| # | Issue | Fix |
|---|---|---|
| 1 | **Appointments are lost.** Bookings go only to the visitor's browser console, yet the form clears as if it worked. See [Appointment form](#appointment-form). | Send bookings by email through a new API route, as the contact form does, or store them in a database. Until then, replace the form with a phone number. |
| 2 | **Another clinic's details are live.** "Buffalo Veterinary Clinic" appears 7 times across farmhouse-call, diagnostics, exotic-pocketpets, orthopedics, painmanagement, and surgery. "Dr. Gotfredson and Nicole Gotfredson, CVT" appear on [ultrasoundandecho](roufi-vet-web/app/SmallAnimal/ultrasoundandecho/page.jsx#L119) as this clinic's sonographers. The text appears to come from another clinic's site. | Rewrite the service pages in the clinic's own words, and have the clinic confirm every service and credential the site claims. Some text may also be copyrighted. Delete the commented-out copies too, which contain 4 more mentions. |
| 3 | **Vulnerable dependencies.** `npm audit` reports 8 vulnerable production packages. `next` 15.1.7 is in range for a critical remote code execution flaw in the React flight protocol that App Router apps use ([GHSA-9qr9-h5gf-34mp](https://github.com/advisories/GHSA-9qr9-h5gf-34mp)), among others. Some advisories don't apply, as the site has no middleware or Server Actions. | Upgrade to `next@15.5.29` and `nodemailer@10.3.1` (a major version, so retest email), then remove the unused `@shadcn/ui`. Rerun `npm audit`. `zod` has no automatic fix; it runs only in the browser here, so it is lower priority. |
| 4 | **Form messages never appear.** Both forms call `toast()`, but no `<Toaster />` is rendered anywhere. Visitors see no success message, and no error when sending fails. The contact form also has no handling for network failures. | Add a toast renderer to the root layout, or show the result inline in the form. |
| 5 | **Home page buttons do nothing.** In [CallToAction.jsx](roufi-vet-web/components/CallToAction.jsx#L23-L29), "Call Now" has no action, and "Book Online" passes `href` to a plain `<button>`. | Use `<a href="tel:+213551217699">` and a `next/link` to `/BookAppointment`, through the Button's `asChild` prop. |
| 6 | **Surgery image is expected to break in production.** 11 pages use `/assets/surgery.png`, but the file is `Surgery.png`. Windows ignores the difference; Linux hosts such as Vercel don't. | Change the references to `/assets/Surgery.png`. |

### Should fix

| # | Issue | Fix |
|---|---|---|
| 7 | **Hours and booking disagree.** The calendar [blocks Saturday and Sunday](roufi-vet-web/app/BookAppointment/page.jsx#L270-L276), but the same page says the clinic is [open Saturday to Thursday, plus Friday](roufi-vet-web/app/BookAppointment/page.jsx#L582-L585). Friday's closing time of "12:00 AM" means midnight, and may be meant as noon. Slots also end earlier than the stated hours. | Confirm the real schedule, then make the calendar, slots, and hours match. |
| 8 | **Large animals can't be booked.** Pet types are dog, cat, bird, rabbit, and other, and the service list has no large-animal options, although those pages send visitors to this form. | Add large-animal types, services, and a farm-visit option. |
| 9 | **Wrong labels on small-animal pages.** All 10 service pages say "Other Large Animal Services" and "all large animals". All 13 service pages use the alt text "Veterinarian with horse", and the Large Animal cards have unrelated alt text, such as "Cat and rabbit together" on Equine. | Correct the text, and check the other cards' alt text against their images. |
| 10 | **The contact API trusts its input.** There is no server-side validation, rate limiting, or spam protection, and raw error messages are returned to the browser. `replyTo` isn't set, so staff can't simply reply to a message. | Validate with the same Zod schema on the server, add rate limiting or a CAPTCHA, return a generic error, and set `replyTo`. |
| 11 | **Inconsistent claims.** "[Founded in 1992](roufi-vet-web/app/About/page.js#L21)" is followed by "for over a decade", while Dr. Belkacemi has 33 years. The booking page offers an emergency line, but the FAQ refers after-hours emergencies to other hospitals. | Confirm with the clinic. |
| 12 | **Weak SEO.** The site description is still "[Generated by create next app](roufi-vet-web/app/layout.js#L22)". No page has its own title or description, and there is no sitemap or `robots.txt`. | Add metadata to each page and generate a sitemap. |
| 13 | **Linting is broken.** `npm run lint` stops with `Cannot serialize key "parse" in parser`, and `next build` shows the same error but continues. The cause hasn't been diagnosed. Upgrading Next.js in issue 3 may change it. | Retest after the upgrade, then fix the config. |
| 14 | **Component styling is incomplete.** The UI components use theme classes such as `bg-primary`, `bg-accent`, and `text-muted-foreground`, which aren't defined in Tailwind. [calendar.jsx](roufi-vet-web/components/ui/calendar.jsx) also uses react-day-picker v8 option names, most of which v9 ignores. | Define the theme tokens and update the calendar to the v9 names. |

### Cleanup

- **Duplication:** the list of services is copied into all 13 service pages. Move it to one data file, and move `Header` and `Footer` into the layout.
- **Unused packages:** `@shadcn/ui`, `@types/react-router-dom`, `detect-node-es`, `framer-motion`, `get-nonce`, and `is-number` aren't imported anywhere. `@tailwindcss/typography` is installed but not enabled.
- **Image performance:** `logo.png` is 1.4 MB and the footer loads it unoptimized on every page. The code has 20 `<img>` tags and 2 `next/image` components.
- **Image rights:** check the licenses for `GettyImages-184384329-…jpg` and `zoetis.jpg`, whose names suggest third-party sources, and replace the Unsplash image linked directly from `CallToAction`.
- **Placeholders:** the footer's social links go to `#`, the About page shows "DR" and empty boxes where photos belong, and the phone fields use the US format `(555) 123-4567`.
- **Naming:** `willnesscare` (route), `Farmhosue-Calls.png`, and `Team-Baanner.jpg`. Route names could also become lowercase, with redirects from the old ones.
- **Small code fixes:** [Footer.jsx:42](roufi-vet-web/components/Footer.jsx#L42) has a broken hover class, and the footer's internal `<a>` links should use `next/link`.
- **Leftovers:** remove commented-out code, unused imports, and the unused assets `Meet-Our-Team-Topography.svg` and `petimage.jpeg`.
- **Missing project basics:** tests, CI, a custom 404 page, `.env.example`, and a `LICENSE` file if one is intended.
