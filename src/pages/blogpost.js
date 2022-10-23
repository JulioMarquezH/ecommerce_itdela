import React from "react"
import Header from "../components/header/Header"
import ListPost from "../components/blogpost/ListPost"
import Footer from "../components/footer/Footer"

import FiltersBlog from "../components/filters/filtersBlog/FiltersBlog"
import Navbar from "../components/navbar/Navbar"

function BlogPost() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="content-blog">
        <ListPost />
        <FiltersBlog />
      </div>
      <Footer />
    </>
  )
}

export default BlogPost
