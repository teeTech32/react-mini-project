import { ProductsData } from "../../data";
import { FaStar } from "react-icons/fa6";
import {toast} from 'react-toastify'

const Products = ()=>{
  return(
    <div className="py-10 bg-gray-950 text-white leading-8">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="font-semibold text-yellow-400 text-xl lg:font-bold lg:text-3xl">
            Top Selling Products For You
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
            {
              ProductsData.map((data)=>(
                <div key={data.id} className="hover:scale-125 ease-in-out duration-300">
                  <img src={data.img} alt="Imgaes" className="h-[250px] w-[250px] object-cover rounded-md"/>
                  <div>
                    <h3 className="font-semibold">
                      {data.title}
                    </h3>
                    <p className="text-sm text-white">
                      {data.color}
                    </p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400"/>
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="flex justify-center">
            <button onClick={()=>toast.error('Please try again later, other wears are yet to come')} className="text-center text-white mt-10 cursor-pointer bg-primary py-1 px-5 rounded-md">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Products