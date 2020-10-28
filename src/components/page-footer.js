import React from "react"
import styled from "styled-components"

import Constrainer from "../styles/constrainer"
import { themeVal } from "../styles/utils/general"

const PageFoot = styled.footer`
  background-color: ${themeVal("color.base")};
  font-size: 0.875rem;
  line-height: 1rem;
  padding: 2rem 0;
  /* Sticky footer styles */
  flex-grow: 0;
`

const PageFootInner = styled(Constrainer)`
  display: flex;
  flex-flow: row nowrap;
`

const PageCredits = styled.p`
  color: ${themeVal("color.surface")};
`

const Year = new Date().getFullYear()

const GlobalFooter = () => {
  return (
    <PageFoot role="contentinfo">
      <PageFootInner>
        <PageCredits>
          &copy; {Year} SAFETAG&trade;: A Project of Internews
        </PageCredits>
      </PageFootInner>
    </PageFoot>
  )
}

GlobalFooter.propTypes = {}

export default GlobalFooter
