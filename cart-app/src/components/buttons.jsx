import React, { useState } from 'react'

function Buttons() {
    const [count, setCount] = useState(0);

    const handleDecrease=()=>{
        setCount(count - 1)
    }

    const handleIncrease=()=>{
        setCount(count + 1)
    }
  return (
    <div>
        <button onClick={handleIncrease}>+</button>
        <p>{count}</p>
        <button onClick={handleDecrease}>-</button>
    </div>
  )
}

export default Buttons