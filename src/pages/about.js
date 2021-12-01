import React from "react"
import { graphql } from "gatsby"
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import GlobalLayout from "../components/layouts/global-layout"
import SEO from "../components/seo"

import {
  Inpage,
  InpageBody,
  InpageBodyInner,
  InpageInnerColumns
} from "../styles/inpage"

import Heading from "../styles/type/heading"

const AboutPage = () =>{
  useTranslation('site', { useSuspense: false });
  return (
  <GlobalLayout>
    <SEO title="About" />
      <Inpage>
        <InpageBody>
          <InpageBodyInner>
            <Heading size='jumbo' variation="primary" withDeco>
              <Trans i18nKey="about-title">About Safetag</Trans>
            </Heading>
          </InpageBodyInner>
          <InpageInnerColumns columnLayout="2:1">
            <article>
              <p><Trans i18nKey="about-text1">SAFETAG audits serve small scale civil society organizations and independent media houses who have digital security concerns by working with them to identify the risks they face and providing capacity-aware, pragmatic next steps to address them.</Trans></p>

              <p><Trans i18nKey="about-text2">Traditional security audits are based upon the assumption that an organization has the time, money, and capacity to aim for perfect security. Low-income at-risk groups have none of these luxuries. SAFETAG combines assessment activities from the the security auditing world with best-practices for working with small scale at-risk organizations.</Trans></p>

              <p><Trans i18nKey="about-text3">SAFETAG auditors lead a risk modeling process that helps staff and leadership take an institutional look at their digital security problems, expose vulnerabilities that impact their critical processes and assets, and provide clear reporting and follow up to help the organization strategically move forward and identify the support that they need.</Trans>
              </p>
            </article>
          </InpageInnerColumns>
        </InpageBody>
      </Inpage>
  </GlobalLayout>
  )
}

export default AboutPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
