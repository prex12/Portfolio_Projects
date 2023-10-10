import React from 'react'

function TabTiles(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <button type='submit' onClick={()=>props.onDelete(props.id)}>remove</button>
    </div>
  )
}

export default TabTiles