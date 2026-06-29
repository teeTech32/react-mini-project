import { GrSecure } from "react-icons/gr";
import {FaCreditCard} from 'react-icons/fa'
import { FaCar } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import BannerImage from '../../assets/women/women.png'

const Banner  = ()=>{
  return(
    <div className="min-h-[550px] justify-center items-center py-12 sm:p-0 flex bg-gray-950 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:gap-0 items-center">
        <div>
          <img src={BannerImage} alt="BannerImage" className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0 0 0 1)] object-cover" />
        </div>
        <div className="flex flex-col gap-6 sm:pt-0">
          <h1 className="text-3xl lg:text-5xl font-bold text-yellow-400">
            Seasonal Sales upto 50% off
          </h1>
          <p className="text-sm lg:text-2xl text-white tracking-wide leading-5 md:leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi aliquid fugit animi fuga voluptas, error cupiditate laborum veritatis in.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <GrSecure className="text-2xl h-10 w-10 lg:text-4xl lg:w-14 lg:h-14 shadow-2xl p-2 rounded-full bg-violet-600"/>
              <p>Quality Products</p>
            </div>
            <div className="flex items-center gap-4">
              <FaCar className="text-2xl h-10 w-10 lg:text-4xl lg:w-14 lg:h-14 shadow-2xl p-2 rounded-full bg-orange-600"/>
              <p>Fast Delivery</p>
            </div>
            <div className="flex items-center gap-4">
              <FaCreditCard className="text-2xl h-10 w-10 lg:text-4xl lg:w-14 lg:h-14 shadow-2xl p-2 rounded-full bg-green-600"/>
              <p>Easy Payment</p>
            </div>
            <div className="flex items-center gap-4">
              <MdDiscount className="text-2xl h-10 w-10 lg:text-4xl lg:w-14 lg:h-14 shadow-2xl p-2 rounded-full bg-yellow-600"/>
              <p>Get Offer</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
