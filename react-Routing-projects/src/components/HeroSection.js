import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button className = 'btns' buttonStyle ='btn--outline' buttonSize='btn--large'>
            GET STARTED
        </Button>
        <Button className = 'btns' buttonStyle ='btn--primary' buttonSize='btn--large'>
            WATCH TRAILER <FontAwesomeIcon className='faCirclePlay' icon={faCirclePlay}/>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
