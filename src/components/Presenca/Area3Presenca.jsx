import React from "react";
import Area3PresencaItem from "./Area3PresencaItem";

const Area3Presenca = () => {
  return (
    <section className="overflow-hidden relative bg-white dark:bg-zinc-950">
      
      <div className=" px-4 mx-auto max-w-screen-xl sm:py-28 md:py-32  sm:px-6 md:px-14 lg:px-20 ">
      <p className=" text-4xl w-full text-center mb-32 dark:text-white text-zinc-950 ">Teste Titulo</p>
        <div className="  text-gray-500 gap-8 sm:grid grid-cols-2 sm:text-lg  ">
          {/*PARA COLOCAR O TESTO A DIREITA: align={"text-right"}*/}

          <Area3PresencaItem
            /*efeito data-aos----*/ leftorhight={"zoom-out-right"}
            /*Subtitulo----------*/ texto1="Titulo 1"
            /*texto principal----*/ texto2="Um site é como uma vitrine para sua empresa. É a primeira impressão que as pessoas terão de você, e é a maneira como elas saberão mais sobre o que você oferece.."
            /*Alinhamento texto--*/ align={"text-center"}
          />

          <Area3PresencaItem
            /*efeito data-aos----*/ leftorhight={"zoom-out-left"}
            /*Subtitulo----------*/ texto1="Titulo 2"
            /*texto principal----*/ texto2="Um site é uma ótima maneira de se conectar com seus clientes. Você pode usar o site para compartilhar informações sobre seus produtos ou serviços, para fornecer atendimento ao cliente e para gerar leads."
            /*Alinhamento texto--*/ align={"text-center"}
          />

          <Area3PresencaItem
            /*efeito data-aos----*/ leftorhight={"zoom-out-right"}
            /*Subtitulo----------*/ texto1="Titulo 2"
            /*texto principal----*/ texto2="Lorem20"
            /*Alinhamento texto--*/ align={"text-center"}
          />

          <Area3PresencaItem
            /*efeito data-aos----*/ leftorhight={"zoom-out-left"}
            /*Subtitulo----------*/ texto1="Titulo 2"
            /*texto principal----*/ texto2="teste"
            /*Alinhamento texto--*/ align={"text-center"}
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
        </div>
      </div>
    </section>
  );
};

export default Area3Presenca;
