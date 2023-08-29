import React, { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { BiLogoReact } from 'react-icons/bi'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FaCss3 } from 'react-icons/fa'
import { DiNpm } from 'react-icons/di'
import { AiFillGithub } from 'react-icons/ai'

import './Area2.css'


const Area2 = () => {

  useEffect(() => {
    AOS.init()
  }, [])
  return (

    <div className=" p-0 text-center">
      <section className='container mx-auto px-5 py-32'>
        <div className='container mx-auto px-2' data-aos="fade-up" data-aos-duration="2000">
          <h5 className='relative justify-center text-xl mb-20 font-semibold text-zinc-900  dark:text-white opacity-70'>Nossas Qualificações</h5>
          <ul className='flex gap-8 relative h-20 overflow-hidden'>
            <li className='text-4xl absolute block w-full animate-slide slide1 text-red-900' ><AiFillGoogleCircle /></li>
            <li className='text-4xl absolute block w-full animate-slide slide2 text-blue-500' ><BiLogoReact /></li>
            <li className='text-4xl absolute block w-full animate-slide slide3 text-green-500' ><AiOutlineHtml5 /></li>
            <li className='text-4xl absolute block w-full animate-slide slide4 text-purple-500' ><FaCss3 /></li>
            <li className='text-4xl absolute block w-full animate-slide slide5 text-yellow-500' ><DiNpm /></li>
            <li className='text-4xl absolute block w-full animate-slide slide6 text-white' ><AiFillGithub /></li>
          </ul>
        </div>
      </section>
    </div>

  )
}

export default Area2