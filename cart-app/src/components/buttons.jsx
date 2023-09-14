import React, { useState } from 'react'
import './styles/box.css'

function Buttons() {
    const [count, setCount] = useState(0);

    const handleDecrease=()=>{
        setCount(()=>
        count < 1? 0 : count - 1)
    }

    const handleIncrease=()=>{
        setCount(count + 1)
    }
  return (
    <>
    <div className='flex'>
        <button className='btn-add' onClick={handleIncrease}>+</button>
        <p>{count}</p>
        <button className='btn-add' onClick={handleDecrease}>-</button>
    </div>
    <button className='btn' style={{backgroundColor : "yellow", width: 150}}>Add to Cart</button>
    </>
    
  )
}

export default Buttons