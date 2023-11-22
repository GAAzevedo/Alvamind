import React from 'react'

const Area1Sobre = () => {
    const texts = [
        {
            text: "Em meio às paisagens digitais, a Alvamind nasceu de uma visão compartilhada por uma equipe apaixonada por transformar sonhos em experiências online memoráveis. Não éramos apenas construtores digitais; éramos contadores de histórias digitais, e cada cliente que escolhia a Alvamind trazia consigo uma narrativa única a ser explorada"
        },
        {
            text: "Desde os primeiros dias, quando as sementes da Alvamind foram plantadas, nossa missão era ir além da construção de websites convencionais. Queríamos tecer uma presença digital que não apenas destacasse marcas, mas também contasse suas histórias de maneira autêntica. O caminho não foi fácil; enfrentamos desafios e aprendemos com cada experiência, mas cada obstáculo fortaleceu nosso compromisso com a integridade e a excelência"
        },
        {
            text: "Na Alvamind, não encaramos projetos como meros códigos e pixels; vemos oportunidades para criar uma conexão significativa entre marcas e seu público. Cada linha de código, cada estratégia de marketing, era uma expressão de nossa dedicação em oferecer soluções que transcendessem as expectativas. Sabíamos que a confiança de nossos clientes era algo a ser conquistado a cada interação"
        },
        {
            text:"Nossa abordagem transparente e comprometida com a honestidade se tornou a espinha dorsal de nossa reputação. Entendemos que a confiança é o alicerce sobre o qual construímos parcerias duradouras. Ao longo dos anos, cultivamos uma cultura onde a inovação coexiste com a ética de trabalho, e cada membro da equipe Alvamind é um guardião dedicado da confiança depositada em nós"
        },
        {
            text:"No núcleo da Alvamind, estamos unidos por uma paixão por contar histórias digitais que ressoam com autenticidade. A presença digital que construímos para nossos clientes não é apenas visual; é uma experiência envolvente que cativa e conecta. Quando você escolhe a Alvamind, está se associando a uma jornada onde cada projeto é uma oportunidade para transformar visões em realidade"
        },
        {
            text:"Em um mundo digital em constante evolução, a Alvamind não é apenas uma empresa de construção de websites, presença digital e marketing digital; somos arquitetos de histórias digitais, moldando o tecido digital com integridade, inovação e uma dedicação inflexível ao sucesso de cada cliente. Confie em nós para sermos os contadores de sua história digital, onde cada capítulo é escrito com confiança, paixão e excelência"
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