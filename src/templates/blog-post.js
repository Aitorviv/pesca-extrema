import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"   // ← IMPORT CORRECTO

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const title = post.frontmatter.title

  return (
    <Layout>
      <Seo title={title} description={post.excerpt} />

      <article style={{ margin: "4rem 0" }}>
        <h1 style={{ 
          fontSize: "3.8rem", 
          textAlign: "center", 
          marginBottom: "2rem",
          textShadow: "0 0 30px black"
        }}>
          {title}
        </h1>

        <div
          style={{
            fontSize: "1.35rem",
            lineHeight: "2.3",
            textAlign: "justify",
            maxWidth: "800px",
            margin: "0 auto",
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Layout>
  )
}

// ← ESTA QUERY ESTÁ PERFECTA (Gatsby la parsea sin problemas)
export const query = graphql`
  query BlogPostBySlug($slug: String!) {
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

