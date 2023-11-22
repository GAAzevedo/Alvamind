import Area2SobreItem from "./Area2SobreItem"

const Area2Sobre = () => {
  return (
    <section className="section-test">
      <div className="container-test">
        <div className="grid md:grid-cols-3 justify-center gap-10">
          <Area2SobreItem
            title="Construção de Websites"
            text="Na essência da Alvamind, a construção de websites transcende o simples ato de codificação. Somos artesãos digitais, moldando não apenas páginas, mas experiências únicas que refletem a alma de cada cliente. Cada linha de código é entrelaçada com dedicação, resultando não apenas em sites, mas em portais digitais que ecoam autenticidade e inovação. Em cada projeto, somos mais do que construtores; somos contadores de histórias digitais, dando vida à visão única de cada cliente"
            link="/alvamind/website"
            colorStart="#766BFB" />
          <Area2SobreItem
            title="Marketing Digital"
            text="No universo dinâmico do marketing digital, a Alvamind se destaca como contadores de histórias digitais excepcionais. Vemos cada campanha como um capítulo único, uma oportunidade para criar impacto e destacar as nuances distintas de cada marca. Nossa abordagem vai além das métricas; estamos comprometidos em criar narrativas digitais envolventes que transcendem as expectativas. Ao escolher a Alvamind, você não apenas investe em marketing digital, mas se junta a uma jornada onde cada estratégia é uma expressão autêntica do seu sucesso digital"
            link="/alvamind/marketing"
            colorStart="#766BFB" />
          <Area2SobreItem
            title="Presença Digital"
            text="A presença digital que cultivamos na Alvamind vai além de meras impressões online. É um mergulho profundo na autenticidade, onde cada interação é uma oportunidade para construir conexões genuínas. Na Alvamind, entendemos que a presença digital não é apenas visibilidade, é uma narrativa em constante evolução. Nosso compromisso é criar uma presença digital que não apenas destaque, mas ressoe, conectando marcas ao seu público de maneiras significativas"
            link="/alvamind/presenca"
            colorStart="#766BFB" />
        </div>
      </div>
    </section>

  )
}

export default Area2Sobre