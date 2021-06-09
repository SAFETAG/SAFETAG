import React from "react"

import GlobalLayout from "../components/layouts/global-layout"
import SEO from "../components/seo"

import {
  Inpage,
  InpageBody,
  InpageBodyInner,
  InpageInnerColumns
} from "../styles/inpage"

import Heading from "../styles/type/heading"

const AboutPage = () => (
  <GlobalLayout>
    <SEO title="About" />
      <Inpage>
        <InpageBody>
          <InpageBodyInner>
            <Heading size='jumbo' variation="primary" withDeco>
              Contact Us
            </Heading>
          </InpageBodyInner>
          <InpageInnerColumns columnLayout="2:1">
            <article>

            <p>We have a global network of hundreds auditors trained in the
            SAFETAG framework available for independent work with small
            NGOs.</p>

            <p>Want to learn more? Find -- or become -- an auditor? Join the
            SAFETAG community discussion?</p>

            <p><strong>Email us at <a
            href="mailto:info@SAFETAG.org">info@SAFETAG.org</a></strong></p>

            <h2>Get involved!</h2>
            <p>For updates or suggestions for the framework: <br /> <a
            href="https://github.com/SAFETAG/SAFETAG/issues">submit an issue</a>
            or learn how to contribute directly!</p>

            </article>
          </InpageInnerColumns>
        </InpageBody>
      </Inpage>
  </GlobalLayout>
)

export default AboutPage
