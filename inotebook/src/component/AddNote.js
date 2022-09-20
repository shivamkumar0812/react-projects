import React from 'react'
import NoteContext from '../context/NoteContext';
import { useContext, useState } from 'react';
const AddNote = (props) => {
  const context = useContext(NoteContext);
  const  {addNote} = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""})
  const handleAddNote = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""})
    props.settingAlert("Note Added Successfully", "success");
  }
  const onChange= (e) =>{
    setNote({...note , [e.target.name]: e.target.value})
  }
  return (
    <div className='container my-3'>
        <h2>Add a note</h2>
        <form className='my-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Enter the title</label>
            <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={onChange} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Enter the description</label>
            <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Enter the tag</label>
            <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange} />
          </div>
          
         
          <button type="submit" disabled={note.title.length <5 || note.description.length < 5} className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
        </form>
      </div>
  )
}

export default AddNote
