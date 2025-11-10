import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"   // ← ESTA LÍNEA ES LA QUE FALTABA

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const title = post.frontmatter.title

  return (
    <Layout>
      <Seo title={title} description={post.excerpt} />
      <div style={{ margin: "4rem 0" }}>
        <h1 style={{ fontSize: "3.5rem", textAlign: "center", marginBottom: "1rem" }}>
          {title}
        </h1>
        <div
          style={{
            fontSize: "1.3rem",
            lineHeight: "2.2",
            textAlign: "justify",
            marginTop: "3rem",
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
      }
    }
  }
`
`

