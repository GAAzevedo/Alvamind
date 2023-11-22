
const CircularProgressBar = ({ radius, progress, strokeWidth, color }) => {
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="circle-progress-container absolute">
      <svg height={radius * 2} width={radius * 2} className="circle-svg">
        <circle
          className="progress-bar"
          stroke={color}
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
          fill="#615c5c"
        >
          {progress}%
        </text>
      </svg>
    </div>
  )
}

const CircularProgressBarTrack = ({ radius, progress, strokeWidth, color }) => {
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="circle-progress-container">
      <svg height={radius * 2} width={radius * 2} className="circle-svg">
        <circle
          className="progress-bar opacity-25"
          stroke={color}
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


export {CircularProgressBar, CircularProgressBarTrack}