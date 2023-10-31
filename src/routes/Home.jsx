import React from 'react'
import Hero from '../components/Home/Hero'
import Area1 from '../components/Home/Area1'
import Testimonials from '../components/Home/Testimonials'
import Certification from '../components/Home/Certification'
import BannerRocket from '../components/Banners/BannerRocket'
import SiteResponsivo from '../components/Home/SiteResponsivo'


const Home = () => {
  return (
    <>
      <Hero/>
      <Area1/>
      <SiteResponsivo />
      <Testimonials />
      <Certification />
      <BannerRocket />
    </>
  )
}

export default Home
