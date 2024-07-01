import { useRef, useState } from "react"
import RefExemple from "./RefExample";

export default function App(){
  let variable = 0;
  const [state, setState] = useState(0);
  const ref = useRef(0);
   
  const showValue = () => {
    alert(`
      Variable: ${variable}
      Ref: ${ref.current}
      State: ${state}
      `
    )
  }

  return(
    <>
      <h2>Exemplo de useRef com o DOM</h2>
      <RefExemple />
      <h1>Conhecendo o useRef</h1>
      <hr />
      <p>Variavel: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button onClick={() => variable++}>Add Variavel</button>
      <button onClick={() => ref.current++}>Add Ref</button>
      <button onClick={() => {setState(state => state + 1)}}>Add State</button>
      <button onClick={showValue}>Exibir Valores</button>
    </>

  )
}
