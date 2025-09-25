import { useState } from "react"

export default function Runs() {
    const [run, setRun] = useState(0);

    const handleSingle = () => {
        const updatedRuns = run + 1;
         setRun(updatedRuns);
    }
    return (
        <div className="">

            
            <h3>Player: Mushfique</h3>
            <h1>Score: {run}</h1>
            <button onClick={handleSingle}> Run! </button>
        </div>
    )
}