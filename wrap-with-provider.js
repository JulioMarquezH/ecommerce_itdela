import React from "react"
/*
import { Provider } from "react-redux"
 */
import AppContext from "./src/context/AppContext"
/*
import useBlock from "./src/hooks/useBlock"
import createStore from "./src/state/createStore"
*/

export default ({ element }) => {
  return (
    <AppContext.Provider value={{ cart: [] }}>{element}</AppContext.Provider>
  )
}
