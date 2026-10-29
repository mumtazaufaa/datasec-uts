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
- `chapters/computer-database-security.html` — Sessions 1–2: CIA (5 aspek), OSI, attack tree, database security; bahasa sederhana + gambar slide
- `chapters/classical-encryption.html` — Sessions 3–4: model cipher, Caesar, Monoalphabetic, Playfair, Hill, Vigenère, Rail Fence, Kolom; gambar slide, cara hafal, latihan hitung (tambahan, jawaban diverifikasi dengan kode), tes diri
- `chapters/block-cipher-des.html` — Sessions 5–6: Feistel, DES 5 langkah, kekuatan, serangan; gambar slide + contoh 1 round (opsional)
- `chapters/modes-of-operation.html` — Session 7: ECB, CBC, CFB, OFB, CTR; rumus, kelebihan-kelemahan, gambar slide, tes diri
- `chapters/strategi-ujian.html` — peta soal, strategi waktu, cara mengerjakan soal hitung, tips Casio fx-991EX, daftar hafalan semua bab
- `img/` — gambar yang diambil dari slide dosen
- `css/style.css` — dark-theme responsive design (sidebar, contoh, tips Casio, latihan buka-tutup)
- `js/main.js` — shared navigation and mobile menu

## Notes

These notes summarize topics visible in the uploaded slides. They are a study aid, not a replacement for the lecturer's PPTs. Verify conventions, worked examples, and any additional algorithms against class notes. The Classical Encryption page uses a=0 to z=25 (sesuai slide dosen) and Hill C = PK for its sample calculations; use the exact convention taught in class if it differs. Practice problems marked "tambahan" are not from the slides; their answers were checked with code.
