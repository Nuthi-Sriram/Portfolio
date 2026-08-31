# Sriram Nuthi — Portfolio

Source for my personal portfolio site: **[sriram-nuthi.web.app](https://sriram-nuthi.web.app)**

A single-page site built with [Gatsby](https://www.gatsbyjs.com/) and React, covering my work
experience, projects, and publications. The visual design is based on
[Brittany Chiang's v4 portfolio template](https://github.com/bchiang7/v4), customized with my own
content, layout changes, and features.

## Versions

The site has gone through three rebuilds over the years. Each one is kept online so old links
still work — they're read-only snapshots, not maintained going forward.

| Version | Live                            | Active              | Built with         |
| ------- | ------------------------------- | ------------------- | ------------------ |
| v3      | https://sriram-nuthi.web.app    | Aug 2026 – present  | Gatsby 3           |
| v2      | https://sriram-nuthi-v2.web.app | Oct 2023 – Aug 2026 | Gatsby 3           |
| v1      | https://sriram-nuthi-v1.web.app | Jul 2020 – Oct 2023 | Static HTML/CSS/JS |

## Running it locally

Each version is self-contained in its own folder.

```bash
cd v3
npm install
npm run develop   # http://localhost:8000
```

## Deploying

The three versions are separate Firebase Hosting sites under one Firebase project, each with its
own deploy target so a bare `firebase deploy` can't accidentally publish all of them at once.

```bash
npm run deploy:live   # the current site, sriram-nuthi.web.app
npm run deploy:v1
npm run deploy:v2
```

`v1/` and `v2/` are frozen — their build output is committed as-is so the old sites can always be
redeployed without resurrecting their original toolchains. `v3/` rebuilds on every change instead,
so `npm run deploy:live` needs a fresh `npm run build` inside `v3/` first — pushing to `master`
does this automatically via GitHub Actions.

## License

MIT, per [`v3/LICENSE`](./v3/LICENSE).
