import React from "react"
import Header from "../components/header/Header"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import "./style-cart.css"
import ListBoxCart from "../components/cart/ListBoxCart"

function cart() {
  return (
    <>
      <Header />
      <Navbar />
      <p className="subtitle-cart">Articulos seleccionados</p>
      <ListBoxCart />
      <Footer />
    </>
  )
}

export default cart
