# Translation Website

A coursework React app based on the Creative Tim Black Dashboard React template. Its Translator view accepts Spanish text and requests a Spanish-to-English translation from Microsoft Azure Translator. The interface also includes the upstream dashboard template.

## Local setup

Requirements: Node.js and npm. The translation API module reads `REACT_APP_AZURE_SUBSCRIPTION_KEY` and uses the `centralus` Azure region. This is a browser application: a CRA environment variable is compiled into client assets and does not protect a real subscription key. Do not put a production credential here or deploy the client with a real key. A server-side proxy with secret storage and request controls is needed before using a real Azure credential. No API key is provided in this repository.

```sh
git clone https://github.com/brodynelly/translation-website.git
cd translation-website
npm ci
npm start
```

Without a configured local translation key, the translation action is unavailable. The repository does not contain an Express backend or `.env.example`; the previous setup instructions claiming these were removed.

## Checks

`npm test` runs the Create React App test runner. `npm run build` creates the static production bundle. The repository currently has no dedicated CI verification workflow. The `deploy` script publishes the `build` directory with `gh-pages`; it is intentionally not used by these instructions.

## Attribution

This project retains substantial Creative Tim Black Dashboard React template code and its upstream license and notices. See [LICENSE.md](LICENSE.md) and the copyright notices in the source. The translator integration is a separate project addition; this repository does not claim ownership of the upstream dashboard template.
