import React from 'react'
import Area1WebSiteItem from './Area1WebSiteItem'

const Area1WebSite = () => {
  return (
    <section className="section-test">
      <div className="container-test">
        <div className=" text-gray-500 sm:text-lg">
          
          <Area1WebSiteItem
            title="Presença Online Essencial"
            text1="Ter um site é crucial nos dias de hoje. É a sua vitrine virtual, aberta 24/7, proporcionando acesso constante aos clientes em potencial"
            text2=""
          />

          <div className='drop-shadow-2xl flex justify-center items-center relative m-4'>
            <div data-aos="fade-up" className='absolute w-2 h-2 rounded-full dark:bg-white bg-zinc-930 top-0'></div>
            <div data-aos="fade-up" className='w-0.5 h-32 dark:bg-white bg-zinc-930'></div>
          </div>

          <Area1WebSiteItem
            title="Profissionalismo Instantâneo"
            text1="Um site confere instantaneamente um ar profissional ao seu negócio. É a maneira moderna e confiável de apresentar sua empresa ao mundo"
            text2=""
          />

          <div className='drop-shadow-2xl flex justify-center items-center relative m-4'>
            <div data-aos="fade-up" className='absolute w-2 h-2 rounded-full dark:bg-white bg-zinc-930 top-0'></div>
            <div data-aos="fade-up" className='w-0.5 h-32 dark:bg-white bg-zinc-930'></div>
          </div>

          <Area1WebSiteItem
            title="Oportunidades de Crescimento"
            text1="Além de conectar-se localmente, um site oferece oportunidades de negócios globais. É o primeiro passo para explorar mercados além das fronteiras locais"
            text2=""
          />
        </div>
      </div>
    </section>
  )
}

export default Area1WebSite