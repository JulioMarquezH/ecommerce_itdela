import React from "react"
import FiltersCheck from "../filtersCheck/FiltersCheck"
import "./style-filtersCategory.css"

const checks = [
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

function FiltersCategory() {
  return (
    <section>
      <p className="type-filters">Por categoria</p>
      <div>
        {checks.map((item, index) => {
          const props = { ...item }
          return <FiltersCheck key={index} {...props} />
        })}
      </div>
    </section>
  )
}

export default FiltersCategory
/*


<div className="check-list">
<button className="check"></button>
<p>Línea de mesoterapia</p>
</div>
      <div className="check-list">
        <button className="check"></button>
        <p>Línea cosmética</p>
      </div>
      <div className="check-list">
        <button className="check"></button>
        <p>Precursores Antioxidantes</p>
      </div>
      <div className="check-list">
        <button className="check"></button>
        <p>Nutrición y medicina Funcional</p>
</div>
*/
