import styled, { css } from "styled-components"

import { divide } from "../utils/math"
import { themeVal } from "../utils/general"
import { headingAlt } from "./heading"

const Dl = styled.dl`
  margin: 0;
  font-feature-settings: "pnum" 0; /* Use proportional numbers */
  ${({ horizontal }) =>
    horizontal &&
    css`
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 1rem;
    `}
  dt {
    ${headingAlt()}
    margin: 0 0 ${divide(themeVal("layout.space"), 4)} 0;
  }

  dd {
    margin: 0 0 ${themeVal("layout.space")} 0;
    ${({ boldDesc }) =>
      boldDesc &&
      css`
        font-weight: bold;
      `}
  }
  dd + dd {
    margin-top: -1rem;
  }
`

export default Dl

export const SquareUl = styled.ul`
  &,
  > ul,
  > ul > ul {
    padding-left: 1rem;
  }
  li {
    list-style: none;
    text-indent: -1.8rem;
    margin-left: ${themeVal("layout.space")};
    margin-bottom: 0.25rem;
    &:before {
      content: "\\25A0";
      font-size: 1.5rem;
      vertical-align: baseline;
      list-style-position: inherit;
      margin-right: ${themeVal("layout.space")};
    }
  }
  li>p {
    &:before {
      content: '';
    }
    &:first-child {
      display: inline;
      text-indent: -1.8rem;
    }
  }
  pre {
    text-indent: 0;
  }
  table {
    margin: 2rem 0;
    font-size: 0.875rem;
    text-align: left;
    thead tr {
      background-color: ${themeVal("color.primary")};
      color: ${themeVal("color.surface")};
    }

    tbody tr:nth-child(odd) {
      background-color: ${themeVal("color.mist")};
    }

    th, td {
      padding: 0.25rem 0.5rem;
      border-right: 2px solid white;
    }
  }
`

export const TagList = styled.dl``
