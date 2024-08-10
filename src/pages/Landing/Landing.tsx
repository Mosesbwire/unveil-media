import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import LogoMarquee from '../../components/logoMarquee/LogoMarquee'
import './landing.css'
const Landing = () => {
  return (
    <div>
        <div className="hero-section">
          <Header/>
          <Hero/>
        </div>
        <div className='container logo-marquee-section'>
          <LogoMarquee/>
        </div>
    </div>
  )
}

export default Landing