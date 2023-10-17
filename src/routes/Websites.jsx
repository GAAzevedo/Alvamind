import React from 'react'
import HeroWebsite from '../components/Websites/HeroWebsite'
import Area1WebSite from '../components/Websites/Area1WebSite'
import Area2WebSite from '../components/Websites/Area2WebSite'
import Area3WebSite from '../components/Websites/Area3WebSite'
import Area4WebSite from '../components/Websites/Area4WebSite'
import BannerRocket from '../components/Banners/BannerRocket'

const Websites = () => {
  return (
    <>
      <HeroWebsite/>
      <Area2WebSite/>
      <Area1WebSite/>
      <Area3WebSite/>
      <Area4WebSite/>
      <BannerRocket/>
    </>
  )
}

export default Websites