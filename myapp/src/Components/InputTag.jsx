import React, { useState } from 'react'
import useStorage from './useStorage'


function InputTag() {

    let [inputFiledValue , setInput] = useState("")
    let [value, setValue] = useStorage("content")
    function savingInput (e){
        let value = e.target.value
        setInput(value)
        setValue(value)
    }
  return (
    <div>
        <input type="text" 
        placeholder='Enter .....' 
        onChange={savingInput}
        />
        <h3>data that is getting stored : {value}</h3>
    </div>
  )
}

export default InputTag