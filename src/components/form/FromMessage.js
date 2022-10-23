import React from "react"
import "./style-Form.css"

function FromMessage() {
  return (
    <form class="data">
      <p class="data-title">Datos de contacto</p>
      <div>
        <input type="text" class="input-data" placeholder="Name" />
      </div>
      <div>
        <input type="text" class="input-data" placeholder="Phone" />
      </div>
      <div>
        <input type="text" class="input-data" placeholder="Mail@gmail.com" />
      </div>
      <div>
        <textarea class="taxtArea-data" placeholder="Mensaje"></textarea>
      </div>
      <button class="button-pink">Enviar Menssage</button>
    </form>
  )
}

export default FromMessage
