import React from "react"
import Header from "../components/header/Header"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import ProductRelated from "../components/products/productRelated/ProductRelated"
import ProductSale from "../components/products/productSale/ProductSale"

function product() {
  return (
    <>
      <Header />
      <Navbar />
      <ProductSale />
      <p className="subtitle" style={{ marginLeft: "61px" }}>
        Recomendaciones
      </p>
      <ProductRelated />
      <Footer />
    </>
  )
}

export default product

/*

<aside className="products">
        <section>
          <img src="./img/img2.png" alt="" className="img-square" />
          <blockquote className="stellar-text">
            <h4>Crema moldeadora</h4>
            <p>COP 25.000</p>
          </blockquote>
          <button className="button-pink">
            <img src="./img/add.png" alt="" />
            Agregar al carrito
          </button>
        </section>
        <section className="space1">
          <img src="./img/img2.png" alt="" className="img-square" />
          <blockquote className="stellar-text">
            <h4>Crema moldeadora</h4>
            <p>COP 25.000</p>
          </blockquote>
          <button className="button-pink">
            <img src="./img/add.png" alt="" />
            Agregar al carrito
          </button>
        </section>
        <section className="space2">
          <img src="./img/img2.png" alt="" className="img-square" />
          <blockquote className="stellar-text">
            <h4>Crema moldeadora</h4>
            <p>COP 25.000</p>
          </blockquote>
          <button className="button-pink">
            <img src="./img/add.png" alt="" />
            Agregar al carrito
          </button>
        </section>
      </aside>
      */
