import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props) => {
  const host = 'http://localhost:8081';

 const notesInitial =[]
    const [notes, setNotes] = useState(notesInitial);

    //Get all notes
    const getNotes = async () => {
     //API Call
     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: { 
        "content-type":"application/json",
        "auth-token": localStorage.getItem('auth-token')
    }
    } );
    const json = await response.json();
     console.log(json); 
     setNotes(json); 
    }
    //Add a note
    const addNote = async (title, description, tag) => {
     //API Call
     const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: { 
        "content-type":"application/json",
        "auth-token": localStorage.getItem('auth-token')
    },
    body: JSON.stringify({title, description, tag})
    } );
    // const json =  response.json();
     
      const note = await response.json();
      setNotes(notes.concat(note));
    }
    //delete a note
    const deleteNote = async (id) => {
        //API Call
     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: { 
        "content-type":"application/json",
        "auth-token": localStorage.getItem('auth-token')
    }
    } );
    const json = await response.json();
     console.log(json); 

      console.log("Deleting the note with id:" + id);
      const newNotes = notes.filter((note) => {return note._id!==id})
      setNotes(newNotes);
    }
    //edit a note
    const editNote =async (id, title, description, tag) => {
    //API Call
      const response = await fetch(`${host}/api/notes/updatenote/${id} `, {
        method: 'PUT',
        headers: { 
          "content-type":"application/json",
          "auth-token": localStorage.getItem('auth-token')
      },
        body: JSON.stringify({title, description, tag})
      } );
      const json = await response.json();
      console.log(json);
      
    let newNotes = JSON.parse(JSON.stringify(notes));
    //Logic to edit the note on the client 
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);


    }
   

 
    return (
    <NoteContext.Provider value={{notes , addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
    )

}

export default NoteState;