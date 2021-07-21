import React from "react"
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import { graphql } from "gatsby"
import GlobalLayout from "../components/layouts/global-layout"
import SEO from "../components/seo"

import {
  Inpage,
  InpageBody,
  InpageBodyInner,
  InpageInnerColumns
} from "../styles/inpage"

import Heading from "../styles/type/heading"

const CreditsPage = () => {
  useTranslation('Site strings', { useSuspense: false });
  return (
  <GlobalLayout>
    <SEO title="Credits and License" />
      <Inpage>
        <InpageBody>
          <InpageBodyInner>
            <Heading size='jumbo' variation="primary" withDeco>
              <Trans i18nKey="credits-title">Credits and License</Trans>
            </Heading>
          </InpageBodyInner>
          <InpageInnerColumns columnLayout="2:1">
            <article>
            <p><Trans i18nKey="credits-trademark">SAFETAG is a trademark of Internews. Please read the <a
            href="https://github.com/SAFETAG/SAFETAG/blob/master/LICENSE.md#usage-of-safetag">SAFETAG
            License</a> for detailed information on the usage of &quot;SAFETAG&quot; as a
            word.</Trans></p>

            <p><Trans i18nKey="credits-license">The content of SAFETAG is Licensed as <a
            href="http://creativecommons.org/licenses/by-sa/3.0/"
            target="_blank" rel="noreferrer">Creative Commons
            Attribution-ShareAlike (CC BY-SA 3.0)</a>.  Please refer to <a
            href="https://github.com/SAFETAG/SAFETAG/graphs/contributors">SAFETAG
            Contributors</a> for information on who has contributed content to
            SAFETAG.</Trans></p>

            <p><Trans i18nKey="credits-other">All other content is copyright Internews unless otherwise
            designated.</Trans></p>

            </article>
          </InpageInnerColumns>
        </InpageBody>
      </Inpage>
  </GlobalLayout>
)

}

export default CreditsPage

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
