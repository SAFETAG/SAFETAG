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

const CodeofconductPage = () => {
  useTranslation('site', { useSuspense: false });
  return (
  <GlobalLayout>
    <SEO title="Code of Conduct" />
      <Inpage>
        <InpageBody>
          <InpageBodyInner>
            <Heading size='jumbo' variation="primary" withDeco>
              <Trans i18nKey="coc-title">SAFETAG Community Code of Conduct</Trans>
            </Heading>
          </InpageBodyInner>
          <InpageInnerColumns columnLayout="2:1">
            <article>

            <h1><Trans i18nKey="coc-missiontitle">Mission Statement</Trans></h1>

            <p><Trans i18nKey="coc-mission">The mission of the SAFETAG community is to improve the security of civil society organizations around the world.</Trans></p>

            <p><Trans i18nKey="coc-whatwedo">What we do: The community collaborates actively to share knowledge, build capacity, and create resources, while promoting transparency and accountability amongst its members, as well as with other communities of practice.</Trans></p>

            <h1><Trans i18nKey="coc-communitystdtitle">Community Standards</Trans></h1>

            <p><Trans i18nKey="coc-scop">The SAFETAG Community of Practice (SCoP) exists in both public and private groups, currently including a public Slack channel, the Internet Freedom Festival Mattermost, and the orgsec.community listserv.</Trans></p>

            <ul>
                <li><Trans i18nKey="coc-scopparameters-1">Community members are encouraged to be active - positively contributing / leading discussions on community channels, creating, curating, or peer-reviewing content or contributing to the issue queue. </Trans></li>
                <li><Trans i18nKey="coc-scopparameters-2">Some SCoP members may have privacy concerns, and should join the community using a pseudonym they are comfortable with engaging online in both public and private spaces with.</Trans></li>
                <li><Trans i18nKey="coc-scopparameters-3">Joining the community: An invitation link for joining the SAFETAG Slack can be obtained by emailing on info at safetag dot org; for joining the Internet Freedom Mattermost can be found at https://internetfreedomfestival.org/wiki/index.php/IFF_Mattermost.</Trans></li>
                <li><Trans i18nKey="coc-scopparameters-4">The SCoP is responsible for adhering to the SAFETAG Code of Conduct, below</Trans></li>
            </ul>


            <h1><Trans i18nKey="coc-coctitle">SAFETAG Code of Conduct</Trans></h1>

            <p><Trans i18nKey="coc-expectationsopen">Members of the SAFETAG community are expected to:</Trans></p>

           <ul>
            <li><Trans i18nKey="coc-expectations-1">Respect the auditees, their contexts (including the legal framework they operate within), and protect their privacy and security</Trans></li>
            <li><Trans i18nKey="coc-expectations-2">Protect the identifying information and audit findings of your auditees, unless you have full, informed consent of the auditee -- and even then, exercise extreme care.</Trans></li>
            <li><Trans i18nKey="coc-expectations-3">Never use your knowledge, skills and/or access to do harm against organizations or communities you are working with or your peer auditors through malice or neglect.</Trans></li>
            <li><Trans i18nKey="coc-expectations-4">Minimize any conflict of interests through transparency in your contracting, reporting, and recommendations; e.g. if you were not hired initially to implement recommendations, suggest options other than yourself for implementation, and provide reporting that would enable that to be a success in every case.</Trans></li>
            <li><Trans i18nKey="coc-expectations-5">Perform your job responsibly and well. Ask and consult with fellow members of the community.</Trans></li>
            <li><Trans i18nKey="coc-expectations-6">Respect other members of the community as peers and promote a safe, inclusive, and harassment-free environment.</Trans></li>
           </ul>

          <h1><Trans i18nKey="coc-violationtitle">Code of Conduct Violations</Trans></h1>

          <p><Trans i18nKey="coc-violationconsequence">Serious or repeated violations of the Code of Conduct may lead to removal from one or all community platforms.</Trans></p>

          <p><Trans i18nKey="coc-violationreporting">To report a violation, please reach out privately to an administrative user of the relevant platform or email info at safetag.org</Trans></p>

          <h1><Trans i18nKey="coc-contacttitle">Contact</Trans></h1>

          <p><Trans i18nKey="coc-questionsissuesemail">For SAFETAG content related questions, please file an issue: https://github.com/SAFETAG/SAFETAG/issues.
You can email the SAFETAG Coordinators at info at safetag.org</Trans></p>



            </article>
          </InpageInnerColumns>
        </InpageBody>
      </Inpage>
  </GlobalLayout>
)

}

export default CodeofconductPage

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
