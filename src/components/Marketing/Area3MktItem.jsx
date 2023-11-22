import React, { useState, useEffect } from "react"
import { CircularProgressBar, CircularProgressBarTrack } from "../Progress/CircularProgress"

const Area3MktItem = ({ title, text, per }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < per) {
        setProgress(progress + 1)
      } else {
        clearInterval(interval)
      }
    }, 20)

    return () => {
      clearInterval(interval)
    }
  }, [progress, per])

  return (
    <div className="mb-10 mt-10 text-center">
      <div data-aos="fade-up" data-aos-delay="100" className="relative flex justify-center items-center">
        <CircularProgressBarTrack radius={40} progress={100} strokeWidth={5} color="#e925d8"/>
        <CircularProgressBar radius={40} progress={progress} strokeWidth={5} color="#e925d8" />
      </div>
      <h4 data-aos="fade-up" data-aos-delay="100" className="mb-3 mt-8 text-center text-xl sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl dark:text-zinc-300 text-zinc-700">{title}</h4>
      <p data-aos="fade-up" data-aos-delay="100" className="mb-1 text-base dark:text-zinc-500 text-zinc-600 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">{text}</p>
    </div>
  )
}

export default Area3MktItem
