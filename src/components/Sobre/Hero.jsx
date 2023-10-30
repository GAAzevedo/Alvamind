import React from 'react'
import { YouTubeEmbed } from 'react-social-media-embed';

const Hero = () => {
    return (
        <section className="relative overflow-hidden h-[calc(100vh-72px)] flex justify-center items-center">
            <div className=''>
                <h2 className="mb-5 text-center text-3xl sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl text-zinc-200">Quem somos nós</h2>
                <p className="mb-1 text-base text-zinc-500 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">Exemplo exemploExemplo exemploExemplo exemploExemplo exemplo</p>
                <div className='flex justify-center'>
                    <YouTubeEmbed width={600} height={300} url="https://www.youtube.com/watch?v=HpVOs5imUN0"/>
                </div>
            </div>
        </section>
    )
}

export default Hero