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

      <div className='fixed bottom-8 right-8 md:bottom-16 md:right-16 rounded-full animate-bounce z-40 cursor-pointer'>
        <div className='relative bg-green-500 rounded-full p-4 flex justify-center items-center'>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <a href="https://api.whatsapp.com/send?phone=919819337" className='text-4xl text-white rounded-full'><BsWhatsapp /></a>
        </div>
      </div>
    </>
  )
}

export default App


{/* 
<h1 className="mb-6 text-center text-4xl sm:text-5xl md:mb-9 md:text-6xl lg:text-7xl text-zinc-100">Título H1</h1>
<h2 className="mb-5 text-center text-3xl sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl text-zinc-200">Título H2</h2>
<h3 className="mb-4 text-center text-2xl sm:text-3xl md:mb-7 md:text-4xl lg:text-5xl text-zinc-300">Título H3</h3>
<h4 className="mb-3 text-center text-xl sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl text-zinc-300">Título H4</h4>
<h5 className="mb-2 text-center text-lg sm:text-xl md:mb-5 md:text-2xl lg:text-3xl text-zinc-300">Título H5</h5>
<h6 className="mb-1 text-center text-base sm:text-lg md:mb-4 md:text-xl lg:text-2xl text-zinc-300">Título H6</h6>
<p className="mb-1 text-base text-zinc-500 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">Exemplo exemplo</p>
<a href="#" className="text-base text-zinc-500 sm:text-lg md:text-xl lg:text-2xl hover:text-200">Link</a>
*/}

