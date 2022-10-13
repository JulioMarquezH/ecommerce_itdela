import React from "react"
import "./style-filtersCheck.css"

function FiltersCheck({ name }) {
  return (
    <div className="check-list">
      <button className="check"></button>
      <p className="p-filters">{name}</p>
    </div>
  )
}

export default FiltersCheck
