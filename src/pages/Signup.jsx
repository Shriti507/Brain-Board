import React,{useEffect,useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import Login from './Login'

const Signup = () => {
  const [animationData, setAnimationData] = useState(null)
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error, setError]=useState("")
  const navigate=useNavigate()


  const handleSubmit=(e)=>{
    e.preventDefault()

  if (!email){
    setError('Please enter either email');
    return 
  }
  else if(!password){
    setError('Please enter your password')
    return 

  }
  else if(!firstName){
    setError('Please enter your first name')
    return 

  }
  else if(!lastName){
    setError('Please enter your last name')
    return

  }
  setError("")
  navigate('/noteslist')
}

  useEffect(() => {
    fetch('/Images/login.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => {
        console.error('Error loading Lottie animation:', error)
      })
  }, [])
  return (
    <div className='signup-container'>


      <div className='signup-image'>
      {animationData ? (
            <Lottie animationData={animationData} className='login-banner-image' />
          ) : (
            <div>Loading Animation...</div>
          )}
      </div>


      <div className='signup-content'>
        <h1>Welcome to Brain Board</h1>
        <p>Sign up and start taking notes.</p>

       
        
       

        <div className='signup-form'>
          <form action='' onSubmit={handleSubmit}>
            <div className="name-fields">
              <input type='text' placeholder='First Name' required autoComplete='off'  value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
              <input type='text' placeholder='Last Name' required autoComplete='off' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </div>

            <input type='text' placeholder='Email' required autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder='Enter your password' required autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <label htmlFor='remember-me'>
              <input type='checkbox' id='remember-me' required/>
                 I agree to Terms & Conditions
            </label>
            {/* <button><NavLink to='/notes'>Create account</NavLink></button> */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type='submit' >Create account</button>
          </form>
         
        </div>

        <div className="hr-or-container">
          <hr />
          <span>or</span>
          <hr />
        </div>
     
          <div className="oauth-btn">
          <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" />
          Continue with Google
        </div>
        <div className="oauth-btn">
          <img src="https://img.icons8.com/ios-filled/24/000000/mac-os.png" alt="Apple" />
          Continue with Apple
        </div>
        <p>Already have an account? <NavLink to="/login">Log in</NavLink></p>
        </div>
        
      </div>

      

    
  )
}

export default Signup
