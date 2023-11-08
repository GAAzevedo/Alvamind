import React, { useEffect, useState } from 'react'
import { BsTelephone, BsEnvelope, BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { InstagramEmbed } from 'react-social-media-embed';

const contatoTextos = [
  { title: "(11) 94081 0122", url: "tel:+11940810122", icon: <BsTelephone /> },
  { title: "contato@alvamind.com.br", url: "mailto:contato@alvamind.com.br", icon: <BsEnvelope /> },
  { title: "@alvamindbrasil", url: "https://www.instagram.com/alvamindbrasil/?ig_rid=e944e07d-6fcb-458d-a2db-ac6241d7f671", icon: <BsInstagram /> },
]


const Area2Contato = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  let instagramWidth = 324

  if (windowWidth >= 1024) {
    instagramWidth = 600
  } else if (windowWidth >= 768) {
    instagramWidth = 500
  } else if (windowWidth >= 640) {
    instagramWidth = 400
  }


  return (
    <section className="relative bg-white dark:bg-zinc-950">
      <div className="py-36 px-4 mx-auto max-w-screen-xl sm:py-28 md:py-32 lg:py-36 sm:px-6 md:px-14 lg:px-20">
        <div className='grid md:grid-cols-2'>
          <div className="mt-14 mb-24 flex flex-col items-center justify-center">
            <div className='mb-20 text-center font-bold'>
              <p className="uppercase mb-1 text-base text-zinc-500 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">telefone</p>
              <a href="tel:+11940810122" className='flex items-center justify-center gap-5'>
                <span className='text-cyan-500 text-2xl'> <BsTelephone /></span>
                <span className='text-cyan-500 text-xl'>(11) 91981-9337</span>
              </a>
            </div>
            <div className='mb-20 text-center font-bold'>
              <p className="uppercase mb-1 text-base text-zinc-500 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">email</p>
              <a href='mailto:contato@alvamind.com.br' className='flex items-center justify-center gap-5'>
                <span className='text-cyan-500 text-2xl'> <BsEnvelope /></span>
                <span className='text-cyan-500 text-xl'>contato@alvamind.com.br</span>
              </a>
            </div>
            <div className='mb-20 text-center font-bold'>
              <p className="uppercase mb-1 text-base text-zinc-500 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">redes sociais</p>
              <div className='flex items-center justify-center gap-5'>
                <a href='https://www.instagram.com/alvamindbrasil/?ig_rid=9ac6463a-9cef-4e09-9bf2-8e08c8d928b9' className='text-cyan-500  text-2xl'><BsInstagram /></a>
                <a href="https://api.whatsapp.com/send?phone=919819337" className='text-cyan-500 text-2xl'><BsWhatsapp /></a>
              </div>

            </div>
          </div>

          <div className="flex justify-center ">
            <InstagramEmbed className="z-20 overflow-hidden shadow-xl rounded-lg" url="https://www.instagram.com/p/CyBXJyirSgN/?utm_source=ig_embed&utm_campaign=loading" width={instagramWidth} />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Area2Contato