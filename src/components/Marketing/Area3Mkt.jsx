import React from "react"
import Area3MktItem from "./Area3MktItem"

const Area3Mkt = () => {
  return (
    <section className="section-test">
      <div className="container-test">
        <h3 className="text-center text-2xl sm:text-3xl md:mb-7 md:text-4xl lg:text-5xl dark:text-zinc-300 text-zinc-700">Estatísticas Cruciais para Empreendedores</h3>

        <div className="gap-8 mt-24 sm:grid grid-cols-2 sm:text-lg  ">
          <Area3MktItem title="Informações de contato" per="64" text="64% dos consumidores preferem encontrar informações de contato em um site, em comparação com outras fontes." />
          <Area3MktItem title="Pesquisa pré compra" per="88" text="Cerca de 88% dos consumidores pesquisam online antes de fazer uma compra. Ter um site aumenta a visibilidade do seu negócio e a chance de ser encontrado por potenciais clientes." />
          <Area3MktItem title="Credibilidade e Profissionalismo" per="75" text="75% das pessoas julgam a credibilidade de um negócio com base no design do seu site. Ter um site profissional e bem projetado pode aumentar a confiança dos clientes em sua marca." />
          <Area3MktItem title="Disponibilidade de negocio" per="39" text="Um site permite que seu negócio esteja disponível 24 horas por dia, 7 dias por semana. Isso pode levar a um aumento de até 39% nas vendas, já que os clientes podem acessar informações e fazer compras a qualquer momento." />
        </div>
      </div>
    </section>
  )
}

export default Area3Mkt
