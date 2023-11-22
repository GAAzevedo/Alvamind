import React from "react"

const Area4Mkt = () => {
  const texts = [
    {
      id: 1,
      text: "Contrate-nos para impulsionar sua empresa para novas alturas. Com estratégias de marketing personalizadas e comprovadas, estamos prontos para elevar sua visibilidade, atrair clientes qualificados e impulsionar seu crescimento de maneira exponencial. Sua jornada para o sucesso começa conosco"
    },
    {
      id: 2,
      text: "Com uma abordagem dinâmica e estratégias inovadoras, estamos prontos para transformar sua presença online. Nossa equipe especializada está focada em resultados tangíveis, proporcionando um impacto imediato e duradouro para o crescimento do seu negócio. Escolha uma parceria que transcende as expectativas e impulsione seu sucesso digital conosco"
    },
    {
      id: 3,
      text: "Diferenciamo-nos entregando resultados reais, não apenas promessas. Com análises de dados, estratégias fundamentadas e execução meticulosa, garantimos que cada centavo investido em marketing retorne como valor mensurável. Escolha a eficácia, escolha-nos para conduzir sua empresa ao sucesso"
    }
  ]
  return (
    <section className="section-test">
      <div className="container-test">
        <h3 data-aos="fade-up" data-aos-delay="100" className="mb-8 text-center text-2xl sm:text-3xl md:mb-20 md:text-4xl lg:text-5xl dark:text-zinc-300 text-zinc-700">Tríade do Sucesso: Por que Somos Sua Escolha Evidente</h3>

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

export default Area4Mkt
