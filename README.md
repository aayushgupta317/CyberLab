# CyberSafe Lab

A lightweight, static cybersecurity education site. It uses plain HTML, CSS, and JavaScript so it can be understood and extended without a framework or build step. The project is designed for GitHub Pages.

## Run locally

From the repository root, start Python's built-in static server:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser. Stop the server with `Ctrl+C`.

## Project structure

- `index.html` — home page and initiative overview
- `guides.html` — searchable and filterable guide library
- `guide.html?id=...` — reusable article page for each field guide
- `projects.html` — project portfolio and planned work
- `about.html` — mission, principles, and contribution information
- `assets/styles.css` — shared design system, responsive layouts, and components
- `assets/config.js` — optional GitHub, project, and contact links
- `assets/guide-content.js` — guide copy and metadata in one editable data list
- `assets/guides.js`, `assets/guide.js`, `assets/site.js` — small interactions
- `.github/workflows/pages.yml` — deploys the static site to GitHub Pages on pushes to `main`

## Customize the site

Edit `assets/config.js` to add confirmed URLs and a contact email:

```js
window.CYBERSAFE_CONFIG = {
  githubProfile: "https://github.com/your-name",
  scanAScamRepository: "https://github.com/your-name/your-project",
  scanAScamDemo: "https://example.com/demo",
  contactEmail: "hello@example.com"
};
```

Only use real, working URLs and an email address you are comfortable publishing. Leave a value as an empty string to keep that action clearly marked as unconfigured. Do not publish private information.

To add a guide, add an object to `assets/guide-content.js` with a unique `id`, title, short summary, category (`accounts`, `messages`, or `privacy`), read time, intro, sections, checklist, example, and a reputable source URL. The guide card and `guide.html?id=your-id` article page are generated from that data. Use plain text in guide fields; the rendering code inserts these strings into the page.

To add a project, use the project markup in `projects.html` as a starting point. Label its stage accurately (for example, planned, in progress, or complete) and add links only after they exist. Record collaborative contributions carefully and distinguish team work from individual work.

## Deploy to GitHub Pages

The included workflow publishes the repository root whenever code is pushed to `main`. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source. After the workflow completes, the Pages URL appears in the repository's Pages settings and in the workflow deployment environment. The website needs no package installation or build command.

## Content and safety note

CyberSafe Lab is an independent initiative in development. The website does not imply official club status, verified membership, partnerships, or institutional affiliation. Its educational material is general guidance; keep links current and use the relevant service's official help pages for account-specific settings.
