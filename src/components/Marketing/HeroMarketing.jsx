import React, { useEffect, useState } from "react"
import BgBlack from "../../assets/images/bg-black.png"
import BgWhite from "../../assets/images/bg-white.png"
import BgBlackS from "../../assets/images/bg-black-s.png"
import BgWhiteS from "../../assets/images/bg-white-s.png"

const HeroMarketing = () => {
  const [img, setImg] = useState(BgBlackS)
  const [imgWhite, setImgWhite] = useState(BgWhiteS)
  useEffect(() => {
    let w = window.innerWidth

    if (w >= 768) {
      setImgWhite(BgWhite)
      setImg(BgBlack)
    }
  }, [])

  return (
    <section className="relative overflow-hidden mt-[72px] h-[calc(100vh-72px)] lg:min-h-[calc(100vh-72px)] lg:mt-[72px] bg-white dark:bg-zinc-950 flex items-center">
      <div className="absolute flex justify-center items-center h-full opacity-70">
        <img
          className="max-w-full z-10 hidden dark:block"
          src={img}
          alt=""
          width="1200"
        />
        <img
          className="max-w-full z-10 dark:hidden block"
          src={imgWhite}
          alt=""
          width="1200"
        />
      </div>

      <div className="container-test">

        <div data-aos="fade-up" className="sm:w-7/12">
          <h1 className="mb-6 text-4xl sm:text-5xl md:mb-9 md:text-6xl lg:text-7xl dark:text-zinc-100 text-zinc-900">Seu Negócio Está Pronto para Conquistar a Internet?</h1>

          <p className="mb-1 text-base dark:text-zinc-300 text-zinc-600 sm:mb-3 sm:text-lg md:mb-5 md:text-xl lg:mb-7 lg:text-2xl">
          Explore o extraordinário mundo do marketing digital. Juntos, vamos criar uma história envolvente para o seu negócio online.
          </p>
        </div>

      </div>
    </section>
  )
}

export default HeroMarketing