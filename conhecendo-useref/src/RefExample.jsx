import { useRef } from "react"

export default  function RefExemple(){
    const inputRef = useRef(null)
    function handleClick(){
        inputRef.current.focus()
        console.log(inputRef.current)
    }

    return(
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focar no Input</button>
        </div>
    )
}