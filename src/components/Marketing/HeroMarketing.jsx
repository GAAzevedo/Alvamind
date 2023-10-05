import React, { useEffect, useState } from "react";
import BgBlack from "../../assets/Imagens/bg-black.png";
import BgWhite from "../../assets/Imagens/bg-white.png";
import BgBlackS from "../../assets/Imagens/bg-black-s.png";
import BgWhiteS from "../../assets/Imagens/bg-white-s.png";

const HeroMarketing = () => {
    const [img, setImg] = useState(BgBlackS);
    const [imgWhite, setImgWhite] = useState(BgWhiteS);
    useEffect(() => {
      let w = window.innerWidth;
  
      if (w >= 768) {
        setImgWhite(BgWhite)
        setImg(BgBlack);
      }
    }, []);
    
    return (
      <section className="relative overflow-hidden mt-[72px] lg:min-h-[calc(100vh-72px)] lg:mt-[72px] bg-white dark:bg-zinc-950">
        <div className="absolute flex  justify-center items-center h-full opacity-70">
          <img
            className="max-w-full z-10 hidden dark:block"
            src={img}
            alt=""
            width="1200"
          />
          <img
            className="max-w-full z-10 dark:hidden block"
            src={imgWhite}
            alt=""
            width="1200"
          />
        </div>
  
        <div className="grid mt-8 min-h-screen  lg:gap-8 xl:gap-0  lg:grid-cols-12 py-24 px-4 mx-auto max-w-screen-xl sm:py-28 md:py-32 lg:py-36 sm:px-6 md:px-14 lg:px-20">
          <div
            data-aos="fade-up"
            className="mr-auto place-self-center lg:col-span-8"
          >
            <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Seu negócio precisa de um site?
            </h1>
            <p className="leading-loose font-light md:text-2xl text-zinc-500  dark:text-zinc-400">
              Em um mundo cada vez mais digital, ter um site é essencial para
              qualquer empresa. Um site é a sua presença online, e é a maneira
              como você se conecta com seus clientes e potenciais clientes.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="" />
          </div>
        </div>
      </section>
    );
  };

export default HeroMarketing