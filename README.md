
# Eskinder Kassahun — Cloud Infrastructure & Cybersecurity Portfolio

Portfolio source for infrastructure, cybersecurity, networking, architecture,
automation, and supporting software-engineering work.

## Running the code

Run `npm i` to install dependencies, then `npm run dev` to start the local site.
Use `npm run build` for the production build.

## Evidence images

Verified case-study and project images can be added using the path conventions
in `public/images/case-studies/README.md` and `public/images/projects/README.md`.

## Résumé

No verified résumé PDF is currently stored in this repository. Add the final PDF
under `public/resume/`, then update `resumeUrl` in `src/data/profile.ts`.

## Live site (GitHub Pages)

  The workflow builds on every push to `main` and pushes the built site to the `gh-pages` branch. To get the live page:

1. Go to **https://github.com/Eskinder185/EKportfolio** → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set **Branch** to **gh-pages** and folder to **/ (root)**, then save.
4. Run **Deploy to GitHub Pages** from the Actions tab, or push to `main`.
5. The configured custom domain is **https://eskinder.dev**.
