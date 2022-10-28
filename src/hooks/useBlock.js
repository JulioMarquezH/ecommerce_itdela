import { useState } from "react"
import block from "./block"

const useBlock = () => {
  const [state, setState] = useState(block)

  const addNumber = w => {
    setState({
      number: [...state.number, w],
    })
  }
  return {
    addNumber,
  }
}

export default useBlock
