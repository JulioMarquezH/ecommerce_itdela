import React from "react"
import "./style-Form.css"

function FormContact() {
  return (
    <form class="data">
      <p class="data-title">Datos de contacto</p>
      <div>
        <input type="text" class="input-data" placeholder="Name" />
      </div>
      <div>
        <input type="text" class="input-data" placeholder="Last name" />
      </div>

      <div>
        <input type="text" class="input-data" placeholder="Phone" />
      </div>
      <div>
        <input type="text" class="input-data" placeholder="Mail@gmail.com" />
      </div>
      <div>
        <textarea class="taxtArea-data" placeholder="Direction"></textarea>
      </div>
      <button class="button-pink">Enviar pedido</button>
    </form>
  )
}

export default FormContact
