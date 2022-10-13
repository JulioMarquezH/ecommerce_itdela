import React from "react"
import "./styles-filtersMoney.css"

function FiltersMoney() {
  return (
    <section>
      <p className="type-filters">Orden de precio</p>
      <div>
        <select className="parameter-bar">
          <option selected>Más bajo</option>
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
      </div>
    </section>
  )
}

export default FiltersMoney
