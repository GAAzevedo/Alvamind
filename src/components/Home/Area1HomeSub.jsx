import React from 'react'

const Area1HomeSub = ({ icon, title, texts }) => {
  const textArray = texts.split(',')

  return (
    <div className='text-white text-center'>
      <span className='flex justify-center mb-4 text-4xl'>{icon}</span>
      <h6 className="mb-1 text-center text-base sm:text-lg md:mb-4 md:text-xl lg:text-2x text-cyan-500">{title}</h6>
      <ul>
        {textArray.map((item, index) => (
          <p key={index} className="mb-1 text-base text-zinc-500 m:text-lg md:text-xl lg:text-2xl">{item}</p>
        ))}
      </ul>
    </div>
  )
}

export default Area1HomeSub
