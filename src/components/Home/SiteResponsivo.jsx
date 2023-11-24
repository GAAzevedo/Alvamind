import React from 'react'
import imgResponsive from '../../assets/imageResp.png'

const SiteResponsivo = () => {
  return (
    <section className="section-test">
      
      <div className="container-test">
        <div  data-aos="fade-up" data-aos-delay="100" className="grid md:grid-cols-2">
          <div className='flex flex-col justify-center items-center'>
            <h4 className="mb-3 text-center text-xl sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl dark:text-zinc-300 text-zinc-700">Websites Adaptáveis</h4>
            <p className="text-center mb-1 text-base dark:text-zinc-500 text-zinc-600 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">
              Sites que se ajustam automaticamente a diferentes dispositivos, como celulares e tablets, para proporcionar uma melhor experiência ao usuário.
            </p>
          </div>
          <div  data-aos="fade-up" data-aos-delay="100">
            <img src={imgResponsive} alt="" className='max-w-full' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SiteResponsivo