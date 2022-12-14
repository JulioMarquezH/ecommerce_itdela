import React from "react"
import FiltersCheck from "../filtersCheck/FiltersCheck"
import "../filtersCategory/style-filtersCategory.css"

const checks = [
  {
    name: "Ruby Rose",
  },
  {
    name: "Kylie Cosmetics",
  },
  {
    name: "Fenty Beauty",
  },
  {
    name: "Mac",
  },
  {
    name: "Eudora",
  },
  {
    name: "Maybeline",
  },
]

function FiltersBrand() {
  return (
    <section>
      <p className="type-filters">Por marcas</p>
      <div>
        {checks.map((item, index) => {
          const props = { ...item }
          return <FiltersCheck key={index} {...props} />
        })}
      </div>
    </section>
  )
}

export default FiltersBrand
