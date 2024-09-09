
import ClientLogo from '../client-logo/ClientLogo'
import magnus from '../../assets/logos/magnus-logo.png'
import kenswedOrg from '../../assets/logos/kenswed-org-logo.png'
import dianiOceanView from '../../assets/logos/diani-ocean-view-clinic.png'
import haftStudio from '../../assets/logos/haft-studio-logo.png'
import nimaCollege from '../../assets/logos/nima-college-logo.png'
import kenswedVoc from '../../assets/logos/kenswed vocational logo.png'

import './logomarquee.css'
const LogoMarquee = () => {
  return (
    <div className='marquee'>
        <ClientLogo url={magnus} altTxt='magnus bull ventures logo'/>
        <ClientLogo url={kenswedOrg} altTxt='kenswed organisation logo'/>
        <ClientLogo url={dianiOceanView} altTxt='diani ocean view medical clinic logo'/>
        <ClientLogo url={haftStudio} altTxt='Haft studios logo'/>
        <ClientLogo url={nimaCollege} altTxt='nima college logo'/>
        <ClientLogo url={kenswedVoc} altTxt='kenswed vocational and training logo'/>
    </div>
  )
}

export default LogoMarquee