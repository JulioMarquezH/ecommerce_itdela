import React from "react"
import "./styles-footerResponsive.css"
import icono8 from "../../../images/icono8.png"

function FooterResponsive() {
  return (
    <div className="on-none tarjet">
      <section className="on-none">
        <button>
          Categorias
          <img src={icono8} alt="" />
        </button>
        <hr />
      </section>
      <section className="on-none">
        <button>
          Marcas
          <img src={icono8} alt="" />
        </button>
        <hr />
      </section>
    </div>
  )
}

export default FooterResponsive
