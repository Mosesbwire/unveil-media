import React from 'react'
import ServiceIcon from '../serviceIcon/ServiceIcon'
import billboardIcon from '../../assets/icons/billboard.png'
import threeDsignIcon from '../../assets/icons/signage-3d.png'
import printingIcon from '../../assets/icons/printing.png'
import brandingIcon from '../../assets/icons/branding.png'
import bannerIcon from '../../assets/icons/teardrop-banner.png'
import streetPoleIcon from '../../assets/icons/street pole-ad.png'
import signageIcon from '../../assets/icons/sign-post.png'
import './servicegrid.css'


const ServiceGrid = () => {
  return (
    <div className='service-grid'>
        <ServiceIcon url={billboardIcon} service='Billboards'/>
        <ServiceIcon url={threeDsignIcon} service='3D signs'/>
        <ServiceIcon url={printingIcon} service='Printing'/>
        <ServiceIcon url={brandingIcon} service='Branding'/>
        <ServiceIcon url={bannerIcon} service='Banners'/>
        <ServiceIcon url={streetPoleIcon} service='Street Ads'/>
        <ServiceIcon url={signageIcon} service='Signage'/>
    </div>
  )
}

export default ServiceGrid