import React from "react"
import icon1 from "../../images/icon1.png"
import "./styles-header.css"
import { Link } from "gatsby"

function Header() {
  return (
    <header className="header">
      <section>
        <Link to="/">
          <h1>ITDELA</h1>
          <p>COMERCIALIZADORA</p>
        </Link>
      </section>
      <section className="Link">
        <Link className="a" to="/blogpost">
          Blog
        </Link>
        <Link to="/cart">
          <img src={icon1} alt="" />
        </Link>
      </section>
    </header>
  )
}

export default Header
