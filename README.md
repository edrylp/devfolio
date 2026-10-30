# Devfolio

My personal developer portfolio built with React, Vite, and Tailwind CSS.

This portfolio showcases who I am as a developer, the projects I've built, the technologies I work with, and the progress I'm making as I continue growing into full-stack development.

**Live Portfolio:** [edrylp.vercel.app](https://edrylp.vercel.app)

## About 

This portfolio highlights:

- personal projects
- a curated tech stack section
- a contact form for direct outreach
- a downloadable resume

The content is intentionally data-driven, which makes it easy to keep the portfolio current without rewriting large parts of the UI.

## Built With

**Frontend**
- React 19
- React Router 7
- Vite
- Tailwind CSS 4
- React Icons

**Backend & Services**
- Node.js
- Express 5
- Resend

**Utilities**
- Notyf
- dotenv

## Project Structure

```text
devfolio/
├── api/                 # Serverless contact form handler
├── public/              # Static assets such as images, fonts, and resume
├── src/
│   ├── assets/          # Global styles
│   ├── components/      # Reusable UI sections and cards
│   ├── data/            # Portfolio content stored as JSON
│   ├── hooks/           # useActiveSection hook
│   ├── pages/           # Route-level pages
│   ├── App.vue
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Running Locally

### Prerequisites

- Node.js `^20.19.0 || >=22.12.0`
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Environment Variables

To enable the contact form email handler, create a `.env` file in the project root:

```env
EMAIL_USER=your-email-address
RESEND_API_KEY=your-Resend-APIKey
```

These variables are used by [`api/contact.js`](/Users/dey/Developer/GitHub/devfolio/api/contact.js) to send form submissions via Resend.

## Updating Portfolio Content

Most of the portfolio content can be updated from the JSON files in [`src/data`](/Users/dey/Developer/GitHub/devfolio/src/data):

- [`src/data/projects.json`](/Users/dey/Developer/GitHub/devfolio/src/data/projects.json) for featured projects
- [`src/data/socials.json`](/Users/dey/Developer/GitHub/devfolio/src/data/socials.json) for social links
- [`src/data/technologies.json`](/Users/dey/Developer/GitHub/devfolio/src/data/technologies.json) for the tech stack section

Main page sections and copy can be updated in [`src/components`](/Users/dey/Developer/GitHub/devfolio/src/components) and route-level views in [`src/pages`](/Users/dey/Developer/GitHub/devfolio/src/pages).

## Contact Form

The contact form UI is implemented in the contact section components, while submissions are handled by api/contact.js.

The API endpoint uses Resend to process and send email submissions.

For local development, make sure your Resend API key is configured in .env. For production, configure it through Vercel environment variables.

## Notes

- Static assets, images, fonts, and resume.pdf are stored in public/.
- The portfolio supports light and dark themes.
- Navigation supports section-based scrolling and active section indicators.
- The project uses reusable React components and custom hooks to keep the code organized.
- The production build can be verified using npm run build.

## Purpose

This repository is more than a portfolio website. It reflects my approach to building applications, solving problems, and continuously improving as a developer.

As I work on more projects and strengthen my full-stack development skills, this portfolio grows with me.
