import foguete from '../../assets/Imagens/foguete.png'
import ButtonRocket from '../Buttons/ButtonRocket'

const BannerRocket = () => {
  return (
    <section data-aos="fade-up" className="overflow-hidden relative ">
      <div className="mx-auto max-w-screen-xl sm:py-20 md:py-32 lg:py-40">
        <div className="relative flex items-center justify-start md:mx-16 my-20 md:my-0 img-promo h-56 md:h-96">
          <div className='absolute z-30 left-5 sm:left-14 md:left-8 lg:left-28 '>
            <p className='font-semibold text-white drop-shadow-2xl mb-6 sm:text-3xl md:text-3xl'>
              Você não deveria desperdiçar <br /> dinheiro em um  site que não gera <br /> nenhum valor para você.
            </p>
           <ButtonRocket text="Agende uma conversa"/>
          </div>
          <img src={foguete} className='absolute z-10 right-0 rotate-[345deg] -translate-y-4  translate-x-32 md:translate-x-24 lg:translate-x-0 scale-[0.45] sm:scale-[0.57]  md:scale-75 ' alt="" />
        </div>
      </div>
    </section>
  )
}

export default BannerRocket