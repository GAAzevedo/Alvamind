import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

const Testimonials = () => {
  const [activeItem, setActiveItem] = useState(0)

  const testimonials = [
    "O site do projeto escolar ficou incrível! A navegação é super intuitiva e as informações estão muito bem organizadas. Parabéns a toda equipe pelo ótimo trabalho!",
    "Estou impressionado com a estética e usabilidade do site do projeto escolar. As cores e o layout são atraentes, e a facilidade de encontrar o conteúdo que eu precisava foi surpreendente. Excelente trabalho!",
    "O site do projeto escolar é uma verdadeira obra-prima! A maneira como as informações são apresentadas é clara e agradável, e a interatividade adiciona um toque especial. Parabéns à equipe por essa conquista!",
    "O site do projeto escolar é um exemplo de design e funcionalidade. A resposta rápida e a compatibilidade com dispositivos móveis tornam a experiência do usuário impecável. Ótimo trabalho, pessoal!",
    "Estou simplesmente encantada com o site do projeto escolar. A qualidade das imagens e o conteúdo bem pesquisado são notáveis. É um recurso valioso para todos os envolvidos no projeto. Parabéns pela excelência!"
  ]

  const handleNext = () => {
    setActiveItem((prevItem) => (prevItem === testimonials.length - 1 ? 0 : prevItem + 1))
  }

  const handlePrev = () => {
    setActiveItem((prevItem) => (prevItem === 0 ? testimonials.length - 1 : prevItem - 1))
  }

  return (
    <section className="section-test">
      <div className="container-test">
        <h4 className="mb-3 text-center text-xl sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl dark:text-zinc-300 text-zinc-700">Veja alguns comentarios sobre nosso comprometimento</h4>

        <div id="controls-carousel" className="relative w-full" data-carousel="static">
          <div className="relative overflow-hidden rounded-lg ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`pb-5 pt-10 bg-zinc-900 duration-700 ease-in-out h-full flex justify-center items-center ${activeItem === index ? 'active' : 'hidden'}`}
                data-carousel-item
              >
                <div className='text-center w-8/12 mx-auto'>
                  <p className="h-48 mb-3 text-base text-zinc-50 text-justify sm:text-lg md:text-xl lg:text-2xl">
                    <span className='block font-medium text-gray-900 dark:text-white text-xl mb-3'><ImQuotesLeft /></span>
                    {testimonial}
                    <span className='flex justify-end font-medium text-gray-900 dark:text-white text-xl'><ImQuotesRight /></span>
                  </p>
                  <cite className="font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <AiOutlineArrowLeft className='text-white text-2xl font-bold' />
              <span className="sr-only">Anterior</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <AiOutlineArrowRight className='text-white text-2xl font-bold' />
              <span className="sr-only">Próximo</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
