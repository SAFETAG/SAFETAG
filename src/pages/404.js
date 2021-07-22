import React from "react"
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import GlobalLayout from "../components/layouts/global-layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  useTranslation('site', { useSuspense: false });
  return (
  <GlobalLayout>
    <SEO title="404: Not found" />
    <h1><Trans i18nKey="404-title">NOT FOUND</Trans></h1>
    <p><Trans i18nKey="404-message">You just hit a route that doesn&#39;t exist... the sadness.</Trans></p>
  </GlobalLayout>
)
}

export default NotFoundPage
