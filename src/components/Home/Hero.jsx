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
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
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
