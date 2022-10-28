import React from "react"
import img11 from "../../images/img11.png"
import img12 from "../../images/img12.png"
import img13 from "../../images/img13.png"
import BlogCard from "./blogCard/BlogCard"
import "./styles-blog.css"
import { nanoid } from "nanoid"

const contentBlog = [
  {
    image: img11,
    title: "Línea cosmética",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, sed ut rhoncus fusce lectus in. Magna dui erat odio malesuada donec dui. Nibh purus, feugiat ut non. Nibh nunc id amet pretium interdum...",
    date: "29 de Julio, 2022",
  },
  {
    image: img12,
    title: "Línea cosmética",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, sed ut rhoncus fusce lectus in. Magna dui erat odio malesuada donec dui. Nibh purus, feugiat ut non. Nibh nunc id amet pretium interdum...",
    date: "29 de Julio, 2022",
  },
  {
    image: img13,
    title: "Línea cosmética",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, sed ut rhoncus fusce lectus in. Magna dui erat odio malesuada donec dui. Nibh purus, feugiat ut non. Nibh nunc id amet pretium interdum...",
    date: "29 de Julio, 2022",
  },
]

function Blog() {
  return (
    <aside className="box">
      <p className="subtitle">Nuestro blog</p>
      <div className="stellar">
        {contentBlog.map((item, index) => {
          const isNotBorder = index % 2 == 1
          const props = { ...item, isNotBorder }
          const key = nanoid()
          return <BlogCard key={key} {...props} />
        })}
      </div>
    </aside>
  )
}

export default Blog

/*
 <section className="blog">
          <img src="./img/img11.png" alt="" />
          <blockquote>
            <h6>Línea cosmética</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, sed
              ut rhoncus fusce lectus in. Magna dui erat odio malesuada donec
              dui. Nibh purus, feugiat ut non. Nibh nunc id amet pretium
              interdum...
            </p>
          </blockquote>
          <hr />
          <p>29 de Julio, 2022</p>
        </section>
        <section className="blog blog-margin">
          <img src="./img/img12.png" alt="" />
          <blockquote>
            <h6>Línea cosmética</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, sed
              ut rhoncus fusce lectus in. Magna dui erat odio malesuada donec
              dui. Nibh purus, feugiat ut non. Nibh nunc id amet pretium
              interdum...
            </p>
          </blockquote>
          <hr />
          <p>29 de Julio, 2022</p>
        </section>
        <section className="blog">
          <img src="./img/img13.png" alt="" />
          <blockquote>
            <h6>Línea cosmética</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, sed
              ut rhoncus fusce lectus in. Magna dui erat odio malesuada donec
              dui. Nibh purus, feugiat ut non. Nibh nunc id amet pretium
              interdum...
            </p>
          </blockquote>
          <hr />
          <p>29 de Julio, 2022</p>
        </section>

*/
