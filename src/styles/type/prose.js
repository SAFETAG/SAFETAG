import styled, { css } from "styled-components"

import { themeVal } from "../utils/general"
import { multiply } from "../utils/math"
import { glsp } from "../utils/theme-values"

// Extract fn to avoid complaints by the linter.
const numColumnsFn = ({ numColumns }) =>
  numColumns &&
  css`
    column-count: ${numColumns};
    column-gap: ${glsp(2)};
  `

const Prose = styled.div`
  font-size: ${({ size }) =>
    size === "small" ? "0.875rem" : themeVal("type.base.size")}; /* 16px */
  line-height: ${({ size }) =>
    size === "small" ? "1.25rem" : themeVal("type.base.line")}; /* 16px */

  ${numColumnsFn}

  ul, ol, dl {
    padding: 0;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  ul,
  ol {
    list-style-position: outside;
    margin-left: ${themeVal("layout.space")};
  }

  ol ol,
  ol ul,
  ul ol,
  ul ul {
    margin-bottom: 0;
  }

  > * {
    margin-bottom: ${({ size }) =>
      size === "small"
        ? "1rem"
        : multiply(themeVal("type.base.size"), themeVal("type.base.line"))};
  }

  > *:last-child {
    margin-bottom: 0;
  }
`

export default Prose
