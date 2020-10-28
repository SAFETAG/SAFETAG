import styled, { css } from "styled-components"
import { rgba } from "polished"
import { themeVal, stylizeFunction } from "../utils/general"

const _rgba = stylizeFunction(rgba)

const sizeMapping = {
  xsmall: "0.75rem",
  small: "0.875rem",
  medium: "1rem",
  large: "1.25rem",
  xlarge: "1.75rem",
  jumbo: "2rem + 1vw",
}

const lineHeightMapping = {
  xsmall: "1rem",
  small: "1.25rem",
  medium: "1.5rem",
  large: "1.75rem",
  xlarge: "2rem",
  jumbo: "2.25rem",
}

const getHeadingColor = ({ variation, theme }) => {
  if (variation === "base") return theme.type.base.color
  if (variation === "primary") return theme.color.primary
  if (variation === "secondary") return theme.color.secondary
  if (variation === "white") return theme.color.surface

  return "inherit"
}

const Heading = styled.h1`
  font-family: ${themeVal("type.heading.family")};
  font-weight: ${themeVal("type.heading.weight")};
  margin: 0;
  position: relative;
  /* Size and line-height attribute */
  ${({ size }) => `
    font-size: clamp(1rem, ${sizeMapping[size]}, 3rem);
    line-height: ${lineHeightMapping[size]};
  `}

  /* Colors */
  color:
    ${getHeadingColor};

  /* Decorative overline */
  ${({ withDeco }) =>
    withDeco &&
    css`
      padding: 0.5rem 0 0.75rem;
      border-top: 2px solid  ${getHeadingColor};
      border-bottom: 1px solid  ${getHeadingColor};
    `}
`

Heading.defaultProps = {
  size: "medium",
  variation: "base"
}

export default Heading

const getSubheadingColor = ({ variation }) => {
  if (variation === "base") return _rgba(themeVal("color.base"), 0.64)
  if (variation === "primary") return _rgba(themeVal("color.primary"), 0.64)
  if (variation === "secondary") return _rgba(themeVal("color.secondary"), 0.64)
  if (variation === "white") return _rgba(themeVal("color.surface"), 0.64)

  return "inherit"
}

export const Subheading = styled.h2`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-feature-settings: "pnum" 0; /* Use proportional numbers */
  font-family: ${themeVal("type.heading.family")};
  font-weight: ${themeVal("type.heading.light")};
  text-transform: uppercase;
  letter-spacing: 0.125rem;

  color: ${getSubheadingColor};
`

export const headingAlt = () => css`
  color: inherit;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-feature-settings: "pnum" 0; /* Use proportional numbers */
  font-family: ${themeVal("type.base.family")};
  font-weight: ${themeVal("type.heading.regular")};
  text-transform: uppercase;
`

export const headingDeco = () => css`
  color: inherit;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-feature-settings: "pnum" 0; /* Use proportional numbers */
  font-family: ${themeVal("type.heading.family")};
  font-weight: ${themeVal("type.heading.regular")};
  text-transform: uppercase;
`

export const Label = styled.span`
  ${headingDeco()};
  display: inline-block;
  padding: 0.25rem 1rem;
  background-color: ${_rgba(themeVal("color.base"), 0.16)};
  & ~ & {
    margin-left: 1rem;
  }
`
