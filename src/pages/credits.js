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
              Credits and License
            </Heading>
          </InpageBodyInner>
          <InpageInnerColumns columnLayout="2:1">
            <article>

            <p>SAFETAG is a trademark of Internews. Please read the <a
            href="https://github.com/SAFETAG/SAFETAG/blob/master/LICENSE.md#usage-of-safetag">SAFETAG
            License</a> for detailed information on the usage of &quot;SAFETAG&quot; as a
            word.</p>

            <p>The content of SAFETAG is Licensed as <a
            href="http://creativecommons.org/licenses/by-sa/3.0/"
            target="_blank" rel="noreferrer">Creative Commons
            Attribution-ShareAlike (CC BY-SA 3.0)</a>.  Please refer to <a
            href="https://github.com/SAFETAG/SAFETAG/graphs/contributors">SAFETAG
            Contributors</a> for information on who has contributed content to
            SAFETAG.</p>

            <p>All other content is copyright Internews unless otherwise
            designated.</p>

            </article>
          </InpageInnerColumns>
        </InpageBody>
      </Inpage>
  </GlobalLayout>
)

export default AboutPage
