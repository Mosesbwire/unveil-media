
import './client-logo.css'

type imgLogoUrl = {
    url: string
    altTxt: string
}

const ClientLogo = ({url, altTxt}:imgLogoUrl) => {
  return (
    <div className='client_logo'>
        <img src={url} alt={altTxt} />
    </div>
  )
}

export default ClientLogo