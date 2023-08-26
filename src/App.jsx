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
    <>
      <Header />
      <main className='bg-white dark:bg-zinc-950'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
