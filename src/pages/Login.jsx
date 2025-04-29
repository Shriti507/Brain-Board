import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom'

const Login = () => {
  const [email,setEmail]=useState("")
  const [error,setError]=useState("")
  const navigate = useNavigate();

  

  const handleSubmit=(e)=>{
    e.preventDefault()

  if (!email){
    setError('Please enter either email or username.');
    return 
  }
  setError("")
  navigate('/noteslist')
}


  return (
    <div className="login-body">
      <div className="login-container">
        <img 
          src="/Images/logo.png" 
          alt="Brain Board Logo" 
          className="login-logo" 
        />
        <h2>Sign in</h2>
        <p className="subtext">to continue to your Brain Board account.</p>
        

        <form onSubmit={handleSubmit}>
        <input  
            type="text" 
            placeholder="Email address or Username" 
            required 
            autoComplete='off' 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
        
        />
        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="btn">Continue</button>
        </form>
        


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

        <div className="footer">
          <p>Don’t have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login


         


       
