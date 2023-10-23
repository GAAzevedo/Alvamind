import Area2SobreItem from "./Area2SobreItem"

const Area2Sobre = () => {
  return (
    <section className="section-test">
      <div className="container-test">
        <div className="grid md:grid-cols-3 justify-center gap-10">
          <Area2SobreItem
            title="titulo"
            text="Seu site deve ser um grande aliado na captação de clientes, não um peso morto, deixe nos mostrar como fazer."
            colorStart="#766BFB" />
          <Area2SobreItem
            title="titulo"
            text="Seu site deve ser um grande aliado na captação de clientes, não um peso morto, deixe nos mostrar como fazer."
            colorStart="#766BFB" />
          <Area2SobreItem
            title="titulo"
            text="Seu site deve ser um grande aliado na captação de clientes, não um peso morto, deixe nos mostrar como fazer."
            colorStart="#766BFB" />
        </div>
      </div>
    </section>

  )
}

export default Area2Sobre