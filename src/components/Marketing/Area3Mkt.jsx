import React from "react"
import Area3MktItem from "./Area3MktItem"

const Area3Mkt = () => {
  return (
    <section className="section-test">
      <div className="container-test">
        <h3 data-aos="fade-up" data-aos-delay="100" className="text-center text-2xl sm:text-3xl md:mb-7 md:text-4xl lg:text-5xl dark:text-zinc-300 text-zinc-700">Estatísticas Cruciais para Empreendedores</h3>

        <div className="gap-8 mt-24 sm:grid grid-cols-2 sm:text-lg  ">
          <Area3MktItem title="Aumento da Visibilidade" per="90" text="90% das decisões de compra começam online. Ter uma agência de marketing garante que sua empresa esteja visível para o público certo no momento certo, aumentando as chances de conversão" />
          <Area3MktItem title="Engajamento Efetivo" per="85" text="85% dos consumidores esperam uma resposta em até 6 horas nas redes sociais. Uma agência dedicada pode gerenciar suas interações online, construindo relacionamentos sólidos e mantendo seu público engajado" />
          <Area3MktItem title="Construção de Autoridade" per="77" text="77% dos consumidores preferem comprar de marcas conhecidas. Estratégias de marketing consistentes constroem autoridade, estabelecendo sua empresa como referência no setor e gerando confiança" />
          <Area3MktItem title="Inovação Contínua" per="30" text="mpresas que adotam inovações em marketing têm um crescimento médio de 30% ao ano. Uma agência traz uma abordagem inovadora, incorporando as últimas tendências e tecnologias para manter sua empresa à frente da concorrência" />
        </div>
        
      </div>
    </section>
  )
}

export default Area3Mkt
