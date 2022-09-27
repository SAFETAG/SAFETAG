# Project layout and local development

The main dependencies (as of September 2022) are
- Gatsby 4.20.0
- React 18.2.0
- Node.js 16
- npm 8.18.0

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

Additionally, there is a set of custom commands to handle content translations:
- **extract**: extracts all translatable strings from the source code and saves them as .json files that can be pushed with the below command
- **transifex-push**: pushes the translatable string JSON files to Transifex, making them available for translation using the Transifex web interface
- **transifex-pull**: downloads all the available locales and translated strings from Transifex
- **postproc**: applies a set of filters and corrections to the downloaded Transifex files so that they play nicely with Gatsby

All of these commands can be run with `npm run` (e.g. `npm run develop`), and they can be inspected and tweaked in the `package.json` file. You can also check the GitHub action workflow files (in `.github/workflows`) to see how these commands are used to build and deploy the project.
