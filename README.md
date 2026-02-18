# Translation Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![CI](https://github.com/brodynelly/translation-website/actions/workflows/ci.yml/badge.svg)](https://github.com/brodynelly/translation-website/actions/workflows/ci.yml) ![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)

Web app for reading articles in a foreign language with inline translation via Google Translate API. Built to help with vocabulary acquisition by translating in-context rather than whole passages.

## Tech Stack

- **React** — UI
- **Node.js / Express** — backend API proxy
- **Google Translate API** — translation engine
- **Bootstrap** — styling
- **Axios** — HTTP client

## Getting Started

**Prerequisites:** Node.js 18+, npm or yarn, Google Translate API key

```bash
git clone https://github.com/brodynelly/translation-website
cd translation-website
npm install
```

Set up environment variables:

```bash
cp .env.example .env
# Add your GOOGLE_TRANSLATE_API_KEY to .env
```

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Usage

1. Paste a Spanish (or other language) article URL or text into the input
2. Select source and target languages
3. Click any word or sentence to see its translation inline

## Project Structure

```
src/
├── components/     # Reusable UI components
├── views/          # Page-level components
├── routes/         # Route definitions
└── index.js        # App entry point
```

## License

MIT
