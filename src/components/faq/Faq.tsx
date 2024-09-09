import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './faq.css'
const Faq = () => {
    const [showAnswer, setShowAnswer] = useState(false)
    const displayAnswer = () => {
        setShowAnswer(!showAnswer)
    }
  return (
    <div className='faq-component'>
        <div className="">
            <div className="faq-question" onClick={displayAnswer}>
                <div className="question">
                    <p className='text text-md'>How much do you charge for printing</p>
                </div>
                <div className="ic-more">
                    <FontAwesomeIcon icon={faAngleDown}/>
                </div>
            </div>
            
            <div className={`faq-answer ${showAnswer ? 'open-answer': ''}`}>
                
                <p className='text text-md container'>Our printing costs vary depending on the size, material, quantity, and type of project. For a more accurate estimate, we recommend getting a free quote through our online calculator or contacting our team with your specific requirements.</p>
            </div>
        </div>
    </div>
  )
}

export default Faq