// import React from 'react';
import { useState } from "react"

interface Props{
    text:string
  }

function Text(props:Props) {
    const [text, setRender] = useState(true)
    return (
        <>
            <h1>{text ? props.text : null}</h1>
            <button onClick={() => {setRender(!text) }}>render text</button>
        </>
    )
}

export default Text