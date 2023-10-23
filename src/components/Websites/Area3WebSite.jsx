import React from "react";
import Area3WebSiteItem from "./Area3WebSiteItem";

const Area3WebSite = () => {
  return (
    <section className="overflow-hidden relative bg-white dark:bg-zinc-950">
      
      <div className=" px-4 mx-auto max-w-screen-xl sm:py-28 md:py-32  sm:px-6 md:px-14 lg:px-20 ">
      <p className=" text-4xl w-full text-center mb-10 mt-20 dark:text-zinc-100 text-zinc-950 ">Estatísticas Cruciais para Empreendedores</p>
        
        <div className="  text-gray-500 gap-8 sm:grid grid-cols-2 sm:text-lg  ">
          <Area3WebSiteItem title="Informações de contato" per="64" text="64% dos consumidores preferem encontrar informações de contato em um site, em comparação com outras fontes."/>
          <Area3WebSiteItem title="Pesquisa pré compra" per="88" text="Cerca de 88% dos consumidores pesquisam online antes de fazer uma compra. Ter um site aumenta a visibilidade do seu negócio e a chance de ser encontrado por potenciais clientes."/>
          <Area3WebSiteItem title="Credibilidade e Profissionalismo" per="75" text="75% das pessoas julgam a credibilidade de um negócio com base no design do seu site. Ter um site profissional e bem projetado pode aumentar a confiança dos clientes em sua marca."/>
          <Area3WebSiteItem title="Disponibilidade de negocio" per="39" text="Um site permite que seu negócio esteja disponível 24 horas por dia, 7 dias por semana. Isso pode levar a um aumento de até 39% nas vendas, já que os clientes podem acessar informações e fazer compras a qualquer momento."/>
        </div>
      </div>
    </section>
  );
};

export default Area3WebSite;
