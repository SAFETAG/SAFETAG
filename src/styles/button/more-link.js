import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { themeVal } from "../utils/general"

const pseudoMapping = {
  forward: "after",
  back: "before",
}

const paddingMapping = {
  forward: "left",
  back: "right",
}

const arrowDirection = {
  forward: "\\27F6",
  back: "\\27F5",
}

const MoreLink = styled(Link)`
  color: inherit;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-feature-settings: "pnum" 0; /* Use proportional numbers */
  font-family: ${themeVal("type.heading.family")};
  font-weight: ${themeVal("type.heading.light")};
  text-transform: uppercase;
  letter-spacing: 0.025rem;

  /* Arrow before or after attribute */
  ${({ direction }) => 
    direction && css`
    &:${pseudoMapping[direction]} {
      padding-${paddingMapping[direction]}: 0.5rem;
      content: '${arrowDirection[direction]}';
      transition: all 0.16s cubic-bezier(.55,.085,.68,.53);
    }
    &:hover {
      &:${pseudoMapping[direction]} {
        padding-${paddingMapping[direction]}: 1rem;
      }
    }
    &:hover,
    &:active {
      &:${pseudoMapping[direction]} {
        transform: none;
      }
    }
  `}

  /* Remove global link :after styles */
  &:after {
    opacity: 1;
    transform: none;
    left: inherit;
    bottom: inherit;
    height: inherit;
    background: inherit;
  }
`

MoreLink.defaultProps = {
  direction: "forward",
}

export default MoreLink
