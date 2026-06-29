import {TestimonialData} from '../../data'

import Slider from "react-slick"

const SlickSlider = Slider?.default || Slider;

const Testimonial = ()=>{
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScrolls:1,
    autoplay:true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseFocus: true,
    responsive: [
      {
        breakpoint: 10000,
          settings:{
            slidesToShow:3,
            slidesToScroll: 1,
            infinite: true
          }
      },
      {
       breakpoint: 1024,
        settings:{
            slideToShow:2,
            slidesToScroll: 1,
            initialSlide: 2,
          }
      },
      {
       breakpoint: 640,
        settings:{
            slideToShow:1,
            slidesToScroll: 1,
          }
      }
    ]
  }
  return(
    <div>
      <div className='pt-20 bg-gray-200'>
        <div className='text-center mb-10 max-w-[600px] mx-auto space-y-3'>
          <p className='font-semibold text-yellow-400 text-xl lg:font-bold lg:text-3xl'>
            What Our Customers Are Saying
          </p>
          <h1 className='text-xl font-bold lg:text-2xl'>Testimonials</h1>
          <p className='font-semibold lg:text-xl text-orange-500'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, ad.
          </p>
        </div>
        <div>
          <SlickSlider {...settings}>
            {
              TestimonialData.map((data)=>(
                <div key={data.id} className='my-6 lg:my-8'>
                  <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-gray-700 relative'>
                    <div>
                      <img src={data.img} alt="NetError" className='rounded-full w-14 h-14 lg:w-20 lg:h-20'/>
                    </div>
                    <div className='flex flex-col items-center pt-2 lg:pt-4'>
                      <div className='space-y-1 lg:space-y-2'>
                        <p className='text-xs lg:text-lg text-white'>
                          {data.text}
                        </p>
                        <h1 className='text-lg font-bold lg:text-2xl text-orange-500'>
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className='text-white text-9xl font-serif absolute top-0 right-0'>
                      ``
                    </p>
                  </div>
                </div>
              ))
            }
          </SlickSlider>
        </div>
      </div>
    </div> 
  )
}
export default Testimonial;

