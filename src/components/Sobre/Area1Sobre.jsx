import React from 'react'

const Area1Sobre = () => {
    const texts = [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos saepe iste adipisci provident id molestias unde soluta, inventore rerum quae in. Sequi nulla necessitatibus cupiditate, neque consectetur sunt adipisci quos et!"
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos saepe iste adipisci provident id molestias unde soluta, inventore rerum quae in. Sequi nulla necessitatibus cupiditate, neque consectetur sunt adipisci quos et!"
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos saepe iste adipisci provident id molestias unde soluta, inventore rerum quae in. Sequi nulla necessitatibus cupiditate, neque consectetur sunt adipisci quos et!"
        }
    ]

    return (
        <section className='section-test'>
            <div className='container-test'>
                <h3 class="mb-4 text-center text-2xl sm:text-3xl md:mb-7 md:text-4xl lg:text-5xl text-zinc-300">Título H3</h3>
                {texts.map((item) => (
                    <div className='mb-4 text-center'>
                        <p class="mb-1 text-base text-zinc-500 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">{item.text}</p>
                    </div>
                ))}
            </div>
<<<<<<< HEAD
        </section>
    )
=======
        </section>          

  )
>>>>>>> c408622767a84f6f7388b77d6547d6f8ef4b00c7
}

export default Area1Sobre