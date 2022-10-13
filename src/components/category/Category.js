import React from "react"
import img8 from "../../images/img8.png"
import img9 from "../../images/img9.png"
import img10 from "../../images/img10.png"
import "./styles-category.css"

import CategoryCard from "./categoryCard/CategoryCard"

const categoryList = [
  {
    imge: img8,
    name: "Línea cosmética",
  },
  {
    imge: img9,
    name: "Línea cosmética",
  },
  {
    imge: img10,
    name: "Precursores Antioxidantes",
  },
]

function Category() {
  return (
    <aside className="box">
      <p className="subtitle">Por categoría</p>
      <div className="stellar">
        {categoryList.map((item, index) => {
          const isNotBorder = index % 2 == 1
          const props = { ...item, isNotBorder }
          return <CategoryCard {...props} />
        })}
      </div>
    </aside>
  )
}

export default Category
