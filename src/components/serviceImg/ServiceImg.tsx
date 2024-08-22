import React, {useRef} from 'react'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './service-img.css'
import streetPole from '../../assets/img/street-pole-2 1.jpg'
import billBoard from '../../assets/img/billboard.png'
import banner from '../../assets/img/feather-banner.png'
// scroll triggered animation sequence
const ServiceImg = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
    
    const svgRef = useRef<HTMLDivElement>(null)
    const tl = useRef<GSAPTimeline>()
    const imgTl = useRef<GSAPTimeline>()
    useGSAP(()=> {
  
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '.img_wrapper',
          start: 'top 50%',
          // markers: true,
        }
      })

      tl.current.to('.box', {
        strokeDashoffset: 0,
        duration: 1.5,
        ease:'power4.out'
      }).
      to('.inner-box', {
        strokeDashoffset: 0,
        duration: 1.5,
        ease:'power4.out'

      }, "<+=30%").
      to('.img-a', {
        opacity: 1,
        duration: 1.5
      }, "<+=40%").
      to('.box', {
        opacity: 0,
        duration: 1.5
      }, "<").
      to('.inner-box',{
        opacity: 0,
        duration: 1
      }, "<").
      to('.img_wrapper', {
        height: '100%',
        width: '100%',
        duration: .5
      }, "<").add(gsap.timeline({
        repeat: -1,
        delay: 3,
        defaults: {duration: 6}
      }).to('.img-a', {
        opacity: 0
      }).
      to('.img-b',{
        opacity: 1,
        ease:'expo.inOut'
      }, "-=4").
      to('.img-b', {
        opacity: 0
      }).
      to('.img-c', {
        opacity: 1,
        ease: 'expo.inOut'
      }, "-=4").
      to('.img-c', {
        opacity:0
      }).
      to('.img-a', {
        opacity: 1,
        ease: 'expo.inOut'
      }, "-=4"), ">")
      

    }, {scope: svgRef})
    ScrollTrigger.refresh()
  return (
    <div className='service_img'>
        <div className='service_img_container' ref={svgRef}>
          <div className="img_wrapper">
            <svg width="1945" height="1854" viewBox="0 0 1945 1854" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M1021.5 1843.5L1048.5 265H1128.5L1147.5 1843.5H1021.5ZM945 653.5H1316.5V1343.5H853V653.5H945Z" stroke="red" strokeWidth="20" className='inner-box'/>
              <path d="M10 927V10H1929V927" stroke="blue" strokeWidth="20" className='box'/>
              <path d="M10 927V1843.5H1934.5V927" stroke="green" strokeWidth="20" className='box'/>
            </svg>
            <img src={streetPole} alt="" className='img-a img_img'/>
            <img src={billBoard} alt="" className='img-b img_img'/>
            <img src={banner} alt="" className='img-c img_img'/>
          </div>
        </div>
    </div>
  )
}

export default ServiceImg