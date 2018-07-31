# App

## Development

```
npm install
npm run dev  # Run unit tests and app in watch mode
```

## Creating and running a production build locally

```
NODE_ENV=production npm run build
NODE_ENV=production npm start
```

## Creating a production build

```
npm install
NODE_ENV=production npm run build
NODE_ENV=production
```

## Running in production

This app can be run with a Procfile based process manager such as
[Foreman](https://github.com/ddollar/foreman).

For your first deployments, you can use the
[Node Foreman](https://github.com/strongloop/node-foreman) process manager by
calling `npm start`, but it is not recommended for production use.

This repository contains an `app.json` file for Heroku deployments. If you plan
to deploy elsewhere, remove the `app.json` from the repository root.
