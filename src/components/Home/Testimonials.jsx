import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

const Testimonials = () => {
  const [activeItem, setActiveItem] = useState(0)

  const testimonials = [
    'Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.',
    'Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.',
    'Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.',
    'Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.',
    'Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.',
    'Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.'
  ]

  const handleNext = () => {
    setActiveItem((prevItem) => (prevItem === testimonials.length - 1 ? 0 : prevItem + 1))
  }

  const handlePrev = () => {
    setActiveItem((prevItem) => (prevItem === 0 ? testimonials.length - 1 : prevItem - 1))
  }

  return (
    <section className="overflow-hidden relative bg-white dark:bg-zinc-950">
      <div className="px-4 mx-auto max-w-screen-xl py-28 md:py-32 sm:px-6 md:px-14 lg:px-20">

        <div id="controls-carousel" className="relative w-full" data-carousel="static">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-60">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-zinc-900 duration-700 ease-in-out h-full flex justify-center items-center ${activeItem === index ? 'active' : 'hidden'}`}
                data-carousel-item
              >
                <div className='text-center w-8/12 mx-auto'>
                  <p className="mb-3 text-center text-base text-zinc-500  sm:text-lg md:text-xl lg:text-2xl">
                    <span className='font-medium text-gray-900 dark:text-white text-xl'><ImQuotesLeft /></span>
                    {testimonial}
                    <span className='flex justify-end font-medium text-gray-900 dark:text-white text-xl'><ImQuotesRight /></span>
                  </p>
                  <cite class="font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
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
