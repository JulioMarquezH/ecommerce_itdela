import React from "react"
import "./style-filtersBlog.css"
import FiltersCategoryBlog from "../FiltersCategoryBlog/FiltersCategoryBlog"
import FiltersBran from "../filtersBrand/FiltersBrand"
import FiltersLabels from "../filtersLabels/FiltersLabels"

function FiltersBlog() {
  return (
    <section className="filters-blog">
      <FiltersCategoryBlog />
      <FiltersLabels />
    </section>
  )
}

export default FiltersBlog
