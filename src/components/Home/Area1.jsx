import React, { useEffect } from "react";
import Area1Item from "./Area1Item";
import "./Area1.css"


const Area1 = () => {
  return (
    <section className="relative bg-white dark:bg-zinc-930">
      <div className="py-24 px-4 mx-auto max-w-screen-xl sm:py-28 md:py-32 lg:py-36 sm:px-6 md:px-14 lg:px-20">
        <div className="butterfly max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            
            {/*PARA COLOCAR O TESTO A DIREITA: align={"text-right"}*/}

            <Area1Item  /*Titulo*/texto3="Redes Sociais"
                        /*Subtitulo*/texto1="Transformando Ideias em Experiências Digitais Memoráveis" 
                        /*texto principal*/texto2="Descubra como nossa equipe de especialistas em desenvolvimento web pode transformar suas ideias em postagens incríveis e funcionais que cativam seus visitantes desde a primeira visita."/> 
                                    
            
            <Area1Item  /*Titulo*/texto3="Websites"
                        /*Subtitulo*/texto1="Web Além dos Limites: Inovação, Estética e Funcionalidade" 
                        /*texto principal*/texto2="Explore um mundo onde o design web vai além da superfície. Junte-se a nós para criar plataformas que não apenas impressionam visualmente, mas também proporcionam uma experiência de usuário intuitiva e envolvente."
                        align={"text-right"}/>

            <Area1Item  /*Titulo*/texto3="Gestão de tráfego"
                        /*Subtitulo*/texto1="Estratégias para atrair e converter visitantes em clientes" 
                        /*texto principal*/texto2="A gestão de tráfego é uma ferramenta poderosa para aumentar as vendas de uma empresa. Com as estratégias corretas, é possível atrair e converter visitantes em clientes, gerando leads e vendas."
                        /> 

            
        </div>
      </div>
    </section>
  );
};

export default Area1;
