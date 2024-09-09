import React, {useState, useRef} from 'react'
import Button from '../button/Button'
import Navigation from '../navigation/Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import unveil_logo from '../../assets/logos/unveil-logo.png'
import './header.css'


const Header = () => {
  const [isOpen, openMenu] = useState<boolean>(true)
  const menuRef = useRef<HTMLDivElement>(null)

  const openMenuHandler = () => {
    if (menuRef.current){
      isOpen ? menuRef.current.style.left = '100%' : menuRef.current.style.left = '30%'

      openMenu(!isOpen)
      
    }
  }
  
  return (
    <div className='header'>
      <div className='header-wrapper'>
        <div className="logo container">
          <img className="logo-img" src={unveil_logo} alt="unveil logo"/>
        </div>
        <div className="navigation">
          <div className="menu-bar" onClick={openMenuHandler}>
            <FontAwesomeIcon icon={faBars}/>
          </div>
          <div ref={menuRef}>
            <Navigation toggleMenuHandler={openMenuHandler}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header