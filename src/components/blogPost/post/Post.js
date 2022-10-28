import React from "react"
import "./style-Post.css"

function Post({ image, title, date, description }) {
  return (
    <div className="blog-post">
      <div className="block-image-blog">
        <img className="image-blog" src={image} alt="" />
      </div>
      <div>
        <p className="title-post">{title}</p>
        <p className="date-post">{date}</p>
        <p className="decription-post">{description}</p>
      </div>
    </div>
  )
}

export default Post
