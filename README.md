# App

## Getting started

```
cp .env.sample .env   # Copy environment variables
npm install
npm run dev           # Run unit tests and app in watch mode
```

Then, point your browser to <http://localhost:3000>.

## Testing production build locally

```
npm install
NODE_ENV=production npm run build
NODE_ENV=production npm start
```

## Running in production

First, create a build:

```
npm install
NODE_ENV=production npm run build
```

The build can be run with a Procfile based process manager such as
[Foreman](https://github.com/ddollar/foreman).

For your first deployments, you can use the
[Node Foreman](https://github.com/strongloop/node-foreman) process manager by
calling `npm start`, but it is not recommended for production use.

This repository contains an `app.json` file for Heroku deployments. If you plan
to deploy elsewhere, remove the `app.json` from the repository root.
