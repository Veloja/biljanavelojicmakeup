import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
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

  const avatar = data?.homeImage?.childImageSharp?.fluid

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Biljana Velojic" />
      {avatar && (
        <Image
          fluid={avatar}
          alt="home image"
          style={{ maxWidth: "70%", height: "140vh", margin: "0 auto" }}
        />
      )}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    homeImage: file(absolutePath: { regex: "/home-image.jpg/" }) {
      childImageSharp {
        # fixed( quality: 95) {
        #   ...GatsbyImageSharpFixed
        # }
        fluid(maxWidth: 1970) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
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
        }
      }
    }
  }
`
