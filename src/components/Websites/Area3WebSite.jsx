import React from "react"

const Area3WebSite = () => {
  const texts = [
    {
      id: 1,
      text: "pariatur corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed, exercitationem sequi dolore culpa incidunt accusamus, quasi unde reprehenderit ea molestias."
    },
    {
      id: 2,
      text: "pariatur corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed, exercitationem sequi dolore culpa incidunt accusamus, quasi unde reprehenderit ea molestias."
    },
    {
      id: 3,
      text: "pariatur corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed, exercitationem sequi dolore culpa incidunt accusamus, quasi unde reprehenderit ea molestias."
    }
  ]
  return (
    <section className="section-test">
      <div className="container-test">
        <h3 class="mb-4 text-center text-2xl sm:text-3xl md:mb-12 md:text-4xl lg:text-5xl text-zinc-300">Teste Titulo</h3>

        <div className="bg-gradient-to-b from-zinc-500 from-10% via-white dark:via-zinc-950 to-transparent p-0.5 rounded-xl items-center justify-center flex">
          <div className="grid sm:grid-cols-3 gap-5 p-5 rounded-xl bg-white dark:bg-zinc-950">
            {texts.map((item) => (
              <div data-aos="fade-up" data-aos-delay="500" className="relative mt-20 sm:mt-0">
                <div className=" flex w-full justify-center items-center mb-4 absolute -top-14">
                  <span className=" dark:text-white text-zinc-950 text-2xl dark:bg-zinc-950 bg-white p-4">{item.id}</span>
                </div>
                <p class="text-center mb-1 text-base text-zinc-500 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Area3WebSite
