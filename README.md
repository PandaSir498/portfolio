# Ayush Adhikari Portfolio

A static graphic design portfolio built with HTML, CSS, and JavaScript.

## Run locally

Open `index.html` in a browser, or serve the site from the workspace root:

```sh
python -m http.server 8000 --directory .
```

Then visit `http://localhost:8000`. No build step or package installation is required.

## Structure

```text
./
  index.html                 Page content and entry point
  css/style.css              Layout, responsive styles, and themes
  js/script.js               Project data and page interactions
  assets/
    images/projects/         Portfolio artwork
    images/profile/          Portrait and about photo
    documents/               Downloadable resume
scripts/
  browser-check.cjs          Browser regression checks
docs/archive/              Historical task notes
```

## Edit the portfolio

- Edit text, contact links, and form fields in `index.html`.
- Edit `PROJECT_DATA` and `SERVICES_DATA` in `js/script.js`.
- Edit colors, spacing, themes, and breakpoints in `css/style.css`.
- Keep asset paths relative to `index.html`, such as `assets/images/projects/elgato-brand-identity.png`.

The contact form uses EmailJS. Its public key is initialized in `index.html`; service and template settings are in `js/script.js`. Delivery requires internet access and a working EmailJS configuration. Google Fonts also loads from the internet.

## Validate changes

With Node.js 22 or newer:

```sh
npm run check
npm test
```

Browser checks use Microsoft Edge on Windows without npm dependencies. Set `BROWSER_PATH` to a Chromium-compatible browser executable if needed. Checks cover images, six screen widths, filters, mobile navigation, modal focus, themes, and simulated contact submissions.

Historical notes are preserved in `docs/archive/`; they describe earlier work and are not a current feature checklist.
