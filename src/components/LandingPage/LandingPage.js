import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'


export default class LandingPage extends React.Component {
  render() {
    return (
      <div className='pet-image'>
        <div className='petful-title'>
          <h1>Cats And Dogs 2U</h1>
          <p>We are a shelter for dogs and cats that need a forever home with lots of love. Our shelter space is very small so we only have 2 animals 
            available at a time. If you join the process you will be added to the waitlist. When your name comes up you can adopt a cat, or a dog </p>
          <Link to ='/adopt'><button className='startButton'>START</button></Link>
        </div>

      </div>
    )
  }
}