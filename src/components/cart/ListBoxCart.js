import React from "react"
import BoxCart from "./boxCart/BoxCart"
import img2 from "../../images/img2.png"
import "./style-ListBoxCart.css"

const array = [
  {
    image: img2,
    name: "ni idea",
    price: 30,
    number: 2,
    totalPrice: 60,
  },
  {
    image: img2,
    name: "ni idea",
    price: 30,
    number: 2,
    totalPrice: 60,
  },
  {
    image: img2,
    name: "ni idea",
    price: 30,
    number: 2,
    totalPrice: 60,
  },
]

function ListBoxCart() {
  return (
    <div className="box-cart">
      {array.map((item, index) => {
        return <BoxCart key={index} {...item} />
      })}
      <div className="total">
        <p className="text">total a pagar:</p>
        <button className="button-pink">Enviar pedido</button>
      </div>
    </div>
  )
}

export default ListBoxCart
