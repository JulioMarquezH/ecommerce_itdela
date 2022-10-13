import React from "react"

import Header from "../components/header/Header"
import Navbar from "../components/navbar/Navbar"
import Hero from "../components/hero/Hero"
import Products from "../components/products/Products"
import Networks from "../components/networks/Networks"
import Category from "../components/category/Category"
import BlackBar from "../components/blackBar/BlackBar"
import Blog from "../components/blog/Blog"
import BlackBarText from "../components/blackBar/blackBarText/BlackBarText"
import BlackBarForm from "../components/blackBar/blackBarForm/BlackBarForm"
import Footer from "../components/footer/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Products />
      <Networks />
      <Category />
      <BlackBar>
        <BlackBarText />
      </BlackBar>
      <Blog />
      <BlackBar>
        <BlackBarForm />
      </BlackBar>
      <Footer />
    </>
  )
}
