import {useEffect, useRef, useState} from 'react'
import {v4 as uuid } from 'uuid'
import Review from './Review'
import './client-review.css'


const reviews = [
  {review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam, saepe nobis qui voluptas natus excepturi blanditiis vero deserunt necessitatibus!',
    reviewer: 'Person A',
    company: 'Lorem Enterprise',
    position: 'C.E.O',
    key: uuid()
  },
  {review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam, saepe nobis qui voluptas natus excepturi blanditiis vero deserunt necessitatibus!',
    reviewer: 'Owner Owner',
    company: 'Lorem Inc.',
    position: 'Human Resource',
    key: uuid()
  },
  {review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam, saepe nobis qui voluptas natus excepturi blanditiis vero deserunt necessitatibus!',
    reviewer: 'Person A',
    company: 'ABC Enterprises',
    position: 'C.F.O',
    key: uuid()
  },
  {review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam, saepe nobis qui voluptas natus excepturi blanditiis vero deserunt necessitatibus!',
    reviewer: 'Anonymous',
    company: 'Anon',
    position: 'C.E.O',
    key: uuid()
  }
  
]
const ClientReview = () => {
  const [scrollDist, setScrollDist] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [scrollData, setScrollData] = useState(reviews)
  console.log(scrollDist)
  useEffect(()=>{
    if (window.window.innerWidth < 1280){

      let maxThreshold = 1002
      let threshold = maxThreshold
      const interval = setInterval(()=>{
        
        if (sliderRef.current){
          const slider = sliderRef.current
          const width = slider.firstElementChild?.clientWidth
          
          setScrollDist(prev => {
            // @ts-ignore
            const newDist = prev + width
            if (newDist >= threshold){
              const data = scrollData.map(dt => {
                return {...dt,key: uuid()}
              })
              setScrollData(prev => [...prev, ...data])
              threshold += maxThreshold
              
            }
            slider.style.transform = `translateX(${-newDist}px)`
            return newDist
          })
        }
      }, 5000);
      return ()=> clearInterval(interval)
    }
  }, [window.window.innerWidth])
  return (
    <div className='container'>
        <div>
            <h1 className='heading heading-md client-review-heading'>What our clients say</h1>
            <div className='client-review-slider'>
                <div ref={sliderRef} className='slider-wrapper'>
                  {scrollData.map(review => (
                    <div key={review.key}>
                      <Review company={review.company} position={review.position} review={review.review} reviewer={review.reviewer}/>
                    </div>
                  ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientReview