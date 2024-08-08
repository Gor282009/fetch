import React, { useEffect } from 'react'
import { useState } from 'react'
function Input() {
    const [value, setValue] = useState("")
    useEffect(() =>{
     document.title = value
    }, [value])
  return (
    <div>
        <input type="text" className="search"  onChange={(e) => {
            setValue(e.target.value)
        }}/>
    </div>
  )
}

export default Input