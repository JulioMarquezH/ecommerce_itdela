import React from "react"
import "./style-BoxCart.css"

function BoxCart({ image, name, price, totalPrice, number }) {
  return (
    <>
      <div className="shopping-cart">
        <img className="image-cart" src={image} alt="" />
        <h4 className="text-h4">{name}</h4>
        <p className="text">COP: {price}</p>
        <p className="text">{number}</p>
        <section>
          <button className="btn-add">
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="15"
                cy="15.5"
                r="14.5"
                fill="#020000"
                stroke="#A8A8A8"
              />
              <path d="M15 11.5V19.5M10.5 15.5H19" stroke="white" />
            </svg>
          </button>
          <button>
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="15"
                cy="15.5"
                r="14.5"
                fill="white"
                stroke="#A8A8A8"
              />
              <path
                d="M11.3311 15.5H19.0583"
                stroke="#767676"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </section>
        <p className="text">Sub-total: {totalPrice}</p>
      </div>
      <hr />
    </>
  )
}

export default BoxCart
