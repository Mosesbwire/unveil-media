import React from 'react'
import billboardIcon from '../../assets/icons/billboard.png'
import signageIcon from '../../assets/icons/signage-3d.png'
import brandingIcon from '../../assets/icons/branding.png'
import printingIcon from '../../assets/icons/printing.png'
import portfolioImg from '../../assets/img/feather-banner.png'
import StreetPoleSvg from '../../components/serviceImg/svgComponents/StreetPoleSvg'
import BrandingSvg from '../../components/serviceImg/svgComponents/BrandingSvg'
import SignageSvg from '../../components/serviceImg/svgComponents/SignageSvg'
import PrintingSvg from '../../components/serviceImg/svgComponents/PrintingSvg'
import streetPoleImg from '../../assets/img/street-pole-2 1.jpg'
import featherBannerImg from '../../assets/img/feather-banner.png'
import billBoardImg from '../../assets/img/billboard.png'

import lobbySignImg from '../../assets/img/lobby-sign-1.jpg'
import beachHotelSign from '../../assets/img/sign-beach.jpg'
import lobbySignImg_b from '../../assets/img/office-lobb1.png'

import brandedClinic from '../../assets/img/clinic-branded.jpg'
import brandedShop from '../../assets/img/shop-branding-1.jpg'
import brandedShop_b from '../../assets/img/shop-front-3.png'

import printer from '../../assets/img/printing.jpg'
import brochures from '../../assets/img/brochure.png'
import bannerPrinted from '../../assets/img/banner-print.jpg'
 
type service = {
    icon: string;
    serviceType: string;
    heading: string;
    subHeadline: string;
    svgComponent: React.FC
    img : {
      top: string,
      mid: string,
      bottom: string
    }
  }
export const services: service[] = [
    {
      icon: billboardIcon,
      serviceType: 'Outdoor',
      heading: 'Your Brand, Bigger and Brighter than ever',
      subHeadline: 'Transform public spaces into vibrant marketing platforms for your brand.',
      svgComponent: StreetPoleSvg,
      img: {
        top: streetPoleImg,
        mid: featherBannerImg,
        bottom: billBoardImg
      }
    },
    {
      icon: signageIcon,
      serviceType: 'Signage',
      heading: 'Signs of Success',
      subHeadline: 'Effective signage directs customers and boosts your business visibility, ensuring every opportunity is maximized.',
      svgComponent: SignageSvg,
      img: {
        top: lobbySignImg_b,
        mid: lobbySignImg,
        bottom: beachHotelSign
      }
    },
    {
      icon: brandingIcon,
      serviceType: 'Branding',
      heading: 'Brand Boldy, Brand Beautifully',
      subHeadline: 'Build recognition, enhance trust and differentiate from competitors.',
      svgComponent: BrandingSvg,
      img: {
        top: brandedClinic,
        mid: brandedShop,
        bottom: brandedShop_b
      }
    },
    {
      icon: printingIcon,
      serviceType: 'Printing',
      heading: 'Print big, Print small, Print it all',
      subHeadline: 'From vibrant large-format prints to detailed small-format jobs.',
      svgComponent: PrintingSvg,
      img: {
        top: printer,
        mid: brochures,
        bottom: bannerPrinted
      }
    }]

type portfolioItem = {
    company: string,
    imgUrl: string,
    project: string,
    description: string
}

export const portfolio: portfolioItem[] = [
    {
        company: 'magnus bull venture',
        imgUrl: portfolioImg,
        project: 'billboard',
        description: 'For this project we helped in  the concept generation of the 3D bottle idea, carried out the printing of all artwork. The billboard has night illumination to ensure it’s maximum visibility even after dark.'
    },
    {
      company: 'emabassy church',
      imgUrl: portfolioImg,
      project: 'street poles',
      description: 'We provided the complete outdoor advertising solution from printing the artwork to renting out the street poles. Located on the main road leading to Ngong town offering maximum visibility to pedestrians and drivers.'
  },
  {
    company: 'diani clinic',
    imgUrl: portfolioImg,
    project: 'branding',
    description: 'Enhanced visibility and professional image of the clinic. The window graphics not only improve the aesthetics but also provide information to the public.'
  },
  {
        company: 'swahili beach',
        imgUrl: portfolioImg,
        project: 'signage',
        description: 'We crafted stunning outdoor acrylic signs for the client, providing a vibrant and professional look that perfectly complements the venue\'s aesthetic. Acrylic signs are excellent for a sophisticated look. They are 100% customizable and one of the best ways to showcase your logo or brand.'
  }
]
  

