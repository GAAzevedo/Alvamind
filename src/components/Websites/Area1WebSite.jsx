import React from 'react'
import Area1WebSiteItem from './Area1WebSiteItem'

const Area1WebSite = () => {
  return (
    <section className="section-test">
      <div className="container-test">
        <div className=" text-gray-500 sm:text-lg">
          
          <Area1WebSiteItem
            title="Vitrine online"
            text1="Um site é como uma vitrine para sua empresa. É a primeira impressão que as pessoas terão de você, e é a maneira como elas saberão mais sobre o que você oferece.."
            text2="Um site é como uma vitrine para sua empresa. É a primeira impressão que as pessoas terão de você, e é a maneira como elas saberão mais sobre o que você oferece.."
          />

          <div className='drop-shadow-2xl flex justify-center items-center relative m-4'>
            <div data-aos="fade-up" className='absolute w-2 h-2 rounded-full dark:bg-white bg-zinc-930 top-0'></div>
            <div data-aos="fade-up" className='w-0.5 h-32 dark:bg-white bg-zinc-930'></div>
          </div>

          <Area1WebSiteItem
            title="Conexão com clientes"
            text1="Um site é uma ótima maneira de se conectar com seus clientes. Você pode usar o site para compartilhar informações sobre seus produtos ou serviços, para fornecer atendimento ao cliente e para gerar leads."
            text2="Um site é uma ótima maneira de se conectar com seus clientes. Você pode usar o site para compartilhar informações sobre seus produtos ou serviços, para fornecer atendimento ao cliente e para gerar leads."
          />

          <div className='drop-shadow-2xl flex justify-center items-center relative m-4'>
            <div data-aos="fade-up" className='absolute w-2 h-2 rounded-full dark:bg-white bg-zinc-930 top-0'></div>
            <div data-aos="fade-up" className='w-0.5 h-32 dark:bg-white bg-zinc-930'></div>
          </div>

          <Area1WebSiteItem
            title="Oportunidades de negócios"
            text1="Um site é como uma vitrine para sua empresa. É a primeira impressão que as pessoas terão de você, e é a maneira como elas saberão mais sobre o que você oferece.."
            text2="Um site pode ajudá-lo a aumentar suas chances de sucesso. Ele pode ajudar você a atrair novos clientes, a aumentar as vendas e a melhorar a sua imagem de marca."
          />
        </div>
      </div>
    </section>
  )
}

export default Area1WebSite