import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'

const About = () => {
  const navigate = useNavigate()
  const [welcomeAnimationData, setWelcomeAnimationData] = useState(null)
  const [visionAnimationData, setVisionAnimationData] = useState(null)

  useEffect(() => {
    fetch('/Images/Welcome.json')
      .then((response) => response.json())
      .then((data) => setWelcomeAnimationData(data))
      .catch((error) => {
        console.error('Error loading Welcome Lottie animation:', error)
      })
  }, [])

  useEffect(() => {
    fetch('/Images/vision.json')
      .then((response) => response.json())
      .then((data) => setVisionAnimationData(data))
      .catch((error) => {
        console.error('Error loading Vision Lottie animation:', error)
      })
  }, [])

  return (
    <div className="about-container">
      <div className="about-section about-hero">
        <div className="about-text">
          <h1>Welcome to Brain Board</h1>
          <p>your space for organized thoughts, creative ideas, and everything in between.</p>
        </div>
        <div className="about-image">
          {welcomeAnimationData ? (
            <Lottie animationData={welcomeAnimationData} className="about-banner-image" />
          ) : (
            <div>Loading Welcome Animation...</div>
          )}
        </div>
      </div>

      <div className="about-section">
        <p>At Brain Board, we believe note-taking should be simple, beautiful, and powerful. Whether you're brainstorming your next big idea, keeping track of tasks, or journaling your daily reflections, we designed Brain Board to be the perfect companion for your personal and professional life.</p>
        <p>Over 5 million users trust our app daily to organize their lives. Join a community that values productivity and innovation.</p>
      </div>

      <div className="about-section">
        <h1>Our Mission</h1>
        <p>To make capturing and organizing your thoughts effortless, so you can focus on what matters most.</p>
        <button className="about-btn" onClick={() => navigate('/signup')}>Try</button>
      </div>

      <div className="about-section about-values-container">
       
        <div className="about-section about-values-container">
  <div className="about-values-content">
    <div className="about-image vision-image">
      {visionAnimationData ? (
        <Lottie animationData={visionAnimationData} className="about-banner-image" />
      ) : (
        <div>Loading Vision Animation...</div>
      )}
    </div>

    <div className="about-values-text">
      <h1>Our Values</h1>
      <ul>
        <li><h3>Simplicity:</h3>We strip away the clutter to bring you a clean, distraction-free experience.</li>
        <li><h3>Flexibility:</h3>Your notes, your way. Organize, tag, and customize to fit your workflow.</li>
        <li><h3>Privacy:</h3>Your notes are yours alone. We respect your privacy and safeguard your data.</li>
      </ul>
    </div>
  </div>
</div>

      </div>

      <div className="about-section">
        <h1>Looking Ahead</h1>
        <p>We're constantly improving Brain Board, listening to our users, and imagining new ways to make note-taking even better. We're just getting started — and we're so excited to have you along for the journey.</p>
        <p id="about-para">Thank you for choosing Brain Board. Let's build something amazing together.</p>
      </div>
    </div>
  )
}

export default About
