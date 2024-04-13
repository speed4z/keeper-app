import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteList , setNoteList] = useState([]);

  function addNoteToList(newNote){
    setNoteList((prevList)=>{
      return [...prevList, newNote];
    });
  }

  function deleteNote(id){
    setNoteList((prevNotes)=>{
      return prevNotes.filter((n,index)=>{
        return index !== id;
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea
      onAdd = {addNoteToList}
      />
      { noteList && noteList.map((note,index) =>{
        return <Note 
        key={index} 
        id = {index}
        title={note.title}
        content={note.content} 
        onDelete={deleteNote}
        />
      }
      )}
      
      <Footer />
    </div>
  );
}

export default App;
