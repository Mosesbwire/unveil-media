import React from 'react'
import './button.css'

type btnProps = React.ComponentProps<'button'> & {
    btnType: 'primary' | 'secondary' | 'outline'
}
const Button = ({children, btnType, ...rest}:btnProps) => {
  return (
    <button {...rest} className={`btn ${btnType}`}>
        <div>
            {children}
        </div>
    </button>
  )
}

export default Button