# Porsche 911 Showcase – PRD

## Original Problem Statement
"Bygg meg en hjemmeside som viser Porsche 911. Muligheter for å kontakte meg på telefon + mail. Siden skal beskrive litt om historien til Porsche. Hovedfargen skal være Porsche Gul"

## User Choices
- Phone: 951 95 590, Email: terhe.haugensen@gmail.com
- Contact form is mockup (saves to DB only, no email sending — Resend integration deferred)
- Multiple 911 models showcased
- Style: Sportslig/dynamisk (lyse seksjoner, bold typografi, racing-følelse)

## Architecture
- Frontend: React + Tailwind, Cabinet Grotesk + Inter, Sonner toasts
- Backend: FastAPI + Motor + MongoDB
- Single-page Norwegian site

## Implemented (Dec 2025)
- Sticky glassmorph navbar with mobile menu
- Hero with parallax-feel 911 GT3 image and Porsche Yellow accents
- History section: vintage image + 5-step timeline + brand quote panel
- Models gallery: bento grid with Carrera, Turbo S, GT3, Targa, Dakar (specs + tagline)
- Contact section: phone link (tel:+4795195590), email link (mailto:), POST /api/contact form
- Footer
- Backend: POST/GET /api/contact, validated with Pydantic + EmailStr, persisted to `contact_messages`

## Backlog
- P1: Resend integration to actually email submissions
- P2: Image lightbox / detail pages per model
- P2: Norwegian SEO meta tags + OG image
- P2: Animation polish with Framer Motion / Lenis smooth scroll
