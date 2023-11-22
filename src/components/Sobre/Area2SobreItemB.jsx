import { Link } from "react-router-dom"


const Area2SobreItemB = ({ title, text, link, colorStart }) => {
  return (
    <div className="mb-20 text-center">
      <div className='relative flex justify-center mb-10 gap-2'>
        <div className={`w-8 h-8 self-end rotate-[100deg] rounded-full bg-[conic-gradient(#000000,#e925d8)]`}></div>
        <div className={`w-20 h-20 self-center rotate-[220deg] rounded-full bg-[conic-gradient(#000000,#e925d8)]`}></div>
        <div className={`w-4 h-4 self-start rotate-[260deg] rounded-full bg-[conic-gradient(#000000,#e925d8)]`}></div>
      </div>
      <h4 className="mb-3 text-center text-xl sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl dark:text-zinc-300 text-zinc-700">{title}</h4>
      <p className="mb-1 text-base dark:text-zinc-500 text-zinc-600 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">{text}</p>
      <Link to={link} className="text-base text-zinc-500 sm:text-lg md:text-xl lg:text-2xl hover:text-200 underline underline-offset-8 hover:text-cyan-500">Saiba mais</Link>
    </div>
  )
}

export default Area2SobreItemB