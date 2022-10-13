import React from "react"
import clsx from "clsx"
import add from "../../../images/add.png"
import "./styles-prdoctCard.css"

function PrdoctCard({ name, image, price, labelBtn, isNotBorder }) {
  return (
    <section>
      <img
        src={image}
        alt=""
        class={clsx("img-square", isNotBorder && "square-margin")}
      />
      <blockquote
        class={clsx("stellar-text", isNotBorder && "stellar-text-margin")}
      >
        <h4>{name}</h4>
        <p>{price}</p>
      </blockquote>
      <button class={clsx("button-pink", isNotBorder && "button-pink-margin")}>
        <img src={add} alt="" />
        {labelBtn}
      </button>
    </section>
  )
}

export default PrdoctCard
