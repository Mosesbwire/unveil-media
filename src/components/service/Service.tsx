import React from 'react'
import Button from '../button/Button'
import './service.css'


type serviceProps = React.ComponentProps<'div'> & {
    icon: string,
    serviceType: string,
    heading: string,
    subHeadline: string
}
const Service = ({children,icon, serviceType, heading, subHeadline,...rest}: serviceProps) => {
  return (
    <div {...rest} className='company-services'>
        <div className=''>
            <div className="service-heading">
                <img src={icon} alt="" />
                <p className='text text-lg text-600'>{serviceType}</p>
            </div>
            <h1 className='heading heading-sm service-heading__h1'>{heading}</h1>
            <p className='text text-md service-heading__sub'>{subHeadline}</p>
            <Button btnType="primary">Get qoute</Button>
        </div>
        <div className='service_img_wrapper'>
          {children}
        </div>
    </div>
  )
}

export default Service