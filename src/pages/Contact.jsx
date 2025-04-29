import React,{useState} from 'react'
import Popup from './Popup'

const Contact = () => {
  const [popup,setPopUp]=useState(false)

  const handleClick=(e)=>{
    e.preventDefault();

    const form=e.target;
    if (form.checkValidity()){
      setPopUp(true);
      form.reset()
    }

  }


  return (
    <div className='contact-main'>
        <div className='contact-container'>
        <form action=" " className='contact-left' onSubmit={handleClick}>
          <p>How we can help you?</p>
          
          <h1>Contact Us</h1>

          <p>We’re here to help and answer any questions you might have. We look forward to hearing from you!</p>
          
          <input className='form-control' type="text" required autoComplete='off' placeholder='Enter your name' name='username'></input>
          <input className='form-control' type="email" required autoComplete='off' placeholder='Enter your email' name='email'></input>
          <textarea className='form-control-text' rows='10' required autoComplete='off' placeholder='Enter your message' name='message'></textarea>
          <button type='submit' className='contact-button'>Send</button>
          <Popup popup={popup} onClose={()=>setPopUp(false)}>
            <h2>Thanks for submitting!</h2>
            <p>your message has been sent!</p>
          </Popup>
        </form>
        <img src="/Images/hello.webp" className='contact-img'></img>
        </div>
    </div>
  )
}

export default Contact