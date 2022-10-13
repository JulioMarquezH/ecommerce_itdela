import React from "react"
import FiltersCategory from "./filtersCategory/FiltersCategory"
import FiltersMoney from "./filtersMoney/FiltersMoney"
import "./style-filters.css"
import FiltersBran from "./filtersBrand/FiltersBrand"

function Filters() {
  return (
    <section className="filters">
      <p className="title-filters">Filtros</p>
      <FiltersCategory />
      <FiltersMoney />
      <FiltersBran />
    </section>
  )
}

export default Filters
