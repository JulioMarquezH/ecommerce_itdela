import React from "react"
import "./styles-blackBarForm.css"

function BlackBarForm() {
  return (
    <aside className="bar-black-form">
      <blockquote>
        <p>¡Pronto tendrémos newsletter!</p>
        <p className="bar-black-text">
          Subscribete para que estés atento a nuestras promociones
        </p>
        <section>
          <input type="text" name="" placeholder="       Correo" id="" />
          <button className="button-pink">Registrame</button>
        </section>
      </blockquote>
    </aside>
  )
}

export default BlackBarForm
