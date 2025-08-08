import React from 'react'
import lion from './assets/lion.png'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
            <img src={lion} alt="lion"/>
            <h1>Welcome to PremStats</h1>
            <button>Start now</button>
    </div>
  )
}

export default About