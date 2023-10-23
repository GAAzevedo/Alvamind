import Area2SobreItem from "./Area2SobreItem"

const Area2Sobre = () => {
  return (
    <section className="min-h-screen flex justify-center items-center py-24 px-4 mx-auto max-w-screen-xl sm:py-28 md:py-32 lg:py-36 sm:px-6 md:px-14 lg:px-20">
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
    </section>

  )
}

export default Area2Sobre