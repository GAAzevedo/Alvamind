import React from 'react'

const Area1Item = ({ value, img, title, text, handleActiveItem, activeItem }) => {
  const isActive = activeItem === value

  const itemClassName = `flex flex-col items-center py-8 p-5 rounded bg-zinc-100 dark:bg-zinc-900 transition duration-150 ${isActive ? 'border border-cyan-500 scale-105	' : ''}`

  return (
    <div className={itemClassName} onClick={() => handleActiveItem(value)}>
      <img src={img} alt="" className='w-16 text-white mb-6' />
      <h4 className="mb-3 text-center text-xl sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl dark:text-zinc-300 text-zinc-700">{title}</h4>
      <p className="hidden sm:block mb-1 text-base text-zinc-500 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">{text}</p>
      <button className='btn-primary hidden sm:block'>Veja mais</button>
    </div>
  )
}

export default Area1Item
