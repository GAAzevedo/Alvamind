
import imgMobile from "../../assets/images/contatoHero1.jpg";
import imgDesktop from "../../assets/images/contatoHero2.png";

const Area1Contato = () => {
    return (
        <section className="relative overflow-hidden h-[calc(100vh-72px)] flex justify-center items-center">
            <img src={imgMobile} alt="" className='block sm:hidden h-full w-full' />
            <img src={imgDesktop} alt="" className='hidden sm:block h-full w-full' />
            <div className='absolute'>
            <h2 className="mb-5 text-center text-3xl sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl dark:text-zinc-200 text-zinc-800">Vamos conversar?</h2>
                <a href="https://api.whatsapp.com/send?phone=919819337"
                   className="btn-primary">
                    Agende uma conversa
                </a>
            </div>
        </section>
    )
}

export default Area1Contato