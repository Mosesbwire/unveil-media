
import Button from '../button/Button'
import hero_img from '../../assets/img/planet-services.svg'
import './hero.css'



const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            <div className="headline">
                <h1 className='heading heading-lg'>Be <span>seen.</span></h1>
                <h1 className='heading heading-lg'>Be <span>remembered.</span></h1>
                <h1 className='heading heading-lg'>Be <span>unforgettable.</span></h1>
            </div>
            <div className="subheadline">
                <p className='text text-md'>From billboards to street poles, branding to point of sale advertising to signage, <span>we make your business stand out</span> thanks to a winning combination: State of the art printers, great graphic designers, and great work people.</p>
            </div>
            <div className='hero-cta'>
                <Button btnType='primary'>
                    Explore our services
                </Button>
            </div>
        </div>
        <div className='hero-img'>
            <img src={hero_img} alt="services offered represented as planets" />
        </div>
    </div>
  )
}

export default Hero