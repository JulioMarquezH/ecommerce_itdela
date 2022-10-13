import React from "react"
import clsx from "clsx"
import "./styles-categoryCard.css"

function CategoryCard({ imge, name, isNotBorder }) {
  return (
    <section>
      <img
        src={imge}
        alt=""
        className={clsx("img-square", isNotBorder && "square-margin")}
      />
      <section className={clsx("p", isNotBorder && "p-margin")}>
        <p>{name}</p>
      </section>
    </section>
  )
}

export default CategoryCard
