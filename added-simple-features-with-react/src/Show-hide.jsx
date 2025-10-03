import { useState } from "react"

export default function ShowHide() {
    const [display , setDisplay] = useState(true)
    return (
        <div className='card'>
            {display && <h1 id="content">You can't See me</h1>}

        
        <button onClick={()=> setDisplay(true)}>Show</button>
        <button onClick={()=> setDisplay(false)}>Hide</button>
        </div>
    )
}