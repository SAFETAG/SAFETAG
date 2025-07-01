<h1 align="center">
 Safetag
</h1>

This project creates a web-based version of the full SAFETAG (Security Auditing Framework and Evaluation Template for Advocacy Groups) guide produced by Internews: https://safetag.org

The site is developed via Gatsby, default instructions for which appear below.

# Local Development

## 🔨 Dependencies

- Node 20.x
- Yarn or NPM

## Project structure

The Safetag site is running on [Gatsby](https://www.gatsbyjs.com), employing
[PDFkit](https://github.com/foliojs/pdfkit) for generating print PDF's, and
relying on [Transifex](https://transifex.com) and
[i18next-parser](https://github.com/i18next/i18next-parser) for handling
translations.

## Installing dependencies

Navigate into your site’s directory and start it up with `yarn install` or `npm install`.


## Building for local development

The site uses Gatsby to generate all the web assets from the content files. Translations are handled through Transifex, and the project's build system is designed to sync with Transifex on every build.

The site is built using GitHub actions, which take care of all the interfacing with Transifex. If you want to build the site locally, you will need to set up Transifex credentials before building. Once you have a registered account, you'll need to generate an API token to get going:

1. Head to the [**User Settings**](https://www.transifex.com/user/settings/api/) by going to the main navigation, and clicking on your profile image in the top right corner
2. In the left menu, click on **API token**
3. Click **Generate a token**

Once you have your token, you will need to install the Transifex CLI command. On Debian/Ubuntu systems, this is available with `sudo apt install transifex-client`. On other platforms (including OSX), the command `sudo pip install transifex-client` should take care of it. See the [Transifex CLI repo](https://github.com/transifex/transifex-client/) for more details.

As the final setup step, run `tx init` and paste your API token when asked. Now, we are ready to build the project using the following commands:

```
yarn extract
yarn transifex-push
yarn transifex-pull
yarn build
```

If you're using npm instead of yarn, just replace the yarn command with `npm run`, e.g. `npm run transifex-push`. The `extract`, `transifex-push` and `transifex-pull` commands only need to be run once – they take care of detecting new translatable strings and uploading them to Transifex, as well as downloading updated translations.

If everything runs without error, you can go on working on the site using `yarn develop` or `npm run develop` to run a local webserver accessible through `http://localhost:8000`.





## Working with translations

The project is set up for easy translation of strings. Contributing to new and
existing translations can be done at Transifex.

Adding new languages on Transifex will create a new resource list with English
language strings, which can then be translated on the Transifex site.

The translation status set in Transifex (Reviewed, Proofread) has no effect on
what gets included in the site. New translations can be integrated by activating
each language on the Safetag site config, as the next section explains.


### Activating and deactivating languages

Languages can be added and worked on directly on Transifex. In order to make
them visible in the Safetag website, the code for the new language needs to be
added to two files:

In `gatsby-config.js`, look for the following section and alter the `languages`
array accordingly:

```
options: {
  localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
  languages: [`en`, `fr`],
  redirect: false,
  (...)
```

And in `i18next-parser.config.js`, you'll find this line near the beginning of
the file:

```
locales: ['en', 'fr'],
```

which should be edited in the same way.

You might notice that every build will synchronise the local translation files,
including languages that are not yet active, but this won't affect the languages
displayed to the user on the site until they are activated by editing the two
files above.

### Marking text for translation

Once new content, pages or templates are added, it's important to mark strings
as translatable so that they show up in the Transifex interface.

After marking new strings, running `yarn extract` and `yarn transifex-push`
will make them available on Transifex, where they can be edited. To update
the local copy with the latest version of the translations, run `yarn
transifex-pull`.

#### Strings in code

In order to mark a string as translatable in the project code (say, in a JS
variable), you'll only need to wrap it inside a `t()` object, so that

```
let variable = "value"
```

becomes

```
let variable = t("variable-value-string", "value")
```

The first parameter to `t` is the **key** of the string to use as an index for
Transifex, and the only concern here is that it's a unique string. The second
parameter is the English language string to be translated.


#### Strings in HTML/JSX templates

There are templates inside the .js files for pages like the index or the guide
builder. These templates look and behave like HTML, and have a specific
procedure for marking translatable strings using the Trans tag. Using this
example:

```
<ul>
  <li>Home</li>
  <li>Blog</li>
  <li>Contact</li>
</ul>
```

We'd mark it like this:

```
<ul>
  <li><Trans i18nKey="nav-home">Home</Trans></li>
  <li><Trans i18nKey="nav-blog">Blog</Trans></li>
  <li><Trans i18nKey="nav-contact">Contact</Trans></li>
</ul>
```

When marking up text using the Trans tag, keep in mind the following details:
- Links can be included inside Trans tags, but including any other element
  should be actively avoided. Notice how Trans is inside the `<li>` elements and
  not outside.
- The `i18nKey` attribute sets the translation key (see the `t()` explanation
  above)

#### Markdown files
The Markdown files inside the `content/` directory need no further work, as
they're automatically pushed to Transifex on build.
