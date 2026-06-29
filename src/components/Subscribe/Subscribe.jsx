import Banner  from "../../assets/website/orange-pattern.jpg";

const BannerImage = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%'
}

const Subscribe = ()=>{
  return(
    <div className="bg-gray-800 text-white" style={BannerImage}>
      <div className="container backdrop-blur-sm py-10 mb-0">
        <div className="max-w-xl mx-auto space-y-4 lg:space-y-6">
          <h1 className="lg:text-2xl font-semibold text-center sm:text-left">
            Get Notification About New Products
          </h1>
          <input type="text" placeholder="Enter your email" className="w-full p-1.5 lg:p-3 bg-white text-black"/>
        </div>
      </div>
    </div>
  )
}
export default Subscribe