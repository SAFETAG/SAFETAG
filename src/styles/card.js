import styled, { css } from "styled-components"
import { themeVal } from "./utils/general"
import media from "./utils/media-queries"
import { glsp, _lighten } from "./utils/theme-values"
import { listReset } from "./helpers/index"
import Heading from "./type/heading"

const getCardBackground = ({ variation }) => {
  if (variation === "base") return _lighten(0.75, themeVal("color.base"))
  if (variation === "primary") return _lighten(0.5, themeVal("color.primary"))
  if (variation === "secondary")
    return _lighten(0.525, themeVal("color.secondary"))
  if (variation === "white") return _lighten(themeVal(0.5, "color.surface"))
  if (variation === "outline") return "transparent"
  return "white"
}

const getCardBorder = ({ border }) => {
  if (border === "base") return themeVal("color.base")
  if (border === "primary") return themeVal("color.primary")
  if (border === "secondary") return themeVal("color.secondary")
  if (border === "white") return themeVal("color.surface")
  return "inherit"
}

const Card = styled.article`
  padding: ${glsp(2)} ${glsp(1.5)};
  display: flex;
  flex-flow: column;
  color: ${themeVal("color.base")};
  background: ${getCardBackground};
  position: relative;
  ${({ border }) =>
    border &&
    css`
      border: 2px solid ${getCardBorder};
    `}
  & > :last-child:not(:first-child) {
    padding-top: ${glsp(2)};
  }
  &:visited {
    color: ${themeVal("color.base")};
  }
  a,
  a:visited {
    color: ${themeVal("color.link")};
  }

  h1, h2, h3 {
    margin: 0;
  }
  /* offset box outline on hover style requires 'withHover' prop */
  ${({ withHover }) =>
    withHover &&
    css`
      &:after {
        position: absolute;
        content: "";
        opacity: 0;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
        border: 2px solid ${getCardBorder};
        background: none;
        transition: all 0.16s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      }
      &:hover {
        &:after {
          opacity: 1;
          transform: translate(10px, 10px);
          transition-delay: 0.08s;
        }
      }
    `}
`

export default Card

export const CardHeading = styled(Heading)`
  margin-bottom: ${glsp()};
  position: relative;
  letter-spacing: 0.5px;
`

export const CardFooter = styled.div`
  margin-top: auto;
`

export const CardList = styled.ul`
  ${listReset()};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${glsp(2)};
  ${Card} {
    height: 100%;
  }
  li {
    grid-column: auto / span 6;

    /* Small up */
    ${media.smallUp`
      grid-column: auto / span 3;
    `}

    /* Large up */
    ${media.largeUp`
      grid-column: auto / span 2;
    `}
  }
`
