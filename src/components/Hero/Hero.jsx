import { ImageLists } from "../../data";
import Slider from "react-slick";
const SlickSlider = Slider?.default || Slider;
import PropTypes from 'prop-types'

const Hero = ({handlePopup})=>{
  var settings ={
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 400,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseFocus: true
  }

  return(
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-950 flex justify-center items-center text-white">
      <div className="h-[700px] w-[700px] bg-primary/40 rotate-45 -top-1/2 right-0 rounded-3xl absolute -z-9"></div>
      <div className="container pb-8 sm:pb-0">
        <SlickSlider {...settings}>
          { ImageLists.map((item)=>(
            <div key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-yellow-400 font-bold text-xl lg:text-4xl">
                    {item.title}
                  </h1>
                  <p className="font-semibold lg:text-2xl mb-2 lg:mb-3">
                    {item.description}
                  </p>
                  <div>
                    <button onClick={handlePopup} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full cursor-pointer">
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="order-2 sm:order-1">
                  <div className="relative z-10">
                    <img src={item.img} alt="Images" className="w-[300px] h-[300px] sm:w-[450px] sm:scale-125 object-contain mx-auto lg:scale-120"/>
                  </div>
                </div>
              </div>
            </div>
          ))
          }
        </SlickSlider>
      </div>
    </div>
  )
}
Hero.propTypes = {
  handlePopup: PropTypes.func
}
export default Hero