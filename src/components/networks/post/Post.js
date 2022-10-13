import React from "react"
import clsx from "clsx"
import "./styles-post.css"

function Post({ image, isNone, isNotBorder }) {
  return (
    <section>
      <img
        src={image}
        alt=""
        className={clsx(
          "net",
          isNone && "net-none",
          isNotBorder && "net-margin"
        )}
      />
    </section>
  )
}

export default Post
