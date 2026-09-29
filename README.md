# Hack the Planet

A responsive cyberpunk fan site inspired by the cult classic *Hackers* and the aesthetics of 1995 digital culture.

## Features

- Boot sequence with skip control
- Terminal-style navigation and command interface
- Character dossiers, movie timeline, and case files
- 1995 vs. today technology comparison
- Sound and style section
- Link directory and project disclaimer
- Alias generator and 1995 tech quiz
- Reduced-motion support and mobile-responsive layout

## Local setup

```bash
npm install
npm run dev -- --host
```

Then open the local Vite URL shown in your terminal.

## Production build

```bash
npm run build
```

Vite uses `/` by default, which is suitable for local preview and root-domain deployment. For a GitHub Pages project site under a repository subpath, set `VITE_BASE_PATH` to that path when building:

```powershell
$env:VITE_BASE_PATH = "/repository-name/"
npm run build
```

The included GitHub Actions workflow detects the repository name and builds with the matching base path; it uses `/` for a `username.github.io` site. To use a custom domain or another root deployment, set the repository Actions variable `VITE_BASE_PATH` to `/`.

## GitHub Pages deployment

After this repository is connected to GitHub, the workflow in `.github/workflows/deploy-pages.yml` builds and deploys the default branch to GitHub Pages. In the repository settings, choose **Settings → Pages → Build and deployment → GitHub Actions** if Pages is not already configured. After a successful run, find the live site URL in **Settings → Pages** or in the `github-pages` deployment environment; no live URL is assumed here.

## Linting

```bash
npm run lint
```

## Content updates

Editable content and centralized external references for the archive live in `src/data/siteData.ts`. Update the navigation, character files, comparison rows, links, quiz prompts, and command responses there. Visual styling is managed in `src/styles.css`.

## Notes

This is an unofficial fan project created for educational and portfolio purposes and is not affiliated with the filmmakers, studios, actors, or rights holders.
