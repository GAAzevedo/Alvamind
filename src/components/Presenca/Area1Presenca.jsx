import React from 'react'
import Area1PresencaItem from './Area1PresencaItem'

const Area1Presenca = () => {
  return (
    <section className="section-test">
      <div className="container-test">
        <div className=" text-gray-500 sm:text-lg">

          <Area1PresencaItem
            title="Transforme sua Marca Online"
            text1="Desenvolvemos estratégias envolventes para criar uma presença digital impactante. Desde o design de redes sociais até a gestão de conteúdo, garantimos que sua marca se destaque"
            text2=""
          />

          <div className='drop-shadow-2xl flex justify-center items-center relative m-4'>
            <div data-aos="fade-up" className='absolute w-2 h-2 rounded-full dark:bg-white bg-zinc-930 top-0'></div>
            <div data-aos="fade-up" className='w-0.5 h-32 dark:bg-white bg-zinc-930'></div>
          </div>

          <Area1PresencaItem
            title="Conecte-se com seu Público"
            text1="Vamos além das postagens. Criamos uma conexão autêntica com seu público-alvo, utilizando insights e interações para impulsionar o engajamento e fortalecer sua presença online"
            text2=""
          />

          <div className='drop-shadow-2xl flex justify-center items-center relative m-4'>
            <div data-aos="fade-up" className='absolute w-2 h-2 rounded-full dark:bg-white bg-zinc-930 top-0'></div>
            <div data-aos="fade-up" className='w-0.5 h-32 dark:bg-white bg-zinc-930'></div>
          </div>

          <Area1PresencaItem
            title="Acelere seu Crescimento Digital"
            text1="Combinamos conhecimento técnico e criatividade para impulsionar seu negócio. De estratégias de SEO a campanhas nas redes sociais, estamos prontos para acelerar o crescimento da sua presença digital."
            text2=""
          />
        </div>
      </div>
    </section>
  )
}

export default Area1Presenca;