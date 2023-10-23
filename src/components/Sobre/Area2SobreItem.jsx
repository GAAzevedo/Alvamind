const Area2SobreItem = ({ title, text, colorStart }) => {
  let conicGradient = `rotate-180 rounded-full bg-[conic-gradient(#020202,${colorStart})]`

  return (
    <div className="mb-20 text-center">
      <div className='relative flex justify-center mb-10 gap-2'>
        <div className={`w-8 h-8 self-end ${conicGradient}`}></div>
        <div className={`w-20 h-20 self-center ${conicGradient}`}></div>
        <div className={`w-4 h-4 self-start ${conicGradient}`}></div>
      </div>
      <h4 class="mb-3 text-center text-xl sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl text-zinc-300">{title}</h4>
      <p class="mb-1 text-base text-zinc-500 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">{text}</p>
      <a href="#" class="text-base text-zinc-500 sm:text-lg md:text-xl lg:text-2xl hover:text-200 underline underline-offset-8">Saiba mais</a>
    </div>
  )
}

export default Area2SobreItem