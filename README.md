# VR Dental Care — React Website

Dr. R. SREE VINITHA  
Dental Surgeon  
Phone: 8072888085

Local setup:
1. Install dependencies: npm ci
2. Start dev server: npm start
3. Build: npm run build

GitHub Pages deployment:
1. Set the `homepage` in package.json: replace `<username>` with your GitHub username.
2. Commit & push to `main`.
3. Run: `npm run deploy` (optional — workflow will auto-deploy on push to main).
4. The GitHub Action (/.github/workflows/deploy.yml) also auto-deploys the build to `gh-pages` branch.

Update contact details / images:
- Contact details (address, phone, email, doctor's name):
  - Edit src/pages/Contact.jsx — update the Address / Phone / Email displayed on the Contact page.
  - Edit src/pages/About.jsx — update the doctor's name and bio (replace placeholder with "Dr. R. SREE VINITHA, BDS").
- Contact methods:
  - WhatsApp (number): 8072888085
  - Email: mugeshsample@gmail.com
  - Update links in:
    - src/components/ContactForm.jsx (WhatsApp CTA href or change to mailto)
    - src/pages/Contact.jsx (WhatsApp booking link or mailto)
- Clinic images:
  - Replace SVG files in src/assets (doctor.svg, clinic-interior.svg, before.svg) with real images; update imports where used.

Notes:
- This project uses TailwindCSS. If you add new CSS files, ensure they are included in src/index.css or imported into components.
- For SEO enhancements, edit public/index.html meta tags.

Quick replace checklist:
- package.json: set `"homepage": "https://<username>.github.io/vr-dental-care"` → replace `<username>` with your GitHub username.
- src/components/ContactForm.jsx:
  - WhatsApp example: href="https://wa.me/8072888085?text=Hello%20I%20want%20to%20book%20a%20dental%20appointment"
  - Email example: href="mailto:mugeshsample@gmail.com?subject=Appointment%20Request&body=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment."
- src/pages/Contact.jsx:
  - Displayed phone: 8072888085
  - WhatsApp booking link: https://wa.me/8072888085
  - Email link: mailto:mugeshsample@gmail.com
- src/pages/About.jsx: replace placeholder doctor name with `Dr. R. SREE VINITHA, BDS`

Contact for edits:
- To change clinic details or doctor credentials later, edit the specific page files above; images live in src/assets.
