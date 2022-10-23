import React from "react"
import Header from "../components/header/Header"
import FooterResponsive from "../components/footer/footerResponsive/FooterResponsive"
import Filters from "../components/filters/Filters"
import Footer from "../components/footer/Footer"
import ListProducts from "../components/products/listProducts/ListProducts"

function products() {
  return (
    <>
      <Header />
      <FooterResponsive />
      <div className="content">
        <Filters />
        <ListProducts />
      </div>
      <Footer />
    </>
  )
}

export default products
