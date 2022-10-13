import React from "react"
import "./styles-footerNetworks.css"
import icon3 from "../../../images/icon3.png"
import icon4 from "../../../images/icon4.png"
import icon5 from "../../../images/icon5.png"

function FooterNetworks() {
  return (
    <section>
      <h5>Redes sociales</h5>
      <div>
        <img src={icon3} alt="" />
        <img src={icon4} alt="" />
        <img src={icon5} alt="" />
      </div>
      <blockquote className="off-none">
        <h5>Itdela</h5>
        <p>DIRECCION 1</p>
        <p>DIRECCIÓN 2</p>
      </blockquote>
    </section>
  )
}

export default FooterNetworks
