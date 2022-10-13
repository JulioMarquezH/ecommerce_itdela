import React from "react"
import img2 from "../../../images/img2.png"
import img3 from "../../../images/img3.png"
import img4 from "../../../images/img4.png"
import img15 from "../../../images/img15.png"
import img16 from "../../../images/img16.png"
import img17 from "../../../images/img17.png"
import img18 from "../../../images/img18.png"
import img19 from "../../../images/img19.png"
import img20 from "../../../images/img20.png"
import "./style-listProducts.css"
import PrdoctCard from "../prdoctCard/PrdoctCard"

const productList = [
  {
    name: "Crema moldeadora",
    image: img17,
    price: "COP 25.000",
    labelBtn: "Agregar al carrito",
  },
  {
    name: "Supremedics",
    image: img20,
    price: "COP 65.000",
    labelBtn: "Agregar al carrito",
  },
  {
    name: "Arum Life",
    image: img15,
    price: "COP 35.000",
    labelBtn: "Agregar al carrito",
  },
  {
    name: "Crema moldeadora",
    image: img15,
    price: "COP 25.000",
    labelBtn: "Agregar al carrito",
  },
  {
    name: "Supremedics",
    image: img16,
    price: "COP 65.000",
    labelBtn: "Agregar al carrito",
  },
  {
    name: "Arum Life",
    image: img17,
    price: "COP 35.000",
    labelBtn: "Agregar al carrito",
  },
  {
    name: "Arum Life",
    image: img18,
    price: "COP 35.000",
    labelBtn: "Agregar al carrito",
  },
  {
    name: "Arum Life",
    image: img19,
    price: "COP 35.000",
    labelBtn: "Agregar al carrito",
  },
  {
    name: "Arum Life",
    image: img20,
    price: "COP 35.000",
    labelBtn: "Agregar al carrito",
  },
]

function ListProducts() {
  return (
    <div className="list-products">
      <div class="catalogue">
        {productList.map((item, index) => {
          const isNotBorder = index * 0 == 1
          const props = { ...item, isNotBorder }
          return <PrdoctCard {...props} />
        })}
      </div>
    </div>
  )
}

export default ListProducts
