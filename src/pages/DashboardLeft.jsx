import React from 'react'

const DashboardLeft = ({notes,onAddNote,deleteData,activeNote,setActiveNote}) => {
  return (
    <div className='dashboard-left'>
        <div className='dashboard-left-header'>
            <h1>Notes</h1>
            <button onClick={onAddNote}>Add</button>
        </div>

        <div className='dashboard-left-notes' >
            {notes.map((note, index) => (
               
                <div key={index} className={`dashboard-left-note ${note.id===activeNote && "active"}`} onClick={()=> setActiveNote(note.id)}> {/* note is selected  if  active */}
                    <div className='left-note-title'>
                        <strong>{note .title}</strong>
                        <button onClick={()=>deleteData(note.id)}>Delete</button>
                    </div>
                    <p>{note.body && note.body.substr(0,200)+"..."} </p>
                    <small className='note-meta'>Last modified {new Date (note.lastModified).toLocaleDateString("en-GB",{
                        hour:"2-digit",
                        minute:"2-digit",
                    })}</small>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DashboardLeft