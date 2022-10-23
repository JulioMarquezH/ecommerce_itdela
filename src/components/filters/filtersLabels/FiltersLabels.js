import React from "react"
import FiltersCheck from "../filtersCheck/FiltersCheck"
import "./style-filtersLabels.css"

const labels = [
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

function FiltersLabels() {
  return (
    <section>
      <p className="type-filters-labels">Por marcas</p>
      <div>
        {labels.map((item, index) => {
          const props = { ...item }
          return <FiltersCheck key={index} {...props} />
        })}
      </div>
    </section>
  )
}

export default FiltersLabels
