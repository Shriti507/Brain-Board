import React from 'react'


const Note = ({activeNote,onUpdateNote}) => {


  const onEditField=(key,value)=>{

    onUpdateNote({
      //  id:activeNote.id,
      //  title:
      ...activeNote,
      [key]:value,
      lastModified:Date.now()
    })

  };

  if(!activeNote){
    return(
      <div className='no-active-note'>No Note selected</div>
    )
  }


  return (
    // main dashboard
    <div className='dashboard-main'>
    {/* input-field */}
      <div className='dashboard-main-note-edit'>
        <input type='text' id='title' autoFocus value={activeNote.title}  onChange={(e)=>onEditField("title",e.target.value)} placeholder='Note Title'/>
        <textarea id='body' placeholder='Write your note here...' value={activeNote.body} onChange={(e)=>onEditField("body",e.target.value)}/>
      </div> 

      <div className='dashboard-main-note-preview'>
        <h1 className='preview-title '>{activeNote.title}</h1>
        <div className='markdown-preview'>{activeNote.body}</div>
      </div>


    </div>
  )
}

export default Note
