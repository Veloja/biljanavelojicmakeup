import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Biljana Velojic" />
      <div className="contact">
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.4588026676415!2d19.81154661555058!3d45.25873557909908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11b365753b8d%3A0x9e7e6891d8c7130c!2sKoste%20Racina%207%2C%20Novi%20Sad%2C%20Serbia!5e0!3m2!1sen!2sie!4v1608137813334!5m2!1sen!2sie"
            width="600"
            height="450"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

export const contactQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
