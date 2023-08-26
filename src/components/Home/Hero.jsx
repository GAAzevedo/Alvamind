import React from "react";
import HeroImg from "../../assets/Imagens/01 copiar.png";

const Hero = () => {
  return (
    <section className="relative bg-white h-screen lg:h-[calc(100vh-72px)] lg:mt-[72px] flex items-center justify-center dark:bg-zinc-950">
      <div className="absolute z-20 px-4 text-center sm:px-6 md:px-14 lg:px-20">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Desenvolvemos o futuro da presença online
        </h1>
        <p className="mb-8 text-lg font-normal text-zinc-950 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          websites inovadores, funcionais e visualmente cativantes, Presença maxima nas Redes Sociais, vantagem em anunciosem cima de sesus concorrentes. Junte-se a nós para dar vida à sua visão digital
        </p>
        <button type="button"
          className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
          Agende uma conversa
        </button>
      </div>

      <div className="absolute max-w-full bottom-0 opacity-70">
        <img className="max-w-full z-10 " src={HeroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
