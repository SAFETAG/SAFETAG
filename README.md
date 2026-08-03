<h1 align="center">
 Safetag
</h1>

This project creates a web-based version of the full SAFETAG (Security Auditing Framework and Evaluation Template for Advocacy Groups) guide produced by Internews: https://safetag.org

The site is developed via Gatsby, default instructions for which appear below.

# Local Development

## 🔨 Dependencies

- Node 20.x
- NPM

## Project structure

The Safetag site is running on [Gatsby](https://www.gatsbyjs.com), employing
[PDFkit](https://github.com/foliojs/pdfkit) for generating print PDF's, and
relying on [Weblate](https://weblate.org) and
[i18next-parser](https://github.com/i18next/i18next-parser) for handling
translations.

## Installing dependencies

Navigate into your site’s directory and start it up with `npm ci`.


## Building for local development

The site uses Gatsby to generate all the web assets from the content files.
**Translations are committed to this repository** under `locales/`, where they
are maintained by Weblate. A build therefore needs no translation credentials
and makes no API calls — `npm ci && npm run build` is the whole story.

```
npm ci
npm run build
```

If everything runs without error, you can go on working on the site using
`npm run develop` to run a local webserver accessible through
`http://localhost:8000`.

The only translation-related command is `npm run extract`, which scans the
source for translatable strings and updates `locales/en/site.json` — the English
file Weblate translates from. You only need it after marking new strings for
translation (see below).





## Working with translations

The project is set up for easy translation of strings. Contributing to new and
existing translations is done in [Weblate](https://weblate.org).

Weblate reads the English source directly from this repository and commits
translations back to it under `locales/`. There is no export or import step: a
translation saved in Weblate becomes a commit here, which triggers a rebuild of
the site.

Adding a new language in Weblate creates the file for it, pre-filled with the
English source strings, which can then be translated.

Review state in Weblate has no effect on what gets included in the site. New
translations become visible once the language is activated in the Safetag site
config, as the next section explains.


### Activating and deactivating languages

Languages can be added and worked on directly in Weblate. In order to make
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
as translatable so that they show up in the Weblate interface.

After marking new strings, run `npm run extract` to update
`locales/en/site.json`. Once that lands on the branch Weblate watches, the
new strings appear for translation automatically.

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
Weblate, and the only concern here is that it's a unique string. The second
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
they're picked up by Weblate directly from the repository.
