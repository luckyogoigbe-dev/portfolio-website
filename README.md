# Personal Portfolio Website

A responsive personal portfolio built with plain HTML, CSS, and JavaScript — no frameworks, no build step. Includes a hero section with a typing effect, an about section, a skills section with progress bars, a projects grid, a contact form, and a dark/light theme toggle.

## Files
- `index.html` — page structure and content
- `style.css` — styling, layout, responsiveness, theming
- `script.js` — typing effect, theme toggle, mobile menu, smooth scroll, contact form handling

## Customize it
1. Replace "Lucky" and the hero text in `index.html` with your own name and tagline.
2. Update the `roles` array in `script.js` with the titles you want to cycle through.
3. Edit the **Skills** section's card list and bar widths to match your own skills.
4. Replace the **Projects** cards with your real projects — swap the emoji thumbnail, description, tags, and links.
5. Update the `socials` links and the `mailto:` address in the **Contact** section.
6. The contact form is front-end only. To actually receive messages, connect it to a service like [Formspree](https://formspree.io) or your own backend endpoint.

## Push it to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit: personal portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Publish it for free with GitHub Pages
1. Go to your repo on GitHub → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Pick the `main` branch and the `/ (root)` folder, then **Save**.
4. Your site will be live at `https://<your-username>.github.io/<your-repo>/` within a minute or two.
