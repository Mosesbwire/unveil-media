import React from 'react'
import Button from '../../components/button/Button'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import LogoMarquee from '../../components/logoMarquee/LogoMarquee'
import ServiceGrid from '../../components/serviceGrid/ServiceGrid'
import Service from '../../components/service/Service'
import ServiceImg from '../../components/serviceImg/ServiceImg'
import billboardIcon from '../../assets/icons/billboard.png'
import signageIcon from '../../assets/icons/signage-3d.png'
import brandingIcon from '../../assets/icons/branding.png'
import printingIcon from '../../assets/icons/printing.png'
import backgroundImg from '../../assets/img/colored-bg.svg'
import priceQuoteReceipt from '../../assets/img/price-quotation.png'
import './landing.css'

type service = {
  icon: string;
  serviceType: string;
  heading: string;
  subHeadline: string;
}
const serv: service = {
  icon: billboardIcon,
  serviceType: 'Outdoor',
  heading: 'Your Brand, Bigger and Brighter than ever',
  subHeadline: 'Transform public spaces into vibrant marketing platforms for your brand.'
}
const services: service[] = [
  {
    icon: billboardIcon,
    serviceType: 'Outdoor',
    heading: 'Your Brand, Bigger and Brighter than ever',
    subHeadline: 'Transform public spaces into vibrant marketing platforms for your brand.'
  },
  {
    icon: signageIcon,
    serviceType: 'Signage',
    heading: 'Signs of Success',
    subHeadline: 'Effective signage directs customers and boosts your business visibility, ensuring every opportunity is maximized.'
  },
  {
    icon: brandingIcon,
    serviceType: 'Branding',
    heading: 'Brand Boldy, Brand Beautifully',
    subHeadline: 'Build recognition, enhance trust and differentiate from competitors.'
  },
  {
    icon: printingIcon,
    serviceType: 'Printing',
    heading: 'Print big, Print small, Print it all',
    subHeadline: 'From vibrant large-format prints to detailed small-format jobs.'
  }]

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
    </div>
  )
}

export default Landing