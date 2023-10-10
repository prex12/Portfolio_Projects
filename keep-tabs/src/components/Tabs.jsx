import React, { useState } from 'react'
import '../css/tabs.css'

function Tabs(props) {
    const [note, setNote] = useState({
        title : "",
        content : ""
    })

    const handleForm =(event)=>{
        const {name, newValue} = event.target
        setNote(prevValue=>{
            return{
                ...prevValue,
                [name] : newValue
            }   
        })
    }
    const addItem = (event) =>{
        props.onAdd (note)
            setNote({
                title: "",
                content: ""
            })
        event.preventDefault()
    }

  return (
    <div className='tabs'>
        <form className='form-flex' onSubmit={addItem}>
            <input name='title' type="text" placeholder='title' value={note.title} onChange={handleForm} />
            <textarea name="content" value={note.content} onChange={handleForm} cols="50" rows="5" placeholder='Task...' />
            <button className='btn' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Tabs