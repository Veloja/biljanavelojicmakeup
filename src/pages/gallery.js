import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import "./gallery.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = ({ location }) => {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          absolutePath: { regex: "/assets/" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 100, height: 150, quality: 95) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const images = data.allFile.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Biljana Velojic" />
      <div className="gallery">
        {images.map(image => (
          <Image
            style={{ width: "30%", height: 200, marginBottom: 40 }}
            fixed={image.node.childImageSharp.fixed}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Gallery
