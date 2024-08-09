import React from 'react'
import Button from '../button/Button'
import ic_close from '../../assets/icons/close.svg'
import ic_portfolio from '../../assets/icons/portfolio.svg'
import ic_home from '../../assets/icons/home.svg'
import ic_service from '../../assets/icons/design services.svg'
import ic_phone from '../../assets/icons/phone.svg'
import './navigation.css'

type navProps = React.ComponentProps<'div'> & {
    toggleMenuHandler: ()=> void
}

const Navigation = ({children, toggleMenuHandler, ...rest}:navProps) => {
  return (
    <div {...rest} className='nav' >
        <div className="nav-links">
            <div className='nav-link'>
                <img src={ic_home} alt="home icon"/>
                <p className='text text-md'>Home</p>
            </div>
            <div className='nav-link'>
                <img src={ic_service} alt="pen crossing ruler representing service offered"/>
                <p className='text text-md'>Services</p>
            </div>
            <div className='nav-link'>
                <img src={ic_portfolio} alt="briefcase icon represents portfolio"/>
                <p className='text text-md'>Portfolio</p>
            </div>
            <div className='nav-link'>
            <img src={ic_phone} alt="phone icon represents contacts"/>
                <p className='text text-md'>Contacts</p>
            </div>
            <div className='close-btn' onClick={toggleMenuHandler}>
                <img src={ic_close} alt="x -mark represent close btn"/>
            </div>
        </div>

    </div>
  )
}

export default Navigation