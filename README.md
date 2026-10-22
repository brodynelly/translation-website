# Translation Website

A coursework React app built on the Creative Tim Black Dashboard React template. The UI accepts Spanish text and lets a reader select words, but live translation is disabled: the earlier implementation called Azure Translator directly from the browser and included a subscription key in public client code. A server-side proxy with protected credentials is needed before translation can safely be enabled.

## Local setup

Requirements: Node.js 20 and Corepack. This repository uses the committed Yarn v1 lockfile.

```sh
git clone https://github.com/brodynelly/translation-website.git
cd translation-website
corepack prepare yarn@1.22.22 --activate
yarn install --frozen-lockfile
yarn start
```

## Checks

`yarn test --watchAll=false` runs the credential-free Translator view smoke test. `yarn build` creates the static production bundle. CI verifies dependency installation from the committed lockfile, the smoke test, and the build. The `deploy` script publishes with `gh-pages`; it is not used by these instructions.

## Attribution and limitations

This repository retains substantial Creative Tim Black Dashboard React template code. See [LICENSE.md](LICENSE.md) and the notices in the source. The translation UI is a coursework addition. No production translation backend, secret management, or provider credential is configured.
