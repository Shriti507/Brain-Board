import React,{useState} from 'react'
import uuid from 'react-uuid'
import Note from './Note'
import Sidebar from './Sidebar'
import DashboardLeft from './DashboardLeft'


const NotesList = () => {
  const[notes,setNotes]=useState([]);

  const[activeNote,setActiveNote]=useState(false);

  const [searchText, setSearchText] = useState('');

  const onAddNote=()=>{
    const newNote={
      id:uuid(),
      title:"Untitled Note",
      body:"",
      lastModified: Date.now()
    }
    setNotes([newNote,...notes])
    setActiveNote(newNote.id)
  }

  const deleteData=(idToDelete)=>{
    setNotes(notes.filter((notes)=>notes.id!== idToDelete))
  }

  const getActiveNote=()=>{
    return notes.find(({id})=>id===activeNote)
  }

  const updateNote=(updatedNote) => {
    const updatedNotesArray=notes.map(note => {
      if(note.id===activeNote) {
        return updatedNote
      }
      return note
    }) 
    setNotes(updatedNotesArray)
  }

  return (
    <div className='note-container'>
        <Sidebar  setSearchText={setSearchText}/>
        <div className="dashboard">
          <DashboardLeft notes={notes.filter((note)=>note.title.toLowerCase().includes(searchText.toLowerCase()))} onAddNote={onAddNote} deleteData={deleteData} activeNote={activeNote} setActiveNote={setActiveNote}/>
        </div>

        <div className='note-main'>
        <Note activeNote={getActiveNote()} onUpdateNote={updateNote}/>
        </div>
    </div>
  )
}

export default NotesList
