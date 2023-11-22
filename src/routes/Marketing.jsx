import React from 'react'
import HeroMarketing from '../components/Marketing/HeroMarketing'
import Area1Mkt from '../components/Marketing/Area1Mkt'
import Area2Mkt from '../components/Marketing/Area2Mkt'
import Area3Mkt from '../components/Marketing/Area3Mkt'
import Area4Mkt from '../components/Marketing/Area4Mkt'
import BannerRocket from '../components/Banners/BannerRocket'

const Marketing = () => {
  return (
    <>
    <HeroMarketing/>
    <Area2Mkt/>
    <Area1Mkt/>
    <Area3Mkt/>
    <Area4Mkt/>
    <BannerRocket />

    </>
  )
}

export default Marketing