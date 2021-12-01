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

const ContactPage = () => {
  useTranslation('site', { useSuspense: false });
  return (
  <GlobalLayout>
    <SEO title="Contact" />
      <Inpage>
        <InpageBody>
          <InpageBodyInner>
            <Heading size='jumbo' variation="primary" withDeco>
              <Trans i18nKey="contact-title">Contact Us</Trans>
            </Heading>
          </InpageBodyInner>
          <InpageInnerColumns columnLayout="2:1">
            <article>

            <p><Trans i18nKey="contact-network">We have a global network of hundreds auditors trained in the
            SAFETAG framework available for independent work with small
            NGOs.</Trans></p>

            <p><Trans i18nKey="contact-learnmore">Want to learn more? Find -- or become -- an auditor? Join the
            SAFETAG community discussion?</Trans></p>

            <p><strong><Trans i18nKey="contact-emailus">Email us at <a
            href="mailto:info@SAFETAG.org">info@SAFETAG.org</a></Trans></strong></p>

            <h2><Trans i18nKey="contact-getinvolvedtitle">Get involved!</Trans></h2>
            <p><Trans i18nKey="contact-getinvolved">For updates or suggestions for the framework: <br /> <a
            href="https://github.com/SAFETAG/SAFETAG/issues">submit an issue</a>
            or learn how to contribute directly!</Trans></p>

            </article>
          </InpageInnerColumns>
        </InpageBody>
      </Inpage>
  </GlobalLayout>
)
}

export default ContactPage

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
