import React from 'react'
import { BsTelephone, BsEnvelope, BsWhatsapp, BsInstagram } from 'react-icons/bs'

const Area2Contato = () => {
  return (
    <section className="relative bg-white dark:bg-zinc-930">
      <div className="py-24 px-4 mx-auto max-w-screen-xl sm:py-28 md:py-32 lg:py-36 sm:px-6 md:px-14 lg:px-20">
        <div className='text-white text-center text-2xl grid lg:grid-cols-3'>
          <div className='mb-20'>
            <p className=' uppercase font-semibold mb-4'>telefone</p>
            <div className='flex items-center justify-center gap-5'>
              <span className='flex justify-center'> <BsTelephone /></span>
              <span className='text-blue-500'>(11) 1209-23089</span>
            </div>
          </div>
          <div className='mb-20'>
            <p className=' uppercase font-semibold mb-4'>telefone</p>
            <div className='flex items-center justify-center gap-5'>
              <span className='flex justify-center'><BsEnvelope /></span>
              <span className='text-blue-500'>contato@alvamind.com.br</span>
            </div>
          </div>
          <div>
            <p className='uppercase font-semibold mb-4'>redes sociais</p>
            <div className='flex justify-center gap-5'>
              <a href="" className='hover:text-blue-500'><BsWhatsapp /></a>
              <a href="" className='hover:text-blue-500'><BsInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Area2Contato