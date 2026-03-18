# Ajura Clothes

Faith-driven African fashion brand website — built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- Framer Motion
- TanStack Query
- Wouter (routing)

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Netlify

This repo is configured for Netlify continuous deployment via `netlify.toml`.

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- API calls (`/api/*`) are proxied to the backend — update the `netlify.toml` redirect URL when you have a production API server.
