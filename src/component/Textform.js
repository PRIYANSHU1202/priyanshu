import { useState } from "react"
import React from 'react'

export default function Textform(props) {
    const [text, settext] = useState("Enter Text Here");
    const handleuc=()=>
    {
          settext(text.toUpperCase())

    }
    const handleoc=(event)=>
    {
        settext(event.target.value)

    }
    const handlelc=()=>
    {
          settext(text.toLowerCase())

    }
    const handlect=()=>
    {
          settext("")

    }
    const handlecot=()=>
    {
          var text=document.getElementById("Edittext")
          navigator.clipboard.writeText(text.value)


    }
    const handleres=()=>
    {
         settext(text.split(/[ ]+/).join(" "))


    }
    return (
        <div>
            <h4>{props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleoc} value={text} id="Edittext" rows="10"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handleuc}>Convert to UpperCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handlelc}>Convert to LowerCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handlect}>Clear Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handlecot}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleres}>Remove Extra Space</button>
        </div>
    )
}
