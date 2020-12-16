import React from "react"

import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()}, Built by Vladan Velojic
    </footer>
  )
}

export default Footer
