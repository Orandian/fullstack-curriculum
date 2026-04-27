# Fullstack Developer Program — Curriculum Site

Documentation site for the 12-month fullstack developer program. Built with [Nextra](https://nextra.site) and deployed on Vercel.

🌐 **Live site:** https://fullstack-curriculum.vercel.app

---

## About the Program

A weekend-based fullstack developer program that takes students from zero to job-ready in 12 months. Covers HTML, CSS, Tailwind, JavaScript, React, TypeScript, Node.js, PostgreSQL, Docker, and deployment.

**Batch 1 starts August 1, 2026.**

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 14](https://nextjs.org) | Framework |
| [Nextra 3](https://nextra.site) | Docs theme |
| [Vercel](https://vercel.com) | Hosting |

---

## Local Development

```bash
# Clone the repo
git clone https://github.com/Orandian/fullstack-curriculum.git
cd fullstack-curriculum

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
pages/
├── index.mdx                    # Homepage
├── overview.mdx                 # Program overview & policies
├── month-01-html-css/           # Month 1 — HTML + CSS
├── month-02-css-js/             # Month 2 — CSS Grid, Tailwind + JS Intro
├── month-03-js-core/            # Month 3 — JavaScript Core (Part 1)
├── month-04-async-js/           # Month 4 — Async JavaScript
├── month-05-react-basics/       # Month 5 — React Basics
├── month-06-react-intermediate/ # Month 6 — React Intermediate
├── month-07-typescript-react/   # Month 7 — TypeScript + React
├── month-08-api-integration/    # Month 8 — API Integration + Testing
├── month-09-nodejs/             # Month 9 — Node.js + Docker
├── month-10-backend-db/         # Month 10 — Backend + Database
├── month-11-fullstack/          # Month 11 — Fullstack Project
└── month-12-deployment/         # Month 12 — Deployment + Job Prep
```

---

## Adding Content

Each month folder contains:

- `index.mdx` — month overview and weekly schedule
- `lesson-name.mdx` — individual lesson pages
- `projects/` — project briefs
- `_meta.js` — controls sidebar navigation order and labels

To add a new lesson:

1. Create `pages/month-XX/lesson-name.mdx`
2. Add an entry to `pages/month-XX/_meta.js`

---

## Deployment

Pushes to `main` automatically deploy via Vercel.

```bash
git add -A
git commit -m "feat: add new lesson"
git push
```
