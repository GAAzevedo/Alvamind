import foguete from '../../assets/Imagens/foguete.png'

const BannerRocket = () => {
  return (
    <section data-aos="fade-up" className="overflow-hidden relative ">
      <div className="mx-auto max-w-screen-xl sm:py-20 md:py-32 lg:py-40">
        <div className="relative flex items-center justify-start md:mx-16 my-20 md:my-0 img-promo h-56 md:h-96">
          <div className='absolute z-30 left-5 sm:left-14 md:left-8 lg:left-28 '>
            <p className='font-semibold text-white drop-shadow-2xl mb-6 sm:text-3xl md:text-3xl'>
              Você não deveria desperdiçar <br /> dinheiro em um  site que não gera <br /> nenhum valor para você.
            </p>
            <button type="button"
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Agende uma conversa
            </button>
          </div>
          <img src={foguete} className='absolute z-10 right-0 rotate-[345deg] -translate-y-4  translate-x-32 md:translate-x-24 lg:translate-x-0 scale-[0.45] sm:scale-[0.57]  md:scale-75 ' alt="" />
        </div>
      </div>
    </section>
  )
}

export default BannerRocket