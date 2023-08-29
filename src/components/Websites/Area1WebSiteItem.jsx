import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const Area1WebSiteItem = ({ texto1, texto2, texto3, align }) => {


  return (

    <div data-aos="fade-up" className={`mb-0 ${align}`} >
      <h2 className="mb-6 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
        {texto3}
      </h2>
      <p className="font-light mb-4 text-black dark:text-zinc-300">
        {texto1}
      </p>
      <p className="font-medium mb-4 text-black dark:text-zinc-300">
        {texto2}
      </p>
      <div>
        <a href="#" className="inline-flex items-center gap-2 font-medium text-black hover:text-cyan-500 dark:text-zinc-300">
          Ler Mais
          <FaChevronRight />
        </a>
      </div>

    </div>

  )
}

export default Area1WebSiteItem