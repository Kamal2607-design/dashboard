# SELYEK Dashboard

React + Node.js app for STERNA SELYEK — login, dashboard, and locations screens with frontend mock data (no database).

## Features

- **Login** — email validation, password (min 8 chars), show/hide password, routes to dashboard
- **Dashboard** — stats cards and empty-state panels
- **Locations** — location list (R S Puram), tabs, lock mapping table
- Sidebar nav: Dashboard & Locations only

## Quick start

```bash
# Install root + client + server deps
npm install
npm run install:all

# Run API (port 5000) + Vite (port 5173)
npm run dev:server
npm run dev:client
```

Or from each folder:

```bash
cd server && npm install && npm run dev
cd client && npm install && npm run dev
```

Open **http://localhost:5173**

## Demo login

Any valid email + password of 8+ characters works, for example:

- Email: `leo@sterna.com`
- Password: `password123`

## Project structure

```
dashboard/
  client/          React (Vite) frontend
  server/          Express API (login + static serve)
  package.json     Root scripts
```
