import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (homeData) => (
  <Layout>
    <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>{homeData.data.contentstackHome.body}</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2 </Link>
    </div>
  </Layout>
)

export const indexPageQuery = graphql`
  query indexQuery {
    contentstackHome {
      title
      url
      body
  }
}
`

export default IndexPage
