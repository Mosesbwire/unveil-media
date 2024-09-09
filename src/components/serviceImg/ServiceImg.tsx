import React, {useRef} from 'react'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './service-img.css'
// scroll triggered animation sequence


type serviceImgProps = {
  SvgComponent: React.FC<any>
  img: {
    top: string,
    mid: string,
    bottom: string
  }
}
const ServiceImg: React.FC<serviceImgProps> = ({SvgComponent, img}) => {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
    
    const svgRef = useRef<HTMLDivElement>(null)
    const tl = useRef<GSAPTimeline>()
    
    useGSAP(()=> {
  
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: `.img_wrapper`,
          start: 'top 50%',
          end: 'bottom center',
          markers: false,
        },
        defaults: {
          duration: 1.5,
          ease: 'power4.out'
        }
      })

      tl.current.to('.border', {
        strokeDashoffset: 0,
        // duration: 1.5,
        // ease:'power4.out'
      }).
      to('.outline', {
        strokeDashoffset: 0,
        // duration: 1.5,
        // ease:'power4.out'

      }, "<+=30%").
      to('.img-a', {
        opacity: 1,
        // duration: 1.5
      }, "<+=80%").
      to('.border', {
        opacity: 0,
        // duration: 1.5
      }, "<").
      to('.outline',{
        opacity: 0,
        // duration: 1
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
            <SvgComponent/>
            <img src={img.top} alt="" className='img-a img_img'/>
            <img src={img.mid} alt="" className='img-b img_img'/>
            <img src={img.bottom} alt="" className='img-c img_img'/>
          </div>
        </div>
    </div>
  )
}

export default ServiceImg