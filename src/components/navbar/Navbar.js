import React from "react"
import icon2 from "../../images/icon2.png"
import "./styles-navbar.css"
import { Link } from "gatsby"
import clsx from "clsx"

function Navbar() {
  let coño = true

  return (
    <>
      <nav className="nav">
        <section>
          <a href="">Línea de mesoterapia</a>
        </section>
        <section>
          <a href="">Línea cosmética</a>
        </section>
        <section>
          <a href="">Antioxidantes</a>
        </section>
        <section>
          <a href="">Nutrición</a>
        </section>
        <div className="navbar-mas">
          Mas
          <div className={clsx(coño && "navbar-none")}>
            <Link>olo</Link>
            <Link>olo</Link>
            <Link>olo</Link>
          </div>
        </div>
      </nav>
      <nav className="nav-responsive nav">
        <section>
          <button>
            Categorías
            <img src={icon2} alt="" />
          </button>
        </section>
      </nav>
    </>
  )
}

export default Navbar
