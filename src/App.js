import React from 'react'
import Header from "./Components /Header";
import Footer from "./Components /Footer";
import Note from "./Components /Note";
import CreateArea from "./Components /CreateArea";
import { useState } from 'react';

const App = () => {

  const [notes, setNotes] = useState([]); 

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    });
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index!==id;
      })
    })
  }

  return (
    <div>
      <Header/>
      <CreateArea onAdd={addNote}/>
      {notes.map((note, index) => {
        return(
          <Note 
            key= {index}
            id= {index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
            />  
        )
      })}
      < Footer />
    </div>
  )
}

export default App