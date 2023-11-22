import React from "react"
import Area3PresencaItem from "./Area3PresencaItem"

const Area3Presenca = () => {
  return (
    <section className="section-test">
      <div className="container-test">
        <h3 data-aos="fade-up" data-aos-delay="100"  className="text-center text-2xl sm:text-3xl md:mb-7 md:text-4xl lg:text-5xl dark:text-zinc-300 text-zinc-700">Estatísticas Cruciais para Empreendedores</h3>

        <div className="gap-8 sm:grid grid-cols-2 sm:text-lg  ">
          <Area3PresencaItem title="Aumento de Visibilidade Online" per="90" text="Transformamos sua presença digital, proporcionando um aumento significativo de visibilidade, chegando a impressionantes 90%. Seja facilmente encontrado por quem procura seus produtos ou serviços" />
          <Area3PresencaItem title="Engajamento nas Redes Sociais" per="75" text="Criamos estratégias envolventes que geram um aumento considerável de 75% no engajamento nas redes sociais. Sua marca se destaca em meio à concorrência" />
          <Area3PresencaItem title="Crescimento no Tráfego Orgânico" per="77" text="77% das pessoas julgam a credibilidade de um negócio com base no design do seu site. Ter um site profissional e bem projetado pode aumentar a confiança dos clientes em sua marca" />
          <Area3PresencaItem title="Satisfação Garantida na Gestão de Conteúdo" per="95" text="Nossa abordagem estratégica garante 95% de satisfação na gestão de conteúdo, assegurando que suas mensagens sejam impactantes e envolventes para conquistar seu público"/>
        </div>
      </div>
    </section>
  )
}

export default Area3Presenca
