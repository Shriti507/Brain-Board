import React from 'react'
import {  MdSearch} from "react-icons/md";

const Search = ({handleSearchNote }) => {
  return (
    <div className="search">
        <MdSearch className="search-icon" size='1.3em'></MdSearch>
        <input className="search-input" onChange={(e)=>handleSearchNote(e.target.value)} type='text' placeholder='Search'></input> 
    </div>
  )
}

export default Search

