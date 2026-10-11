# DevBoard

A tiny dashboard for my projects, tasks, and notes. Built mostly because I wanted to learn Next.js and MongoDB without spending another week watching tutorials.

Is it going to change the world? Probably not.

Did I learn something building it? That's the point.

## What it is

A simple personal dashboard for keeping track of projects, the tasks inside them, and notes about things worth remembering. Create a project, break it into tasks, tick them off, and watch the progress bar move. The progress isn't a number I typed in myself — it gets calculated from the tasks.

That's pretty much the whole idea.

## Status

Under development. The UI is mostly there, the persistence is not — right now the data lives in hardcoded arrays inside the components, so a page refresh throws away anything you typed.

What's actually built and what isn't:

**Done**

- Dashboard layout — navbar, summary stats, project card grid
- Project cards with a progress bar calculated from completed vs. total tasks
- "New Project" modal with title, description, and a dynamic task list (add and remove rows)
- Small reusable pieces (`Button`, `Statastics`, `Navbar`) built with Tailwind

**Not done yet**

- MongoDB — nothing is saved anywhere, the form doesn't submit
- Marking tasks complete / incomplete
- Notes
- A per-project detail page
- Server Actions, dynamic routes, TypeScript

I left the unfinished stuff out of the feature list below rather than write a README for a product that doesn't exist yet.

## Tech stack

Currently in the repo:

- [Next.js](https://nextjs.org) 16 (App Router) — Turbopack, React Compiler
- React 19
- Tailwind CSS 4
- `react-icons`

Coming later:

- MongoDB via the official Node.js driver
- Server Actions for mutations
- TypeScript

## Running it

Needs Node.js 20.9+ (that's what Next 16 asks for).

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

## Environment variables

None yet — there's no database connection to configure. When MongoDB lands it'll need something like this in a `.env.local` (which is gitignored, and should stay that way):

```bash
MONGODB_URI="mongodb+srv://<user>:<password>@<cluster>/<dbname>"
```

I'm writing that from the usual convention rather than from the actual connection code, so check it against whatever I end up using.

## The data model

Three collections, once this part is built:

- `projects` — title, description
- `tasks` — title, done flag, `projectId`
- `notes` — title, content, `projectId`

Tasks and notes point back at their project through `projectId`, and progress is derived from the tasks. No stored percentage to drift out of sync.

## Why

The goal is to learn by building something that has actual functionality, not by accumulating another folder of half-finished tutorial projects. It's the excuse to practise App Router and dynamic routes, the Server/Client Component split, forms and Server Actions, MongoDB CRUD and document relationships, and React state.

Scope is deliberately small so I actually finish it.

## License

Do what you want with it.