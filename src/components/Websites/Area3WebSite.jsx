import React from "react";
import Area3WebSiteItem from "./Area3WebSiteItem";

const Area3WebSite = () => {
  return (
    <section className="relative bg-white dark:bg-zinc-930">
      <div className="py-24 px-4 mx-auto max-w-screen-xl sm:py-28 md:py-32 lg:py-36 sm:px-6 md:px-14 lg:px-20">
        <div className=" text-gray-500 sm:text-lg">
          {/*PARA COLOCAR O TESTO A DIREITA: align={"text-right"}*/}

          <Area3WebSiteItem 
            /*Subtitulo*/ texto1="Titulo 1"
            /*texto principal*/ texto2="Um site é como uma vitrine para sua empresa. É a primeira impressão que as pessoas terão de você, e é a maneira como elas saberão mais sobre o que você oferece.."
            align={"text-center"}
          />
          {/* <div className="drop-shadow-2xl flex justify-center items-center relative m-4">
            <div
              data-aos="fade-up"
              className="absolute w-2 h-2 rounded-full dark:bg-white bg-zinc-930 top-0"
            ></div>
            <div
              data-aos="fade-up"
              className="w-0.5 h-32 dark:bg-white bg-zinc-930"
            ></div>
          </div> */}

          <Area3WebSiteItem
            /*Subtitulo*/ texto1="Titulo 2"
            /*texto principal*/ texto2="Um site é uma ótima maneira de se conectar com seus clientes. Você pode usar o site para compartilhar informações sobre seus produtos ou serviços, para fornecer atendimento ao cliente e para gerar leads."
            align={"text-center"}
          />
          {/* <div className="drop-shadow-2xl flex justify-center items-center relative m-4">
            <div
              data-aos="fade-up"
              className="absolute w-2 h-2 rounded-full dark:bg-white bg-zinc-930 top-0"
            ></div>
            <div
              data-aos="fade-up"
              className="w-0.5 h-32 dark:bg-white bg-zinc-930"
            ></div>
            </div> */}

          <Area3WebSiteItem
            /*Subtitulo*/ texto3="Titulo 3"
            /*texto principal*/ texto4="Um site pode ajudá-lo a aumentar suas chances de sucesso. Ele pode ajudar você a atrair novos clientes, a aumentar as vendas e a melhorar a sua imagem de marca."
            align={"text-center"}
          />


          
        </div>
      </div>
    </section>
  );
};

export default Area3WebSite;
