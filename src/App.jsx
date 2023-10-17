import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BsWhatsapp } from 'react-icons/bs'
import './App.css'

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
      <main className='bg-white dark:bg-zinc-950 pb-40 mt-[72px]'>
        <Outlet />
      </main>
      <Footer />

      <div className='fixed bottom-8 right-8 md:bottom-16 md:right-16 rounded-full animate-bounce '>
        <div className='relative bg-green-500 rounded-full p-3 flex justify-center items-center'>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <a href="https://api.whatsapp.com/send?phone=919819337" className='text-4xl  text-white rounded-full'><BsWhatsapp /></a>
        </div>
      </div>
    </>
  )
}

export default App
