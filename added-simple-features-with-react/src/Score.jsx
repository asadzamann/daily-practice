import { useState } from "react"

export default function Score() {
    const [count , setCount] = useState(0)
    return (
        <div className="card">
            <h2>Win Score</h2>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>

    )
}