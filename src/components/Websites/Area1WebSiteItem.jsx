import React from "react"

const Area1WebSiteItem = ({ title, text1, text2, align }) => {
  return (
    <div data-aos="fade-up" className="text-center">
      <h3 className="mb-4 text-center text-2xl sm:text-3xl md:mb-7 md:text-4xl lg:text-5xl dark:text-zinc-300 text-zinc-700">{title}</h3>
      <p className="mb-1 text-base dark:text-zinc-500 text-zinc-600 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">{text1}</p>
      <p className="mb-1 text-base dark:text-zinc-500 text-zinc-600 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">{text2}</p>
    </div >
  )
}

export default Area1WebSiteItem
