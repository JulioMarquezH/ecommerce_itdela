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
