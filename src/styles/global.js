import { createGlobalStyle, css } from "styled-components"
import { rgba, normalize } from "polished"
import { themeVal, stylizeFunction } from "./utils/general"
import "@reach/listbox/styles.css"

// Global styles for these components are included here for performance reasons.
// This way they're only rendered when absolutely needed.

const _rgba = stylizeFunction(rgba)

const baseStyles = css`
  html {
    box-sizing: border-box;
    font-size: ${themeVal("type.base.root")};
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    scroll-behavior: smooth;
    height: 100%;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: ${themeVal("color.background")};
    color: ${themeVal("type.base.color")};
    font-size: ${themeVal("type.base.size")};
    line-height: ${themeVal("type.base.line")};
    /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
    font-family: ${themeVal("type.base.family")};
    font-weight: ${themeVal("type.base.weight")};
    font-style: ${themeVal("type.base.style")};
    letter-spacing: 0.1px;
  }
  pre {
    /* white-space: pre-wrap; */
  }
  ul {
    padding-inline-start: 1rem;
  }

  /* Links
   ========================================================================== */
  a {
    cursor: pointer;
    color: ${_rgba(themeVal("color.link"), 0.84)};
    text-decoration: none;
    position: relative;
    :after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      transform: translateY(0%);
      height: 2px;
      content: "";
      background: ${themeVal("color.link")};
      opacity: 0;
      transition: all 0.16s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    }
  }
  a:visited {
    color: ${themeVal("color.link")};
  }
  a:hover {
    color: ${themeVal("color.link")};
    :after {
      opacity: 1;
      transform: translateY(150%);
    }
  }
  a:active {
    transform: translate(0, 1px);
  }
  a[class^="card"] {
    cursor: pointer;
    &:hover,
    &:active {
      opacity: 1;
      transform: none;
    }
  }
  /* Buttons
   ========================================================================== */
  [role="button"] {
    cursor: pointer;
  }
  /* Forms
     ========================================================================== */
  input,
  select,
  textarea {
    font: inherit;
    height: auto;
    width: auto;
    margin: 0;
  }
  /* Tables
   ========================================================================== */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* Blockquotes
   ========================================================================== */
  blockquote,
  q {
    quotes: none;
  }
  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: "";
    content: none;
  }
  /* Text-level semantics
   ========================================================================== */
  b,
  strong {
    font-weight: ${themeVal("type.base.bold")};
  }
  /* Misc
     ========================================================================== */
  ::selection {
    background-color: ${_rgba(themeVal("color.secondary"), 0.64)};
  }
  #root {
    min-height: 100vh;
  }
  .tether-element {
    z-index: 1000;
  }
  /* Styles for sticky footer */
  #gatsby-focus-wrapper {
    min-height: 100vh;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
  }
`

export default createGlobalStyle`
  ${normalize()}
  ${baseStyles}
`
