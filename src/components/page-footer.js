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
  justify-content: space-between;
  align-items: center;
`

const PageCredits = styled.p`
  color: ${themeVal("color.surface")};
`

const PageSocial = styled.p`
  color: ${themeVal("color.surface")};
`
const PageNetlify = styled.p`
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

        <PageSocial>
        <a href="/contact">Contact us</a>
         </PageSocial>

        <PageNetlify>
          <a href="https://www.netlify.com">
              <img align="right" src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
            </a>
          
<!-- Matomo -->
<script type="text/javascript">
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://stats.openinternetproject.org/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Matomo Code -->

        </PageNetlify>
      </PageFootInner>
    </PageFoot>
  )
}

GlobalFooter.propTypes = {}

export default GlobalFooter
