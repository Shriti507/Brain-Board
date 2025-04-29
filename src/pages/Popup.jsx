import React from 'react'


const Popup = ({popup,onClose,children}) => {

  if (popup===false){
    return null;

  }
  return (
    
    <div className="popup">
      <div className="popup-inner  ">
        {children}
        <button className="popupClose contact-button" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Popup

