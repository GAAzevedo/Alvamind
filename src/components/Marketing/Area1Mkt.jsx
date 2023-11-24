import React from 'react'
import Area1MktItem from './Area1MktItem'

const Area1WebSite = () => {
  return (
    <section className="section-test">
      <div className="container-test">
        <div className=" text-gray-500 sm:text-lg">
          
          <Area1MktItem
            title="Crescimento Exponencial através da Inovação"
            text1="Na busca por crescimento exponencial, transformamos suas ideias em impacto. Com estratégias inovadoras, levamos sua marca a novas alturas, proporcionando resultados mensuráveis que impulsionam o sucesso."
            text2=""
          />

          <div className='drop-shadow-2xl flex justify-center items-center relative m-4'>
            <div data-aos="fade-up" data-aos-delay="100" className='absolute w-2 h-2 rounded-full dark:bg-white bg-zinc-930 top-0'></div>
            <div data-aos="fade-up" data-aos-delay="100" className='w-0.5 h-32 dark:bg-white bg-zinc-930'></div>
          </div>

          <Area1MktItem
            title="Destaque Garantido nas Conversas Digitais"
            text1="A batalha pela atenção online é intensa, e estamos aqui para garantir que sua empresa não apenas participe, mas se destaque. Desenvolvemos campanhas cativantes que colocam sua marca no centro das conversas digitais, construindo uma presença online duradoura."
            text2=""
          />

          <div className='drop-shadow-2xl flex justify-center items-center relative m-4'>
            <div data-aos="fade-up" data-aos-delay="100" className='absolute w-2 h-2 rounded-full dark:bg-white bg-zinc-930 top-0'></div>
            <div data-aos="fade-up" data-aos-delay="100" className='w-0.5 h-32 dark:bg-white bg-zinc-930'></div>
          </div>

          <Area1MktItem
            title="Descomplicando o Sucesso Online"
            text1="Navegar no mundo digital pode ser complexo, mas conosco, o sucesso online se torna descomplicado. Oferecemos uma abordagem simplificada para o marketing digital, proporcionando resultados tangíveis que impulsionam o crescimento sustentável de sua empresa."
            text2=""
          />
        </div>
      </div>
    </section>
  )
}

export default Area1WebSite