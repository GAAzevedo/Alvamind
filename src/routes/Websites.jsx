import React from 'react'
import HeroWebsite from '../components/Websites/HeroWebsite'
import Area1WebSite from '../components/Websites/Area1WebSite'
import Area2WebSite from '../components/Websites/Area2WebSite'
import Area3WebSite from '../components/Websites/Area3WebSite'

const Websites = () => {
  return (
    <section>
      <HeroWebsite/>
      <Area2WebSite/>
      <Area1WebSite/>
      <Area3WebSite/>
    </section>
  )
}

export default Websites