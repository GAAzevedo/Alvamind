import React, { useState, useEffect } from 'react'
import { YouTubeEmbed } from 'react-social-media-embed'

const Hero = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    let videoWidth = 324

    if (windowWidth >= 1024) {
        videoWidth = 768
    } else if (windowWidth >= 768) {
        videoWidth = 640
    } else if (windowWidth >= 640) {
        videoWidth = 500
    }

    return (
        <section className="relative overflow-hidden h-[calc(100vh-72px)] flex justify-center items-center">
            <div>
                <h1 className="mb-6 text-center text-4xl sm:text-5xl md:mb-9 md:text-6xl lg:text-7xl dark:text-zinc-100 text-zinc-900">Quem somos nós</h1>
                <p className="text-center mb-1 text-base dark:text-zinc-500 text-zinc-600 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">Exemplo exemplo</p>
                <div className="flex justify-center">
                    <YouTubeEmbed
                        width={videoWidth}
                        height={350}
                        url="https://www.youtube.com/watch?v=HpVOs5imUN0"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
