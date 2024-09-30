import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import PosCRM from '@/components/PosCRM'
import Service from '@/components/Service'
import React from 'react'

const page = () => {
  return (
    <div className=' w-[100%] h-[100vh]'>
      <img src="/bg.jpg" alt="bg" className='w-[100%] h-[100vh] bg-cover fixed hidden sm:block -z-10'/>
      <Navbar/>
      <Home />
      <Service />
      <PosCRM />
      <Contact />
      <Footer />
    </div>
  )
}

export default page
