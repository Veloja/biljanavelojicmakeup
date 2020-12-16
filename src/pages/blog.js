import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Biljana Velojic" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Biljana Velojic Blog page" />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "0 30px",
        }}
      >
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          console.log("post", posts)
          return (
            <Link
              key={post.fields.slug}
              to={post.fields.slug}
              itemProp="url"
              style={{
                width: "30%",
                backgroundColor: "white",
                marginBottom: "40px",
                borderRadius: 20,
              }}
            >
              <Image
                fixed={post.frontmatter.thumbnailImage.childImageSharp.fixed}
                alt={post.frontmatter.title}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "15px",
                }}
              >
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <h2>Title: {title}</h2>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                  <small style={{ display: "flex", marginTop: "auto" }}>
                    {post.frontmatter.date}
                  </small>
                </article>
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          thumbnailImage {
            childImageSharp {
              fixed(height: 100, width: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
