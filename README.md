<h1 align="center">
 Safetag
</h1>

This project creates a web-based version of the full SAFETAG (Security Auditing Framework and Evaluation Template for Advocacy Groups) guide produced by Internews: https://safetag.org

The site is developed via Gatsby, default instructions for which appear below.

# Local Development

## 🔨 Dependencies

- Node 12.x
- Yarn or NPM


## 🚀 Start Developing

1.  Set Node.js version

    Assuming you already have [nvm](https://github.com/nvm-sh/nvm) on your machine, this will install the version specified in `.nvmrc` file:

    ```shell
    nvm install
    ```

2.  Install dependencies

    Navigate into your new site’s directory and start it up.

    ```shell
    yarn install
    ```



## Building for local development

The site uses Gatsby to generate all the web assets from the content files. Translations are handled through Transifex, and the project's build system is designed to sync with Transifex on every build.

The site is built using GitHub actions, which take care of all the interfacing with Transifex. If you want to build the site locally, you will need to set up Transifex credentials before building. Once you have a registered account, you'll need to generate an API token to get going:

1. Head to the [**User Settings**](https://www.transifex.com/user/settings/api/) by going to the main navigation, and clicking on your profile image in the top right corner
2. In the left menu, click on **API token**
3. Click **Generate a token**

Once you have your token, you will need to install the Transifex CLI command. On Debian/Ubuntu systems, this is available with `sudo apt install transifex-client`. On other platforms (including OSX), the command `sudo pip install transifex-client` should take care of it. See the [Transifex CLI repo](https://github.com/transifex/transifex-client/) for more details.

As the final setup step, run `tx init` and paste your API token when asked.

After installing the necessary project dependencies with `yarn install` or `npm install`, we are ready to build the project using the following commands:

```
yarn extract
yarn transifex-push
yarn transifex-pull
yarn build
```

If you're using npm instead of yarn, just replace the yarn command with `npm run`, e.g. `npm run transifex-push`. The `extract`, `transifex-push` and `transifex-pull` commands only need to be run once – they take care of detecting new translatable strings and uploading them to Transifex, as well as downloading updated translations.

If everything runs without error, you can go on working on the site using `yarn develop` or `npm run develop` to run a local webserver accessible through `http://localhost:8000`.

## Working with translations

The project is set up for easy translation of strings. Contributing to new and existing translations can be done at Transifex.

Once new content, pages or templates are added, it's important to mark strings as translatable so that they show up in the Transifex interface.

### Strings in code

In order to mark a string as translatable in the project code (say, in a JS variable), you'll only need to wrap it inside a `t()` object, so that

```
let variable = "value"
```

becomes

```
let variable = t("variable-value-string", "value")
```

The first parameter to `t` is the **key** of the string to use as an index for Transifex, and the only concern here is that it's a unique string. The second parameter is the English language string to be translated.


### Strings in HTML/JSX templates

There are templates inside the .js files for pages like the index or the guide builder. These templates look and behave like HTML, and have a specific procedure for marking translatable strings using the Trans tag. Using this example:

```
<ul>
  <li>Home</li>
  <li>Blog</li>
  <li>Contact</li>
</ul>
```

We'd mark it thus:

```
<ul>
  <li><Trans i18nKey="nav-home">Home</Trans></li>
  <li><Trans i18nKey="nav-blog">Blog</Trans></li>
  <li><Trans i18nKey="nav-contact">Contact</Trans></li>
</ul>


```

When marking up text using the Trans tag, keep in mind the following details:
- Links can be included inside Trans tags, but including any other element should be actively avoided. Notice how Trans is inside the `<li>` elements and not outside.
- The `i18nKey` sets the translation key (see the `t()` explanation above)


### Markdown files
The Markdown files inside the `content/` directory need no further work, as they're automatically pushed to Transifex on build.





## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

<!-- AUTO-GENERATED-CONTENT:END -->
