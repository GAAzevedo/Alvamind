import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
    AOS.refresh()
  }, [])

  return (
    <div className='bg-zinc-50 dark:bg-zinc-950'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
