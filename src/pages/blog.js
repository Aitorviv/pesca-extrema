import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import seo from "../components/seo"

const Blog = ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog - Pesca Extrema Mundial" />
      <h1 style={{ textAlign: "center", fontSize: "3.5rem", marginBottom: "4rem" }}>
        ÚLTIMOS DESTINOS
      </h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} style={{ marginBottom: `5rem`, padding: `2.5rem`, background: `rgba(0,0,0,0.5)`, borderRadius: 28, backdropFilter: `blur(12px)` }}>
          <h2 style={{ marginBottom: `.5rem`, fontSize: "2.6rem" }}>
            <Link to={node.fields.slug} style={{ textDecoration: `none`, color: `#63b3ed` }}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p style={{ color: `#b3e5fc`, fontSize: `1.2rem`, marginBottom: "1rem" }}>
            {node.frontmatter.date}
          </p>
          <p style={{ marginBottom: "1.8rem", fontSize: "1.35rem", lineHeight: "1.9" }}>
            {node.frontmatter.excerpt}
          </p>
          <Link to={node.fields.slug} style={{ color: `#ec4899`, fontWeight: "bold", fontSize: "1.4rem" }}>
            LEER MÁS →
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            excerpt
          }
          fields { slug }
        }
      }
    }
  }
`

export default Blog

