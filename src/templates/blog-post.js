import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/Seo"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />

      <article style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem", textAlign: "center" }}>
          {post.frontmatter.title}
        </h1>
        <p style={{ textAlign: "center", color: "#b3e5fc", fontSize: "1.2rem", marginBottom: "3rem" }}>
          {post.frontmatter.date}
        </p>

        {/* IMÁGENES CON TAMAÑO ADECUADO */}
        <div 
          dangerouslySetInnerHTML={{ __html: post.html }} 
          style={{ 
            fontSize: "1.25rem", 
            lineHeight: "2",
            textAlign: "justify"
          }}
        />

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <a href="/blog" style={{ 
            color: "#ec4899", 
            fontWeight: "bold", 
            fontSize: "1.4rem",
            textDecoration: "none"
          }}>
            ← VOLVER AL BLOG
          </a>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`

