import React from 'react'
import Area1WebSiteItem from './Area1WebSiteItem'

const Area1WebSite = () => {
  return (
    <section className="section-test">
      <div className="container-test">
        <div className=" text-gray-500 sm:text-lg">
          
          <Area1WebSiteItem
            title="Websites que Transformam"
            text1="Desenvolvemos sites feitos sob medida para sua marca. Do design elegante à funcionalidade intuitiva, oferecemos uma presença online que não apenas impressiona, mas também impulsiona o sucesso do seu negócio."
            text2=""
          />

          <div className='drop-shadow-2xl flex justify-center items-center relative m-4'>
            <div data-aos="fade-up" className='absolute w-2 h-2 rounded-full dark:bg-white bg-zinc-930 top-0'></div>
            <div data-aos="fade-up" className='w-0.5 h-32 dark:bg-white bg-zinc-930'></div>
          </div>

          <Area1WebSiteItem
            title="Marca Online Exclusiva"
            text1="Com um histórico sólido, somos especialistas em construir marcas online. Desde pequenas empresas até grandes corporações, nossa equipe tem a experiência necessária para posicionar sua marca de maneira única e memorável."
            text2=""
          />

          <div className='drop-shadow-2xl flex justify-center items-center relative m-4'>
            <div data-aos="fade-up" className='absolute w-2 h-2 rounded-full dark:bg-white bg-zinc-930 top-0'></div>
            <div data-aos="fade-up" className='w-0.5 h-32 dark:bg-white bg-zinc-930'></div>
          </div>

          <Area1WebSiteItem
            title="Presença Online Cativante"
            text1="Conquiste o mundo virtual com uma presença online cativante. seja a luz que atrai olhares, conecte-se com autenticidade e deixe uma marca inesquecível na vastidão digital."
            text2=""
          />
        </div>
      </div>
    </section>
  )
}

export default Area1WebSite