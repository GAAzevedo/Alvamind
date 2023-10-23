import React from 'react'
import { YouTubeEmbed } from 'react-social-media-embed';

const Hero = () => {
    return (
        <section className="relative overflow-hidden h-[calc(100vh-72px)] flex justify-center items-center">
            <div className=''>
                <p className='flex justify-center items-center text-white font-bold text-3xl mb-8'>Quem somos nós?</p>
                <p className='flex justify-center items-center text-center text-white text-md p-7 mb-4 '>desempregados Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={325} height={320} />
                </div>

                <div className='relative flex justify-center mt-10 gap-2'>
                    <div class="w-3 h-3 self-start rounded-full bg-[conic-gradient(#020024,#090979,#00a3c4)]"></div>
                    <div class="w-10 h-10 self-center rounded-full p-4 bg-[conic-gradient(#020024,#090979,#00a3c4)]"></div>
                    <div class="w-4 h-4 self-end rounded-full bg-[conic-gradient(#020024,#090979,#00a3c4)]"></div>
                </div>
            </div>
            
            
        </section>
    )
}

export default Hero