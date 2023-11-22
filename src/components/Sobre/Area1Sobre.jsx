import React from 'react'

const Area1Sobre = () => {
    const texts = [
        {
            text: "Na Alvamind, acreditamos em transformar ideias em experiências online incríveis. Não somos apenas criadores digitais, somos arquitetos de ideias e transformamos a sua visão em uma experiência visual única e sofisticada."
        },
        {
            text: "Nossa missão é ir além da construção de websites convencionais. Queremos fazer uma presença digital que não apenas destaque marcas, mas também conte suas histórias de maneira autêntica. O caminho não é fácil, enfrentamos desafios e aprendemos com cada experiência, mas cada obstáculo fortalece nosso compromisso com a integridade e a excelência"
        },
        {
            text: "Na Alvamind, não encaramos projetos como meros códigos e pixels, vemos oportunidades para criar uma conexão significativa entre marcas e seu público. Cada linha de código, cada estratégia de marketing, é uma expressão de nossa dedicação em oferecer soluções que transcendessem as expectativas. Sabemos que a confiança de nossos clientes é algo a ser conquistado a cada interação"
        },
        {
            text:"Nossa abordagem transparente e comprometida com a honestidade é a espinha dorsal de nossa reputação. Entendemos que a confiança é o alicerce sobre o qual construímos parcerias duradouras. Cultivamos uma cultura em que a inovação coexiste com a ética de trabalho, e cada membro da equipe Alvamind é um guardião dedicado da confiança depositada em nós"
        },
        {
            text:"A presença digital que construímos para nossos clientes não é apenas visual; é uma experiência envolvente que cativa e conecta. Quando você escolhe a Alvamind, está se associando a uma jornada onde cada projeto é uma oportunidade para transformar visões em realidade"
        },
        {
            text:"Em um mundo digital em constante evolução, a Alvamind não é apenas uma empresa de construção de websites, presença digital e marketing digital. Confie em nós para sermos os contadores de sua história digital, onde cada capítulo é escrito com confiança, paixão e excelência"
        }
    ]

    return (
        <section className='section-test'>
            <div className='container-test'>
                <h3 className="mb-4 text-center text-2xl sm:text-3xl md:mb-7 md:text-4xl lg:text-5xl dark:text-zinc-300 text-zinc-700">A Alvamind: Tecendo Histórias Digitais com Integridade e Inovação</h3>

                {texts.map((item, index) => (
                    <div className='mb-4 text-center' key={index}>
                        <p className="mb-1 text-base dark:text-zinc-500 text-zinc-600 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Area1Sobre