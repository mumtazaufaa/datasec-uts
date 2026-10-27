# Data Security — UTS Study Notes

A simple static study website based on the uploaded Data Security course materials (Sessions 1–7). Built with HTML, CSS, and vanilla JavaScript. No backend, login, or database required.

## Run locally

Open `index.html` in a browser. For a local server, run `python3 -m http.server 8000` from this folder, then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository, e.g. `datasec-uts`.
2. Upload all files and folders from this project to the repository root. Make sure `index.html` is at the root.
3. In GitHub, open **Settings → Pages**.
4. Under Build and deployment, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for the published URL to appear in the Pages section.

This is a public static website. Anyone who knows the URL may be able to open it; it is not access-controlled just because you share the link with only a few people.

## Pages

- `index.html` — overview and four study sections
- `chapters/computer-database-security.html` — Sessions 1–2
- `chapters/classical-encryption.html` — Sessions 3–4 and calculation practice
- `chapters/block-cipher-des.html` — Sessions 5–6
- `chapters/modes-of-operation.html` — Session 7
- `css/style.css` — minimalist responsive design
- `js/main.js` — shared navigation and mobile menu

## Notes

These notes summarize topics visible in the uploaded slides. They are a study aid, not a replacement for the lecturer's PPTs. Verify conventions, worked examples, and any additional algorithms against class notes. The Classical Encryption page uses the common A=0 to Z=25 convention for its sample calculations; use the exact convention taught in class if it differs.
