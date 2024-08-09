import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './button.css'

type btnProps = React.ComponentProps<'button'> & {
    btnType: string
}
const Button = ({children, btnType, ...rest}:btnProps) => {
  return (
    <button {...rest} className={`btn ${btnType}`}>
        <div>
            {children}
        </div>
        
        <div className='btn-ic'>
            <FontAwesomeIcon icon={faChevronRight}/>
        </div>
    </button>
  )
}

export default Button