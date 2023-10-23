import React from 'react'
import HeroWebsite from '../components/Websites/HeroWebsite'
import Area1WebSite from '../components/Websites/Area1WebSite'
import Area2WebSite from '../components/Websites/Area2WebSite'
import Area3WebSite from '../components/Websites/Area3WebSite'
import BannerWebSite from '../components/Websites/BannerWebSite'
import BannerRocket from '../components/Banners/BannerRocket'

const Websites = () => {
  return (
    <>
      <HeroWebsite />
      <BannerWebSite />
      <Area1WebSite />
      <Area2WebSite />
      <Area3WebSite />
      <BannerRocket />
    </>
  )
}

export default Websites