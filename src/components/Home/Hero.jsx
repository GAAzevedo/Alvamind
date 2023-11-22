import React from "react"
import HeroImg from "../../assets/images/01 copiar.png"

const Hero = () => {
  return (
    <section data-aos="fade-up" data-aos-delay="100" className="relative  -mt-16 bg-white h-screen lg:h-[calc(100vh-72px)] lg:mt-[72px] flex items-center justify-center dark:bg-zinc-950">
      <div className="absolute z-20 px-4 text-center sm:px-6 md:px-14 lg:px-20">
        <h1 data-aos="fade-up" data-aos-delay="50" className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Desenvolvemos o futuro da presença online
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" className="mb-8 text-lg font-normal text-zinc-950 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200">
          Maximize sua presença online! Websites inovadores, forte destaque nas redes sociais e anúncios envolventes para superar a concorrência. Junte-se a nós para dar vida à sua visão digital de forma única e impactante
        </p>
        <a  href="https://api.whatsapp.com/send?phone=919819337"
          className="btn-primary">
          Agende uma conversa
        </a>
      </div>

      <div className="absolute max-w-full bottom-0 opacity-70">
        <img className="max-w-full z-10 " src={HeroImg} alt="" />
      </div>
    </section>
  )
}

export default Hero
