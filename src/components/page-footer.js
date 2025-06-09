import React from "react"
import styled from "styled-components"
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';

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
  justify-content: space-between;
  align-items: center;
`

const PageCredits = styled.p`
  color: ${themeVal("color.surface")};
`

const PageSocial = styled.p`
  color: ${themeVal("color.surface")};
`

const ContactLink = styled.a`
  color: #eeeeee;
`

const Year = new Date().getFullYear()

const GlobalFooter = () => {
  useTranslation('site', { useSuspense: false });
  return (
    <PageFoot role="contentinfo">
      <PageFootInner>
        <PageCredits>
          <Trans i18nKey="footer-1">© {{Year}} SAFETAG™: A Project of Internews</Trans>
        </PageCredits>

        <ContactLink>
          <a href="/contact"><Trans i18nKey="footer-2">Contact us</Trans></a>
        </ContactLink>

      </PageFootInner>
    </PageFoot>
  )
}

GlobalFooter.propTypes = {}

export default GlobalFooter
