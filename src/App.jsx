import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import TopProducts from './components/TopProducts/TopProducts.jsx'
import Products from './components/Products/Products.jsx'
import Banner from './components/Banner/Banner.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Subscribe from './components/Subscribe/Subscribe.jsx'
import Testimonial from './components/Testimonial/Testmonial.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useState } from 'react'

function App() {
 const [setOrderPopup] = useState(false)

 const functionPopup = ()=>{
  setOrderPopup(true)
 }

  return (
    <>
     <section id='home'>
       <Navbar/>
     </section>
     <Hero handlePopup={functionPopup}/>
     <section id='allwears'>
       <Products/>
     </section>
     <TopProducts/>
     <Banner/>
     <Subscribe/>
     <Testimonial/>
     <Footer/>
     <ToastContainer/>
    </>
  )
}

export default App
