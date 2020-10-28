import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import theme from "../../styles/theme/theme"
import GlobalStyles from "../../styles/global"

import GlobalHeader from "../page-header"
import GlobalFooter from "../page-footer"

const SiteContent = styled.main`
  flex: 1 0 auto;
  overflow: hidden;
`

const GlobalLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme.main}>
      <GlobalStyles />
      <GlobalHeader siteTitle={data.site.siteMetadata.title} />
      <SiteContent>{children}</SiteContent>
      <GlobalFooter />
    </ThemeProvider>
  )
}

GlobalLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalLayout
