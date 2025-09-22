# Terremoto Website

Terremoto is a lightweight, static landing site for the Terremoto iOS app, which provides real‑time earthquake information for the Canary Islands and Madeira.

This repository contains the static files used for the public website and GitHub Pages deployment. It is intended as a simple, dependency‑free site (HTML, CSS, and a small amount of JavaScript) to showcase the app and provide download and legal information.

What’s included
- `index.html` — Landing page with features, screenshots, and download section.
- `privacy-website.html` — Website privacy policy.
- `privacy-app.html` — Privacy information for the app.
- `TERMS.html` — Terms of use / EULA.
- `css/style.css` — Core styles and dark mode variables.
- `js/main.js` — Small interactions (theme toggle, dynamic year).
- `assets/` — Images used on the site (favicon, app icon, screenshots, badges).
- `LICENSE` — Project license and terms.

Deploying to GitHub Pages
1. Push the repository to GitHub.
2. In the repository settings → Pages, enable deployment from the `main` branch (root folder).
3. After a short build period, the site will be available at `https://<username>.github.io/<repo>/`.

Customizing
- Replace images in `assets/screenshots/` with your app screenshots (or update the file names referenced in `index.html`).
- Update the site title, description, and `og:` meta tags in `index.html` to match your project.
- Change brand colors by editing CSS custom properties in `:root` within `css/style.css`.

Contact
For questions or issues, open an issue on this repository or use the contact link on the site.

License
See `LICENSE` for license and terms.
