import React from 'react'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import LogoMarquee from '../../components/logoMarquee/LogoMarquee'
import ServiceGrid from '../../components/serviceGrid/ServiceGrid'
import Service from '../../components/service/Service'
import ServiceImg from '../../components/serviceImg/ServiceImg'
import PortfolioItem from '../../components/portfolioItem/PortfolioItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons/faFaceSmileWink'

import backgroundImg from '../../assets/img/colored-bg.svg'
import priceQuoteReceipt from '../../assets/img/price-quotation.png'

import { services, portfolio } from './data'
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
        <div className='service-section'>
            <div className="service-section-wrapper container">
              <div className='service-section-intro'>
                <div className='service-section-heading'>
                  <p className='text service-heading-a'>Services</p>
                  <h1 className='heading heading-md'>Intergrated brand visibility solutions</h1>
                  <p className='text text-md'>A world where your brand message seamlessly flows from towering billboards, to eye-catching signage and impecabbly printed materials. Use Unveil media for a stramlined workflow, cost-effectiveness and brand constistency across every touchpoint.</p>
                </div>
                <div>
                    <ServiceGrid/>
                </div>
              </div>
              <div className='services'>
                {services.map(serv => (
                  <div key={serv.serviceType}>
                    <Service icon={serv.icon} serviceType={serv.serviceType} heading={serv.heading} subHeadline={serv.subHeadline}>
                      <ServiceImg/>
                    </Service>
                  </div>
                ))}
              </div>
            </div>
        </div>
        <div className="banner-section">
          <div className='banner-section_wrapper container'>
            <p className='heading heading-sm banner-section_heading'>Get your free quote now!</p>
            <p className='banner-section_txt'>Use our free quote generator to get a free quote.</p>
            <p className='banner-section_txt'>No sign up required. No hidden fees.</p>
            <Button btnType={'secondary'}>Generate</Button>
          </div>
          <div className='banner-img'>
              <img src={backgroundImg} alt=""/>
          </div>
          <div className="quote-price_img">
                <img src={priceQuoteReceipt} alt=""/>
          </div>
        </div>
        
        <div className='portfolio'>
                <div className='container'>
                  <div className='portfolio-intro'>
                    <h2 className='heading heading-md'>From concepts to reality</h2>
                    <p className='text text-md text_portfolio-intro'>Welcome to Unveil media, dive into our curated collection of projects showcasing our commitment to execellence and innovation. See how we have brought different brands to life across various mediums-- your brand could be our next success story <span className='emoji'><FontAwesomeIcon icon={faFaceSmileWink}/></span></p>
                  </div>
                  <div className='portfolio-pieces'>
                    {portfolio.map(port => (
                      <div key={port.company} className='portfolio-piece'>
                        <PortfolioItem company={port.company} imgUrl={port.imgUrl} project={port.project} description={port.description}/>
                      </div>
                    ))}
                  </div>
                  <div className="portfolio-cta">
                    <Button btnType={'primary'}>Contact Us</Button>
                  </div>
                </div>
        </div>
        <div className="client-reviews">
          
        </div>
    </div>
  )
}

export default Landing