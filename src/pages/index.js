import React from "react"
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"

import GlobalLayout from "../components/layouts/global-layout"
import SEO from "../components/seo"
import { themeVal } from "../styles/utils/general"
import { glsp } from "../styles/utils/theme-values"
import media from "../styles/utils/media-queries"

import Button from "../styles/button/button"
import {
  Inpage,
  InpageHeader,
  InpageHeaderInner,
  InpageHeadline,
  InpageBody,
  InpageBodyInner,
} from "../styles/inpage"
import Heading, { Subheading } from "../styles/type/heading"
import MoreLink from "../styles/button/more-link"
import Card, { CardHeader, CardHeading, CardList } from "../styles/card"

import LogoSymbolWhite from "../../static/assets/logo/SafetagSymbolWhite.svg"

const HomepageHeader = styled(InpageHeader)`
  background-color: ${themeVal("color.primary")};
  color: ${themeVal("color.surface")};
  position: relative;
  ${MoreLink} {
    color: ${themeVal("color.surface")};
    padding-bottom: ${glsp()};
    border-bottom: 1px solid ${themeVal("color.surface")};
  }
  ${media.mediumUp`
    padding-bottom: ${glsp(6)};
    &:after {
      content: url(${LogoSymbolWhite});
      position: absolute;
      bottom: 20%;
      right: 10%;
      opacity: 0.125;
      transform: scale(1.75);
    }
  `}
`

const HomepageHeaderInner = styled(InpageHeaderInner)`
  text-align: justify;
  ${media.mediumUp`
    padding: 6rem 1rem;
    padding-right: 40vw;
  `}
  ${media.largeUp`
    padding-right: 40rem;
  `}
`

const HomepageTitle = styled(Heading)`
  border-top: 2px solid ${themeVal("color.surface")};
  padding-top: ${glsp()};
`

const HomeCardList = styled(CardList)`
  margin: ${glsp(4)} 0;
`

const ContactButton = styled(Button)`
  font-size: 1.5rem;
  padding: 1rem;
  margin-top: 1rem;
`

