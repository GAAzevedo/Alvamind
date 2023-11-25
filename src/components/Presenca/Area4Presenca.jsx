import React from "react"

const Area4Presenca = () => {
  const texts = [
    {
      id: 1,
      text: "Dê um salto em visibilidade! Vamos transformar a sua presença digital, destacando sua marca em todos os cantos da internet. Seja notado, seja lembrado!."
    },
    {
      id: 2,
      text: "Construiremos uma presença online envolvente e autêntica. Não apenas capturamos cliques, mas também corações. Transforme seguidores em clientes leais com conteúdo que ressoa."
    },
    {
      id: 3,
      text: "Não queremos apenas impressões, queremos resultados tangíveis. Trabalhamos para transformar curtidas em conversões. Deixe-nos guiar sua empresa para um sucesso digital palpável!."
    }
  ]
  return (
    <section className="section-test">
      <div className="container-test">
        <h3 data-aos="fade-up" data-aos-delay="100"  className="mb-8 text-center text-2xl sm:text-3xl md:mb-20 md:text-4xl lg:text-5xl dark:text-zinc-300 text-zinc-700">Conquiste o Digital com a Nossa Experiência!</h3>

        <div className="bg-gradient-to-b from-zinc-500 from-10% via-white dark:via-zinc-950 to-transparent p-0.5 rounded-xl items-center justify-center flex">
          <div className="grid sm:grid-cols-3 gap-5 p-5 rounded-xl bg-white dark:bg-zinc-950">
            {texts.map((item, index) => (
              <div key={index} data-aos="fade-up" data-aos-duration="3000" className="relative mt-20 sm:mt-0">
                <div className=" flex w-full justify-center items-center mb-4 absolute -top-14">
                  <span className=" dark:text-white text-zinc-950 text-2xl dark:bg-zinc-950 bg-white p-4">{item.id}</span>
                </div>
                <p className="text-center mb-1 text-base dark:text-zinc-500 text-zinc-600 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">{item.text}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Area4Presenca
