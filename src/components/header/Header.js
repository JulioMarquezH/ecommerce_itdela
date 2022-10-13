import React from "react"
import icon1 from "../../images/icon1.png"
import "./styles-header.css"

function Header() {
  return (
    <header className="header">
      <section>
        <h1>ITDELA</h1>
        <p>COMERCIALIZADORA</p>
      </section>
      <section>
        <a href="#">Blog</a>
        <button>
          <img src={icon1} alt="" />
        </button>
      </section>
    </header>
  )
}

export default Header
