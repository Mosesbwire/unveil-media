import React, { useRef} from 'react'
import Button from '../button/Button'
import ic_close from '../../assets/icons/close.svg'
import ic_portfolio from '../../assets/icons/portfolio.svg'
import ic_home from '../../assets/icons/home.svg'
import ic_service from '../../assets/icons/design services.svg'
import ic_phone from '../../assets/icons/phone.svg'
import './navigation.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

type navProps = React.ComponentProps<'div'> & {
    toggleMenuHandler: ()=> void
}

const Navigation = ({children, toggleMenuHandler, ...rest}:navProps) => {
  gsap.registerPlugin(ScrollToPlugin)

  const nav = useRef<HTMLDivElement>(null)
  
  useGSAP(()=> {
    if (nav.current) {
        
        Array.from(nav.current.children).forEach((child) => {
            const section = child.getAttribute('data-dest')
            if (section){
                child.addEventListener('click', ()=>{
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {y: `#${section}`},
                        ease: 'power1',
                    })
                    const matchMedia = window.matchMedia("(max-width: 60em)").matches
                    if (matchMedia) toggleMenuHandler()
                    
                })
            }
        })
    } 
  })
  return (
    <div {...rest} className='nav' >
        <div className="nav-links" ref={nav}>
            <div className='nav-link' data-dest='home'>
                <img src={ic_home} alt="home icon"/>
                <p className='text text-md'>Home</p>
            </div>
            <div className='nav-link' data-dest='service'>
                <img src={ic_service} alt="pen crossing ruler representing service offered"/>
                <p className='text text-md'>Services</p>
            </div>
            <div className='nav-link' data-dest='portfolio'>
                <img src={ic_portfolio} alt="briefcase icon represents portfolio"/>
                <p className='text text-md'>Portfolio</p>
            </div>
            <div className='nav-link' data-dest='contact'>
            <img src={ic_phone} alt="phone icon represents contacts"/>
                <p className='text text-md'>Contacts</p>
            </div>
            <div className="nav-link">
                <Button btnType='outline'>Quote generator</Button>
            </div>
            <div className='close-btn' onClick={toggleMenuHandler}>
                <img src={ic_close} alt="x -mark represent close btn"/>
            </div>
        </div>

    </div>
  )
}

export default Navigation