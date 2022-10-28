import React from "react"
import "./style-Form.css"

function FormContact() {
  return (
    <form className="data">
      <p className="data-title">Datos de contacto</p>
      <div>
        <input type="text" className="input-data" placeholder="Name" />
      </div>
      <div>
        <input type="text" className="input-data" placeholder="Last name" />
      </div>

      <div>
        <input type="text" className="input-data" placeholder="Phone" />
      </div>
      <div>
        <input
          type="text"
          className="input-data"
          placeholder="Mail@gmail.com"
        />
      </div>
      <div>
        <textarea className="taxtArea-data" placeholder="Direction"></textarea>
      </div>
      <button className="button-pink">Enviar pedido</button>
    </form>
  )
}

export default FormContact
