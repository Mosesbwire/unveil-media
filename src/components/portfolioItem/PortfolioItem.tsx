import React from 'react'
import './portfolio-item.css'
import tuskerImgM from '../../assets/img/tusker-billboard-mobile.jpg'
import tuskerImgD from '../../assets/img/tusker-billboard-desktop.jpg'

type portfolioItemProps = {
    company: string,
    imgUrl: string,
    project: string,
    description: string
}
const PortfolioItem = ({company, imgUrl, project, description}:portfolioItemProps) => {
  return (
    <div className='project-item'>
        <div className='project-img'>
            <img src={tuskerImgD} alt="" />
            <p className='text text-md project-title'>{project}</p>
        </div>
        <div className='project-description'>
            <p className='text text-md'>{description}</p>
        </div>
    </div>
  )
}

export default PortfolioItem