import React from "react"
import { Link } from "gatsby"

import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">BILJANA VELOJIĆ</h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <Link to="/" className="header__list-link">
              home
            </Link>
          </li>
          <li className="header__list-item">
            <Link to="/blog/" className="header__list-link">
              blog
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__list-link">gallery</Link>
          </li>
          <li className="header__list-item">
            <Link className="header__list-link">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
