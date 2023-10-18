import React from 'react'

import imgMobile from "../../assets/Imagens/contatoHero1.jpg";
import imgDesktop from "../../assets/Imagens/contatoHero2.png";

const Area1Contato = () => {
    return (
        <section className="relative overflow-hidden h-[calc(100vh-72px)] flex justify-center items-center">
            <img src={imgMobile} alt="" className='block sm:hidden h-full w-full' />
            <img src={imgDesktop} alt="" className='hidden sm:block h-full w-full' />
            <div className='absolute'>
                <p className='text-white font-bold text-3xl mb-4 font-test'>Let's have a talk</p>
                <button type="button"
                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Agende uma conversa
                </button>
            </div>
        </section>
    )
}

export default Area1Contato