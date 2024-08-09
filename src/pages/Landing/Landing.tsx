import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import './landing.css'
const Landing = () => {
  return (
    <div>
        <div className="hero-section">
          <Header/>
          <Hero/>
        </div>
    </div>
  )
}

export default Landing