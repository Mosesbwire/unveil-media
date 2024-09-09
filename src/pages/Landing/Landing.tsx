import React from 'react'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import LogoMarquee from '../../components/logoMarquee/LogoMarquee'
import ServiceGrid from '../../components/serviceGrid/ServiceGrid'
import Service from '../../components/service/Service'
import ServiceImg from '../../components/serviceImg/ServiceImg'
import PortfolioItem from '../../components/portfolioItem/PortfolioItem'
import ClientReview from '../../components/clientReview/ClientReview'
import Faq from '../../components/faq/Faq'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons/faFaceSmileWink'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'


import backgroundImg from '../../assets/img/colored-bg.svg'
import faqSmall from '../../assets/img/faq-mobile.svg'
import faqBig from '../../assets/img/faq-desktop.svg'
import priceQuoteReceipt from '../../assets/img/price-quotation.png'
import phone from '../../assets/img/phone.svg'
import email from '../../assets/img/email.svg'
import whatsapp from '../../assets/img/whatsapp.svg'
import semiCircle from '../../assets/img/semi-a.svg'

import { services, portfolio } from './data'
import './landing.css'
import BrandingSvg from '../../components/serviceImg/svgComponents/BrandingSvg'


const Landing = () => {
  return (
    <div>
        <div className="hero-section" id='home'>
          <Header/>
          <Hero/>
        </div>
        <div className='container logo-marquee-section'>
          <LogoMarquee/>
        </div>
        <div className='service-section' id='service'>
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
                    <div key={serv.serviceType} className={`lefties`}>
                      <Service icon={serv.icon} serviceType={serv.serviceType} heading={serv.heading} subHeadline={serv.subHeadline}>
                        <ServiceImg SvgComponent={serv.svgComponent} img={serv.img}/>
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
        
        <div className='portfolio' id='portfolio'>
                
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
          <ClientReview/>
        </div>
        <div className="faq">
          <div className="faq-header">
              <div className="faq-mark">
                   <picture className='qmark-pic'>
                    <source
                      srcSet={faqBig} 
                      media='(min-width: 980px)'
                    />
                    <source 
                      srcSet={faqSmall}
                    />
                    <img src={faqSmall} alt="" />
                   </picture>
              </div>
            <div className="faq-intro container">
              <h2 className='heading heading-md'>FAQ</h2>
              <div className='faq-intro-text'>
                <p className='text text-md'>Whether you're curious about our process, pricing or specific offerings, we've got you covered.</p>
              </div>
            </div>
          </div>
            <div className='faqs-container'>
                <div className='container'>
                  <div className='faq-container'>
                    <p className='text text-lg'>Printing</p>
                    <Faq/>
                    <Faq/>
                    <Faq/>
                    <Faq/>
                    <Faq/>
                  </div>
                  <div className='faq-container'>
                    <p className='text text-lg'>Billboards</p>
                    <Faq/>
                    <Faq/>
                    <Faq/>
                    <Faq/>
                    <Faq/>
                  </div>
                  <div className='faq-container'>
                    <p className='text text-lg'>Branding</p>
                    <Faq/>
                    <Faq/>
                    <Faq/>
                    <Faq/>
                    <Faq/>
                  </div>
                </div>
            </div>
            <div className='faq-cta' id='contact'>
                <div className='faq-cta-wrapper'>
                    <p className='text text-lg'>Couldn't find the answer you were looking for?</p>
                    <p className='text text-md'>Send us an email, message us on whatsapp or call us and we will get back to you as soon as we can.</p>
                    <div className='faq-cta__cta__wrapper'>
                      <div className='faq-cta__cta'>
                        <img src={phone} alt="" />
                        <p className='text text-md'>0700666900</p>
                      </div>
                      <div className='faq-cta__cta'>
                        <img src={email} alt="" />
                        <p className='text text-md'>hello@unveilmedia.com</p>
                      </div>
                      <div className='faq-cta__cta'>
                        <img src={whatsapp} alt="" />
                        <p className='text text-md'>0700666900</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
          <div className="footer-wrapper container">
            <div className="explore">
              <h3 className='text text-lg footer-title'>Explore</h3>
              <p className='text text-md'>Home</p>
              <p className='text text-md'>Services</p>
              <p className='text text-md'>Portfolio</p>
              <p className='text text-md'>Quote Generator</p>
            </div>
            <div className="contacts">
              <p className='text text-lg footer-title'>Contacts</p>
              <p className='text text-md'>+2547600900900</p>
              <p className='text text-md'>hello@unveilmedia.com</p>
            </div>
          </div>
          <div className='copyright'>
            <p className='text text-sm'><span><FontAwesomeIcon icon={faCopyright}/></span> 2024 Unveil Media.All rights Reserved.</p>
            
          </div>
        </div>
    </div>
  )
}

export default Landing