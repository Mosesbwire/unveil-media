
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

type reviewDataprop = {
  review: string,
  reviewer: string,
  company: string,
  position: string
}
const Review = ({review, reviewer, company, position}: reviewDataprop) => {
  return (
    <div>
        <p className='text text-md'><span><FontAwesomeIcon icon={faQuoteLeft}/></span> {review}. <span><FontAwesomeIcon icon={faQuoteRight}/></span></p>
        <p className='text text-md'>{reviewer}</p>
        <p className='text text-md'>{position}, {company}</p>
    </div>
  )
}

export default Review