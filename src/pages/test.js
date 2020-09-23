import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"


import Layout from "../components/layout"
import SEO from "../components/seo"

const Test = () => {
  // const intl = useIntl()
  return (
  <Layout >
    <SEO title="404: Not found" />
    <h1 className="container"><FormattedMessage id="notfound.header" /></h1>
    <p className="container">Test page</p>
  </Layout>
  )
}

export default Test
