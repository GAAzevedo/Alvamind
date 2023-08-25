import React from 'react'

const Area1Item = ({texto1,texto2,texto3,align}) => {
  

  return (

    <div data-aos="fade-up" className="mb-16">
        <h2 className={`${align} mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white`}>
            {texto3}
          </h2>
          <p className={`${align} font-light mb-4`}>
            {texto1}
          </p>
          <p className={`${align} font-medium mb-4`}>
            {texto2}
          </p>
          <div className={`${align}`}>
          <a 
            href="#"
            className={`${align} inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700`}
          >
            Ler Mais
            <svg
              className="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          </div>
          
    </div>

  )
}

export default Area1Item