import React from "react"
import img4 from "../../../images/img4.png"
import icon10 from "../../../images/icon10.png"
import icon9 from "../../../images/icon9.png"
import add from "../../../images/add.png"
import "./styles-productSale.css"

const product = {
  image: img4,
  name: "Arum Life",
  price: "COP: 45.000",
  description1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, sed ut rhoncus fusce lectus in. Magna dui erat odio malesuada donec dui. Nibh purus, feugiat ut non. Nibh nunc id amet pretium interdum nunc odio sed pretium.",
  description2:
    "Nibh purus, feugiat ut non. Nibh nunc id amet pretium interdum nunc odio sed pretium.",
  description3:
    "Nibh purus, feugiat ut non. Nibh nunc id amet pretium Nibh purus.",
}

function ProductSale() {
  return (
    <div className="content flex-warp">
      <section className="img-product">
        <img src={product.image} alt="" />
      </section>
      <section className="info-product">
        <p className="name-product">{product.name}</p>
        <p className="price-product">{product.price}</p>
        <blockquote>
          <p>{product.description1}</p>
          <br />

          <p>{product.description2}</p>
          <br />

          <p>{product.description3}</p>
        </blockquote>
        <div className="content equal">
          <button>
            <img src={icon10} alt="" />
          </button>
          <p className="quantity-product">2</p>
          <button>
            <img src={icon9} alt="" />
          </button>
        </div>
        <button className="button-pink button-buy">
          <img src={add} alt="" />
          Agregar al carrito
        </button>
      </section>
    </div>
  )
}

export default ProductSale
