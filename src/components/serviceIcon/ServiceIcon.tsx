import React from 'react'

import './serviceicon.css'

type serviceIconProps = {
    url: string,
    service: string,
}

const ServiceIcon = ({url, service}: serviceIconProps) => {
  return (
    <div className='service-icon-card'>
        <img src={url} alt=''/>
        <p className='text text-sm'>{service}</p>
    </div>
  )
}

export default ServiceIcon