import React from "react"

const Area3MktItem = ({ title, text, per }) => {
  return (
    <div className="mb-10 mt-10 text-center">
      <div className="relative w-40 h-40 mx-auto scale-[0.45]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle className="progress-ring__circle_a stroke-current" strokeWidth="8" cx="50" cy="50" r="40" fill="transparent"></circle>
          <circle className="progress-ring__circle stroke-current" strokeWidth="8" strokeLinecap="square" cx="50" cy="50" r="40" fill="transparent"
            strokeDashoffset={`calc(400 - (400 * ${per / 1.62}) / 100)`}></circle>
        </svg>
      </div>
      <h4 className="mb-3 text-center text-xl sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl dark:text-zinc-300 text-zinc-700">{title}</h4>
      <p className="mb-1 text-base dark:text-zinc-500 text-zinc-600 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">{text}</p>
    </div>
  )
}

export default Area3MktItem
