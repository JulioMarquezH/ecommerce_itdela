import React from "react"
import img2 from "../../../images/img2.png"
import img3 from "../../../images/img3.png"
import img4 from "../../../images/img4.png"
import "../styles-products.css"
import "./styles-productsRelated.css"
import PrdoctCard from "../prdoctCard/PrdoctCard"
import { nanoid } from "nanoid"

const productList = [
  {
    name: "Crema moldeadora",
    image: img2,
    price: "COP 25.000",
    labelBtn: "Agregar al carrito",
  },
  {
    name: "Supremedics",
    image: img3,
    price: "COP 65.000",
    labelBtn: "Agregar al carrito",
  },
  {
    name: "Arum Life",
    image: img4,
    price: "COP 35.000",
    labelBtn: "Agregar al carrito",
  },
]

function ProductRelated() {
  return (
    <div className="related">
      <div className="box-related">
        {productList.map((item, index) => {
          const isNotBorder = index * 0 == 1
          const key = nanoid()
          const props = { ...item, isNotBorder }
          return <PrdoctCard key={key} {...props} />
        })}
      </div>
    </div>
  )
}

export default ProductRelated
