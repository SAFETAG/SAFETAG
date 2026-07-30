// The languages built into the site.
//
// Single source of truth. Consumed by:
//   * gatsby-config.js  - gatsby-plugin-react-i18next builds a page tree per
//                         language listed here
//   * .github/workflows/deploy-*.yml - a deploy is skipped when a push only
//                         touches translations for languages not listed here
//
// Weblate holds translations for more languages than these. They live in
// locales/ so the work is preserved and reviewable, but nothing is built or
// deployed for a language until it is added here.
//
// To activate a language: add its code below. The directory name must match
// the one Weblate writes in locales/ exactly (e.g. `pt_BR`, not `pt-BR`).
module.exports = ["en", "pt_BR", "my", "fr"]
