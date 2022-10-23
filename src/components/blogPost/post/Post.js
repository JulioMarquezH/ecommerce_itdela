import React from "react"
import "./style-Post.css"

function Post({ image, title, date, description }) {
  return (
    <div class="blog-post">
      <div class="block-image-blog">
        <img class="image-blog" src={image} alt="" />
      </div>
      <div>
        <p class="title-post">{title}</p>
        <p class="date-post">{date}</p>
        <p class="decription-post">{description}</p>
      </div>
    </div>
  )
}

export default Post
