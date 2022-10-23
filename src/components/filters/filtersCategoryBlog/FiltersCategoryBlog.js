import React from "react"
import "./style-CategoryBlog.css"

const topics = [
  {
    name: "Línea de mesoterapia",
  },
  {
    name: "Línea cosmética",
  },
  {
    name: "Precursores Antioxidantes",
  },
  {
    name: "Nutrición y medicina Funcional",
  },
]

function FiltersCategoryBlog() {
  return (
    <section>
      <p className="type-filters-blog">Por categoria</p>
      <div>
        {topics.map((item, index) => {
          return <p className="p-filters">{item.name}</p>
        })}
      </div>
    </section>
  )
}

export default FiltersCategoryBlog
