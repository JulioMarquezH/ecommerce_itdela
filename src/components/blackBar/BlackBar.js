import React from "react"
import circulo from "../../images/circulo.svg"
import circulo1 from "../../images/circulo1.svg"
import circulo2 from "../../images/circulo2.svg"
import circulo3 from "../../images/circulo3.svg"
import circulo4 from "../../images/circulo4.svg"
import circulo5 from "../../images/circulo5.svg"
import BlackBarText from "./blackBarText/BlackBarText"
import "./styles-blackBar.css"

function BlackBar({ children }) {
  return (
    <div className="bar-black">
      <img src={circulo} alt="" className="ellipse" />
      <img src={circulo1} alt="" className="ellipse1" />
      <img src={circulo2} alt="" className="ellipse2" />
      <img src={circulo3} alt="" className="ellipse3" />
      <img src={circulo4} alt="" className="ellipse4" />
      <img src={circulo5} alt="" className="ellipse5" />
      {children}
    </div>
  )
}

export default BlackBar
