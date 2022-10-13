import React from "react"
import clsx from "clsx"
import "./styles-blogCard.css"

function BlogCard({ image, title, description, date, isNotBorder }) {
  return (
    <section className={clsx("blog", isNotBorder && "blog-margin")}>
      <img src={image} alt="" />
      <blockquote>
        <h6>{title}</h6>
        <p>{description}</p>
      </blockquote>
      <hr />
      <p>{date}</p>
    </section>
  )
}

export default BlogCard