function IndexPage({ data }) {
  useTranslation('Site strings', { useSuspense: false });
  return (
    <GlobalLayout>
      <SEO title="Safetag" />
      <Inpage>
        <HomepageHeader>
          <HomepageHeaderInner>
            <InpageHeadline>
              <HomepageTitle size="jumbo" variation="white">
                SAFETAG
              </HomepageTitle>
              <Subheading><Trans i18nKey="index-subtitle">Security Auditing Framework and Evaluation Template for Advocacy Groups</Trans></Subheading>
            </InpageHeadline>
            <p><Trans i18nKey="index-intro">
              SAFETAG is a professional audit framework that adapts
              traditional penetration testing and risk assessment methodologies
              to be relevant to smaller non-profit organizations based or
              operating in the developing world.
            </Trans></p>
          </HomepageHeaderInner>
        </HomepageHeader>
        <InpageBody>
          <InpageBodyInner>
            <Heading id="about" size="jumbo" variation="primary" withDeco>
              <Trans i18nKey="index-about-title">About SAFETAG</Trans>
            </Heading>
            <p><Trans i18nKey="index-about-1">
              SAFETAG audits serve small scale civil society organizations and independent
              media houses who have digital security concerns by working with them to identify
              the risks they face and providing capacity-aware, pragmatic next steps to
              address them.
            </Trans></p>
            <p><Trans i18nKey="index-about-2">
              Traditional security audits are based upon the assumption that an organization
              has the time, money, and capacity to aim for perfect security. Low-income
              at-risk groups have none of these luxuries. SAFETAG combines assessment
              activities from the the security auditing world with best-practices for working
              with small scale at-risk organizations.
            </Trans></p>
            <p><Trans i18nKey="index-about-3">
              SAFETAG auditors lead a risk modeling process that helps staff and leadership
              take an institutional look at their digital security problems, expose
              vulnerabilities that impact their critical processes and assets, and provide
              clear reporting and follow up to help the organization strategically move
              forward and identify the support that they need.
            </Trans></p>
          </InpageBodyInner>
        </InpageBody>

        <InpageBody variation="blue">
          <InpageBodyInner>
            <Heading id="recent-updates" size="jumbo" variation="primary" withDeco>
              <Trans i18nKey="index-updates-title">Recent Updates</Trans>
            </Heading>
            <ul>
              {data.posts.edges.map(
                ({ node }, index) => (
                    <li key={index}>
                      <Link to={node.fields.slug}>{node.frontmatter.title}</Link> &mdash; {node.frontmatter.date}
                    </li>
                  )
              )}
            </ul>
          </InpageBodyInner>
        </InpageBody>

        <InpageBody>
          <InpageBodyInner>

            <Heading id="allMethods" size="jumbo" variation="primary" withDeco>
              <Trans i18nKey="index-methods-title">The SAFETAG Methods</Trans>
            </Heading>
            <Subheading>
              <Trans i18nKey="index-methods-subtitle">Explore all Safetag Methods</Trans>
            </Subheading>
            <HomeCardList>
              {data.methods.edges.map(
                ({ node }, index) => (
                    <li key={index}>
                      <Card
                        border="primary"
                        as={Link}
                        to={node.fields.slug}
                        withHover
                      >
                        <CardHeader>
                        	<img src={node.frontmatter.method_icon} />
                        	<CardHeading variation="primary" withDeco>
                        	  {node.frontmatter.title}
                        	</CardHeading>
                        </CardHeader>
                        <p>
                          {
                            node.frontmatter.summary.split(' ').slice(0,25).join(' ') + "..."
                          }
                        </p>
                      </Card>
                    </li>
                  )
              )}
            </HomeCardList>

          </InpageBodyInner>
        </InpageBody>

        <InpageBody variation="blue">
          <InpageBodyInner>
            <Heading id="license" size="jumbo" variation="primary" withDeco>
              <Trans i18nKey="index-license-title">License</Trans>
            </Heading>
            <p><Trans i18nKey="index-license-1">
              SAFETAG resources are available under a <a
              href="https://creativecommons.org/licenses/by-sa/3.0/">Creative
              Commons Attribution-ShareAlike (CC BY-SA 3.0) License</a>.
            </Trans></p>
            <p><Trans i18nKey="index-license-2">
              Check out the <Link to="/credits/">Credits and Licensing
              </Link> page for content attribution and a usage guide to
              referring to the &quot;SAFETAG&quot; wordmark.
            </Trans></p>
          </InpageBodyInner>
        </InpageBody>

        <InpageBody>
          <InpageBodyInner>
            <Heading id="contact" size="jumbo" variation="primary" withDeco>
              <Trans i18nKey="index-contact-title">Get in touch</Trans>
            </Heading>
            <ContactButton
                variation="primary-raised-light"
                to="#"
                onClick={(e) => {
                  window.location = "mailto:info@SAFETAG.org";
                  e.preventDefault();
                }}
                as={Link}>
              info@SAFETAG.org
            </ContactButton>
            <p><Trans i18nKey="index-contact-1">
              We have a global network of auditors trained in the SAFETAG
              framework available for independent work with small NGOs.
            </Trans></p>
            <p><Trans i18nKey="index-contact-2">
              For updates or suggestions for the framework, <a
              href="https://github.com/SAFETAG/SAFETAG/issues">submit an
              issue</a>.
            </Trans></p>
          </InpageBodyInner>
        </InpageBody>

      </Inpage>
    </GlobalLayout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.array,
}

export default IndexPage

/*
      filter: {
        relativeDirectory: { eq: "methods" }
        internal: { mediaType: { eq: "text/markdown" } }
      }
*/

export const query = graphql`
  query($language: String!) {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date],  order: DESC },
      limit: 5,
      filter: {fileAbsolutePath: {regex: "/posts/"}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }

    methods: allMarkdownRemark(
      sort: { fields: [frontmatter___position],  },
      filter: {fileAbsolutePath: {regex: "/methods/"}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            position
            method_icon
            summary
          }
        }
      }
    }

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
`
