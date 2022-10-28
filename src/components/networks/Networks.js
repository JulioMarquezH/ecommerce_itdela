import React from "react"
import img5 from "../../images/img5.png"
import img6 from "../../images/img6.png"
import img7 from "../../images/img7.png"
import Ellipse5 from "../../images/Ellipse5.png"
import "./style-networks.css"
import { nanoid } from "nanoid"
import Post from "./post/Post"

const images = [
  {
    image: img5,
  },
  {
    image: img6,
  },
  {
    image: img7,
  },
]

function Networks() {
  return (
    <aside className="box">
      <p className="subtitle">En redes</p>
      <div className="stellar">
        {images.map((item, index) => {
          const isNone = index !== 0
          const isNotBorder = index % 2 == 1
          const props = { ...item, isNone, isNotBorder }
          const key = nanoid()
          return <Post key={key} {...props} />
        })}
      </div>
      <span>
        <img src={Ellipse5} alt="" />
        <img src={Ellipse5} alt="" />
        <img src={Ellipse5} alt="" />
      </span>
    </aside>
  )
}

export default Networks
