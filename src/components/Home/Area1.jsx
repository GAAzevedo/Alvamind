import React, { useState } from 'react'

import { BiCodeAlt } from 'react-icons/bi'
import { FaRegHandshake } from 'react-icons/fa'
import { BiBrain } from 'react-icons/bi'
import {AiOutlineRise} from 'react-icons/ai'
import {BsCollectionPlayFill} from 'react-icons/bs'
import { TbTargetArrow } from "react-icons/tb";

import Area1Item from './Area1Item'
import Area1HomeSub from './Area1HomeSub'

const areaItemsData = [
  {
    value: 'websites',
    img: 'https://cdn-icons-png.flaticon.com/512/1084/1084320.png',
    title: 'Websites',
    text: 'Seu site é sua vitrine virtual! Deixe-nos criar uma experiência online cativante que fará os visitantes se apaixonarem pela sua marca.',
    page:'/website'
  },
  {
    value: 'marketing',
    img: 'https://cdn-icons-png.flaticon.com/512/2518/2518048.png',
    title: 'Marketing',
    text: 'Dê asas ao seu negócio com Marketing Total! Aumente sua visibilidade, conquiste corações e impulsione vendas com estratégias poderosas.',
    page:'/marketing'
  },
  {
    value: 'presenca',
    img: 'https://cdn-icons-png.flaticon.com/512/1968/1968666.png',
    title: 'Presença Digital',
    text: 'Domine as redes sociais como um profissional! Seja o rei do engajamento, conquiste seguidores fiéis e faça sua marca brilhar online.',
    page:'/presenca'
  },
]

const subItemsData = {
  websites: [
    {
      icon: <BiCodeAlt />,
      title: 'Desenvolvimento Web',
      texts: 'Sites Responsivos, Blogs, Site institucional, Tecnologias de Automatização, CMS (Sistemas de gerenciamento de conteúdo)',
    },
    {
      icon: <FaRegHandshake />,
      title: 'Profissionalismo Online',
      texts: 'E-mails profissionais, Materiais para blog, UX (User experience), Automatização de E-mails',
    },
  ],
  marketing: [
    {
      icon: <BiBrain />,
      title: 'Inteligência em Marketing',
      texts: 'Estratégias multicanais, CRM (Gestão de Relacionamento com o Cliente), Otimizações, Criação de conteúdo, E-mail marketing',
    },
    {
      icon: <AiOutlineRise />,
      title: 'Performance Online',
      texts: 'Google ADS, Facebook ADS, Remarketing, Google Analytics',
    },
  ],
  presenca: [
    {
      icon: <TbTargetArrow />,
      title: 'Marketing Mídia Social',
      texts: 'Anúncios online, Estratégia de conteúdo, Engajamento de público, Anúncios online, Personalidades parceiras',
    },
    {
      icon: <BsCollectionPlayFill />,
      title: 'Conteúdo Digital',
      texts: 'Gerenciamento de contas, Infográficos, Promoções, E-books, Imagens por I.A., Publicações agendadas',
    },
  ],
};


const Area1 = () => {
  const [activeItem, setActiveItem] = useState('websites')

  const handleActiveItem = (value) => {
    setActiveItem(value)
  }

  return (
    <section className="section-test">
      <div className="container-test">
        <ul data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-3 gap-5 justify-center mb-8">
          {areaItemsData.map((item) => (
            <Area1Item
              key={item.value}
              value={item.value}
              img={item.img}
              title={item.title}
              text={item.text}
              activeItem={activeItem}
              handleActiveItem={handleActiveItem}
              page={item.page}
            />
          ))}
        </ul>

        <ul data-aos="fade-up" data-aos-delay="150" className="grid grid-cols-2 gap-5 justify-center mb-8">
          {subItemsData[activeItem].map((subItem, index) => (
            <Area1HomeSub
              key={index}
              icon={subItem.icon}
              title={subItem.title}
              texts={subItem.texts}
            />
          ))}
        </ul>
      </div>

    </section>
  )
}

export default Area1
