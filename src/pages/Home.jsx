import React, { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [animationData, setAnimationData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/Images/Notes.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => {
        console.error('Error loading Lottie animation:', error)
      })
  }, [])

  return (
    <main className="intro-section">
      <div className="container-grid ">
        <div className="intro-text">
          <h1 className="heading">
            Think it.
            Write it.
            Read it.
          </h1>
          <p className="paragraph">
            Brain Board offers a beautifully designed interface that makes note-taking a delightful experience. Customize your notes and unleash your creativity.
          </p>
          <button className="log-in-button" onClick={() => navigate('/signup')}>Get Brain-Board free</button>
        </div>
        <div className="intro-image">
          {animationData ? (
            <Lottie animationData={animationData} className='banner-image' />
          ) : (
            <div>Loading Animation...</div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Home
