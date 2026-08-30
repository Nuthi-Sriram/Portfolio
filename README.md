# Portfolio

Personal portfolio for Sriram Nuthi. Each major version is preserved and
deployed separately.

| Version | Active              | Stack              | URL                             |
| ------- | ------------------- | ------------------ | ------------------------------- |
| v3      | Aug 2026 – present  | Astro              | https://sriram-nuthi.web.app    |
| v2      | Oct 2023 – Aug 2026 | Gatsby 3           | https://sriram-nuthi-v2.web.app |
| v1      | Jul 2020 – Oct 2023 | Static HTML/CSS/JS | https://sriram-nuthi-v1.web.app |

> **Note:** `https://sriram-nuthi.web.app` does not serve v3 yet. The `live` target in
> `firebase.json` still points at `v2/public`, so `npm run deploy:live` publishes the **v2
> archive**. The target will be repointed at the v3 build when the Astro rebuild ships.

## Archives are frozen

`v1/` and `v2/` are historical snapshots. Do not refactor them, upgrade
their dependencies, or apply linting to them. Their build output is
committed on purpose so they can be redeployed without rebuilding their
original toolchains.

## Deploying

Always deploy a single target. A bare `firebase deploy` would publish all
three sites at once.

```bash
npm run deploy:live
npm run deploy:v1
npm run deploy:v2
```

Deploy targets live in `.firebaserc` and map to site IDs, not domains.
Configure them with `firebase target:apply`, never by hand.
