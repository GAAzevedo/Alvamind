import React, { useState, useEffect } from "react"

const CircularProgressBar = ({ radius, progress, strokeWidth }) => {
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="circle-progress-container absolute">
      <svg height={radius * 2} width={radius * 2} className="circle-svg">
        <circle
          className="progress-bar"
          stroke="blue"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset,
          }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="percentage-text"
          fill="#615c5c" // Cor branca
        >
          {progress}%
        </text>
      </svg>
    </div>
  )
}

const CircularProgressBarTrack = ({ radius, progress, strokeWidth }) => {
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="circle-progress-container">
      <svg height={radius * 2} width={radius * 2} className="circle-svg">
        <circle
          className="progress-bar opacity-25"
          stroke="blue"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset,
          }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="percentage-text"
        >
          
        </text>
      </svg>
    </div>
  )
}

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
      <div className="relative flex justify-center items-center">
        <CircularProgressBarTrack radius={40} progress={100} strokeWidth={5} />
        <CircularProgressBar radius={40} progress={progress} strokeWidth={5} />
      </div>
      <h4 className="mb-3 text-center text-xl sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl dark:text-zinc-300 text-zinc-700">{title}</h4>
      <p className="mb-1 text-base dark:text-zinc-500 text-zinc-600 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">{text}</p>
    </div>
  )
}

export default Area3MktItem
