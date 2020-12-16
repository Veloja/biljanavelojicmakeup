import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes
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

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    homeImage: file(absolutePath: { regex: "/home-image.jpg/" }) {
      childImageSharp {
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
