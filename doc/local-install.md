# Project layout and local development

The main dependencies are
- Gatsby 5
- React 18.2.0
- Node.js 20 (see `.nvmrc` and the `engines` field in `package.json`)

To have the project running locally, you first need to have the above versions of Node.js and npm installed. The [Node download page](https://nodejs.org/en/download/) has install instructions for many use cases.

Once you have Node and npm installed, all other dependencies can be installed by running `npm install`.

After that, you can start a local webserver running the application with `npm run develop`, and the site will be accessible at `http://localhost:8000` in your browser.

## Build commands

There are many commands available that take care of specific parts of the build process. A complete list follows.

- **develop**: runs a local webserver with hot reloading (rebuilds when local files changed), ideal for changing things and see how they work
- **build**: generates a static version of the website, which can be run and accessed with the `serve` command
- **format**
- **start**: same as `develop`
- **serve**: runs a webserver with the static site generated with `build`
- **clean**: deletes all build files generated with `build`
- **lint**: checks the code for errors using ESLint

Additionally there is one command related to translations:
- **extract**: scans the source for translatable strings and writes them to
  `locales/en/site.json`, the English source file Weblate translates from

Translations themselves are committed to the repository under `locales/` by
Weblate, so no translation command runs at build time. See the Translations
section of the README.

All of these commands can be run with `npm run` (e.g. `npm run develop`), and they can be inspected and tweaked in the `package.json` file. You can also check the GitHub action workflow files (in `.github/workflows`) to see how these commands are used to build and deploy the project.
