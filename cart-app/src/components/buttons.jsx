import React, { useState } from 'react'
import './styles/box.css'

function Buttons(props) {
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
    <button onClick={props.handleSubmit} className='btn' style={{backgroundColor : "yellow", width: 150}}>add</button>
    </>
    
  )
}

export default Buttons