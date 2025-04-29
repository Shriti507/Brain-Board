import React, { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import { MdNoteAdd} from "react-icons/md";
import { RiStickyNoteAddFill } from "react-icons/ri";
import Search from '../Component/UI/Search';
import { useNavigate } from 'react-router-dom';


const Sidebar = ({setSearchText}) => {
  const [animationData, setAnimationData] = useState(null)

  const navigate=useNavigate()
  

  useEffect(() => {
    fetch('/Images/sidebar.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => {
        console.error('Error loading Lottie animation:', error)
      })
  }, [])

  const handleClick=()=>{
    navigate("/signup")
  }

  return (
    <div>
      <aside className='sidebar'>
        <h1>Brain Board</h1>
        
        {/* <input type='text' placeholder='Search'></input> */}
        <Search handleSearchNote={setSearchText}/>
        <h3><MdNoteAdd />Add New</h3>
        <h3><RiStickyNoteAddFill />Task</h3>

        <div>
          <p>Want to access unlimited notes taking experience & lot's of feature?</p>
          <div className="sidebar-image">
            {animationData ? (
              <Lottie animationData={animationData} className='sidebar-banner-image' />
            ) : (<div>Loading Animation...</div>)}
          </div>
        </div>
        <button>Upgrade pro</button>
        <button type='submit' onClick={handleClick}>Logout</button>
      </aside> 
    </div>
  )
}

export default Sidebar



