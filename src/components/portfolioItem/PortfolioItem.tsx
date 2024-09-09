import React from 'react'
import './portfolio-item.css'



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
            <img src={imgUrl} alt="" />
            <p className='text text-md project-title'>{project}</p>
        </div>
        <div className='project-description'>
            <p className='text text-md'>{description}</p>
        </div>
    </div>
  )
}

export default PortfolioItem