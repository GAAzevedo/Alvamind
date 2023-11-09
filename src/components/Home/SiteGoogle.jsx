import React from 'react'
import googleUm from '../../assets/googleUm.png'
import googleUmW from '../../assets/googleUmW.png'
import googleDois from '../../assets/googleDois.png'

const SiteGoogle = () => {
    return (
        <section className="section-test">

            <div className="container-test">
                <div className='flex flex-col justify-center items-center mt-8 sm:mt-0'>
                    <h4 className="mb-3 text-center text-xl sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl dark:text-zinc-300 text-zinc-700">Seu site no Google</h4>
                    <p className="text-center mb-1 text-xl dark:text-zinc-500 text-zinc-600 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">
                        Destaque-se na multidão! Escolha nossa empresa e coloque a sua no topo do Google. Seja a primeira opção que os clientes veem e conquiste o sucesso online. Transforme sua presença digital conosco hoje!
                    </p>
                </div>

                <div className="justify-center items-center grid md:grid-cols-2">
                    
                    

                    <div className='flex justify-center items-center'>
                        <img className="hidden dark:block"src={googleUm} alt="" />
                        <img  className="block dark:hidden"src={googleUmW} alt="" />

                    </div>
                    
                    <div className='flex justify-center items-center'>
                        <img className=" w-10/12 lg:w-8/12"src={googleDois} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SiteGoogle