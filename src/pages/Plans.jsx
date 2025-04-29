import React from 'react'

const Plans = () => {
  return (
    <div className='plan-container'>
      <div className='plan-header'>
        <h1 id='plan'>Pricing Plans</h1>
        <p id='plan-para'>Choose the perfect plan to enhance your note-taking experience</p>
      </div>
      
      <div className='plan-content'>
        <div id='plan-one'>
          <h1>Free Plan</h1>
          <p>Ideal for casual users and students</p>
          <hr/>
          <h3>$0/month</h3>
          <button type='submit'>Select Free Plan</button>
        </div>


        <div id='plan-two'>
          <h1>Pro Plan</h1>
          <p>Perfect for professionals seeking advanced features</p>
          <hr/>
          <h3>$9.99/month</h3>
          <button type='submit'>Select Pro Plan</button>
        </div>


        <div id='plan-three'>
          <h1>Team Plan</h1>
          <p>Designed for teams needing collaboration tools</p>
          <hr/>
          <h3>$29.99/month</h3>
          <button type='submit'>Inquire About Team Plan</button>
        </div>
      </div>
    </div>
  )
}

export default Plans