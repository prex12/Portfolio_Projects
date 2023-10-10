import React, { useState } from 'react';
import Header from '../src/components/Header';
import Tabs from './components/Tabs';
import Footer from './components/Footer';
import TabTiles from './components/Tabtiles';
import './App.css';


function App() {
  const [notes, setNotes] = useState([])

  const addItem =(welp)=>{
    return setNotes(prevNotes=>{
      return [...prevNotes, welp]
    })
    // console.log(notes);
  }


  const deleteListItem =(id)=>{
    setNotes((prevNotes)=>{
      return prevNotes.filter((newNotes, index)=>{
        return index !== id
      })
    })

  }
  return (
    <div className="App">
      <Header />
      <Tabs onAdd = {addItem} />
      {notes.map((noteItem, index)=>{
        return(
           <TabTiles key = {index} id = {index} title = {noteItem.title} content = {noteItem.content} onDelete = {deleteListItem} />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
