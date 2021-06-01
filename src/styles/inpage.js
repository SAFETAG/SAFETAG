import React from "react"
import styled, { css } from "styled-components"

import { visuallyHidden } from "./helpers"
import { themeVal } from "./utils/general"
import { glsp } from "./utils/theme-values"
import Heading, { headingAlt } from "./type/heading"
import Constrainer from "./constrainer"
import Card from "./card"
import media from "./utils/media-queries"

const getColumnLayout = ({ columnLayout }) => {
  if (columnLayout === "1:1") return "1fr 1fr"
  if (columnLayout === "2:1") return "2fr 1fr"
  if (columnLayout === "3:1") return "3fr 1fr"
  return "inherit"
}

export const Inpage = styled.article`
  display: grid;
  height: 100%;
  grid-template-rows: auto 1fr;
`

export const InpageInnerColumns = styled(Constrainer)`
  display: grid;
  grid-template-columns: 1fr;
  padding-top: ${glsp(1)};
  padding-bottom: ${glsp(2)};
  ${media.mediumUp`
    grid-template-columns: ${getColumnLayout};
    gap: ${glsp(4)};
    padding-top: ${glsp(2)};
  `}
  & > section > ${Card} {
    margin-top: 1rem;
    display: block;
  }
  & > * {
    margin-bottom: 2rem;
    ${media.mediumUp`
      margin-bottom: 0;
    `}
  }
`

export const InpageHeader = styled.header`
  /* Visually hidden */
  ${({ isHidden }) =>
    isHidden &&
    css`
      ${visuallyHidden()}
    `}
  padding-bottom: ${glsp(2)};
`

export const InpageHeaderInner = styled(Constrainer)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: ${glsp(4)} ${glsp()};
`

export const InpageHeadline = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 0;
  > *:first-child {
    margin-bottom: ${glsp()};
  }
  > *:last-child {
    margin-bottom: ${glsp()};
  }
`

export const InpageToolbar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-left: ${glsp(2)};
  margin-left: auto;
`

export const InpageTitleWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  min-width: 0;
  margin-bottom: ${glsp(1.5)};
`

export const InpageTitle = styled(({ ...props }) => <Heading {...props} />)`
  margin-bottom: ${glsp(0.5)};
  line-height: 3rem;
`

export const InpageTagline = styled.p`
  ${headingAlt()}
  font-size: 0.875rem;
  line-height: 1rem;
`

const getBodyStyles = ({ variation }) => {
  if (variation === "dark")
    return css`
      background-color: ${themeVal("color.base")};
      & * {
        color: ${themeVal("color.surface")};
        border-color: ${themeVal("color.surface")};
        &:after {
          background-color: ${themeVal("color.surface")};
        }
        a {
          color: ${themeVal("color.surface")};
          text-decoration: underline;
        }
      }
    `
  else if (variation === "blue")
    return css`
      background-color: ${themeVal("color.primary")};
      & * {
        color: ${themeVal("color.surface")};
        border-color: ${themeVal("color.surface")};
        &:after {
          background-color: ${themeVal("color.surface")};
        }
        a {
          color: ${themeVal("color.surface")};
          text-decoration: underline;
        }
        a:visited {
          color: ${themeVal("color.surface")};
        }
      }
    `
  return css`
    background-color: transparent;
  `
}

export const InpageBody = styled.section`
  ${getBodyStyles};
  & ~ & {
    padding-top: ${glsp(2)};
    padding-bottom: ${glsp(2)};
  }
  p > img {
    display: block;
    margin: 1rem auto;
    max-width: 100%;
  }
`

export const InpageBodyInner = styled(Constrainer)`
  padding: ${glsp(2)} ${glsp()};

  & ~ & {
    padding: ${glsp()};
  }
`
