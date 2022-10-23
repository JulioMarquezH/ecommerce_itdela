import React from "react"
import image from "../../images/img3.png"
import Post from "./post/Post"

const ArrayPost = [
  {
    image: image,
    date: 12 / 12 / 12,
    title: "que mas wey",
    description: "que fastidio hacer una description fastidiosa perras",
  },
  {
    image: image,
    date: 12 / 12 / 12,
    title: "que mas wey",
    description: "que fastidio hacer una description fastidiosa perras",
  },
  {
    image: image,
    date: 12 / 12 / 12,
    title: "que mas wey",
    description: "que fastidio hacer una description fastidiosa perras",
  },
]

function ListPost() {
  return (
    <div>
      {ArrayPost.map((item, index) => {
        return <Post key={index} {...item} />
      })}
    </div>
  )
}

export default ListPost
