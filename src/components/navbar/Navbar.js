import React from "react"
import icon2 from "../../images/icon2.png"
import "./styles-navbar.css"

function Navbar() {
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
        <section>
          <button>
            Más
            <img src={icon2} />
          </button>
        </section>
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
