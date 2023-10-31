import React, { useState } from 'react'
import { AiFillAccountBook } from 'react-icons/ai'
import Area1Item from './Area1Item'
import Area1HomeSub from './Area1HomeSub'

const areaItemsData = [
  {
    value: 'websites',
    img: 'https://cdn-icons-png.flaticon.com/512/977/977597.png',
    title: 'Websites',
    text: 'tudo para seu aplicativo',
  },
  {
    value: 'marketing',
    img: 'https://cdn-icons-png.flaticon.com/512/977/977597.png',
    title: 'Marketing',
    text: 'tudo para seu aplicativo',
  },
  {
    value: 'presenca',
    img: 'https://cdn-icons-png.flaticon.com/512/977/977597.png',
    title: 'Presença',
    text: 'tudo para seu aplicativo',
  },
]

const subItemsData = {
  websites: [
    {
      icon: <AiFillAccountBook />,
      title: 'Sites',
      texts: 'Site institucional, E-commerce, Blog, Portais, E-Learning, Página de vendas, Landing Page, Manutenção, Otimização WordPress',
    },
    {
      icon: <AiFillAccountBook />,
      title: 'Apps',
      texts: 'Site institucional, E-commerce, Blog, Portais, E-Learning, Página de vendas, Landing Page, Manutenção, Otimização WordPress',
    },
  ],
  marketing: [
    {
      icon: <AiFillAccountBook />,
      title: 'Performance',
      texts: 'Site institucional, E-commerce, Blog, Portais, E-Learning, Página de vendas, Landing Page, Manutenção, Otimização WordPress',
    },
    {
      icon: <AiFillAccountBook />,
      title: 'Inbound Marketing',
      texts: 'Site institucional, E-commerce, Blog, Portais, E-Learning, Página de vendas, Landing Page, Manutenção, Otimização WordPress',
    },
  ],
  presenca: [
    {
      icon: <AiFillAccountBook />,
      title: 'Design de Logotipo',
      texts: 'Site institucional, E-commerce, Blog, Portais, E-Learning, Página de vendas, Landing Page, Manutenção, Otimização WordPress',
    },
    {
      icon: <AiFillAccountBook />,
      title: 'Mídia Off',
      texts: 'Site institucional, E-commerce, Blog, Portais, E-Learning, Página de vendas, Landing Page, Manutenção, Otimização WordPress',
    },
  ],
}

const Area1 = () => {
  const [activeItem, setActiveItem] = useState('websites')

  const handleActiveItem = (value) => {
    setActiveItem(value)
  }

  return (
    <section className="section-test">
      <div className="container-test">
        <ul className="grid grid-cols-3 gap-5 justify-center mb-8">
          {areaItemsData.map((item) => (
            <Area1Item
              key={item.value}
              value={item.value}
              img={item.img}
              title={item.title}
              text={item.text}
              activeItem={activeItem}
              handleActiveItem={handleActiveItem}
            />
          ))}
        </ul>

        <ul className="grid grid-cols-2 gap-5 justify-center mb-8">
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
