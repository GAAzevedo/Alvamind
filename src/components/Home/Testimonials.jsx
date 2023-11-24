import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

const Testimonials = () => {
  const [activeItem, setActiveItem] = useState(0)

  const testimonials = [
    {
      title:"Sandra Alvares, Gerente de marketing da Construpac Eucalipto Tratado.",
      text:"Minha experiência com a Alvamind durante a implementação do RD Station Marketing foi bastante positiva. A equipe demonstrou uma paciência enorme ao explicar cada funcionalidade, me dando a  atenção que eu precisava ao longo do processo. A abordagem foi fundamental pra que minha equipe e eu conseguíssemos entender a plataforma. Com isso nos conseguimos iniciar nossa gestão de forma mais segura e focada nos resultados esperados. Agradeço à Alvamind pela parceria e suporte durante todo o processo"
    },{
      title:"Wesley Oliveira, Operador de Marketing da Grupo Clima",
      text:"Estou gostando bastante da parceria com a Alvamind. A equipe mostrou ser profissional e focada em entender as necessidades do meu negócio. A comunicação tem sido clara e eficiente, e as estratégias apresentadas até agora têm se mostrado promissoras. Estou satisfeito com os resultados alcançados até o momento e espero continuar essa colaboração produtiva"
    },

  ]

  const handleNext = () => {
    setActiveItem((prevItem) => (prevItem === testimonials.length - 1 ? 0 : prevItem + 1))
  }

  const handlePrev = () => {
    setActiveItem((prevItem) => (prevItem === 0 ? testimonials.length - 1 : prevItem - 1))
  }

  return (
    <section className="section-test">
      <div  data-aos="fade-up" data-aos-delay="100" className="container-test">
        <h4 className="mb-8 text-center text-xl sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl dark:text-zinc-300 text-zinc-700">Veja alguns comentários sobre nosso comprometimento:</h4>

        <div id="controls-carousel" className="relative w-full" data-carousel="static">
          <div className="relative overflow-hidden rounded-lg ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`pb-5 pt-10 dark:bg-zinc-900 bg-zinc-500 duration-700 ease-in-out h-full flex justify-center items-center ${activeItem === index ? 'active' : 'hidden'}`}
                data-carousel-item
              >
                <div className='text-center w-8/12 mx-auto'>
                  <p className="mb-3 text-base text-gray-900 dark:text-white text-justify sm:text-lg md:text-xl lg:text-2xl">
                    <span className='block font-medium text-gray-900 dark:text-white text-xl mb-3'><ImQuotesLeft /></span>
                    {testimonial.text}
                    <span className='flex justify-end font-medium text-gray-900 dark:text-white text-xl'><ImQuotesRight /></span>
                  </p>
                  <cite className="font-medium text-gray-900 dark:text-white">{testimonial.title}</cite>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
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
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer group focus:outline-none"
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
