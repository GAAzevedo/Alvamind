import React, { useEffect, useState } from 'react'
import analyticsGoogle from '../../assets/certificados/analyticsGoogle.svg'
import googlePartner from '../../assets/certificados/googlePartner.svg'
import lines from '../../assets/certificados/lines.svg'
import linesXl from '../../assets/certificados/linesXl.svg'
import metaBusiness from '../../assets/certificados/metaBusiness.svg'
import rdStation from '../../assets/certificados/rdStation.svg'
import rockCont from '../../assets/certificados/rockCont.svg'


import analyticsGoogleW from '../../assets/certificados/analyticsGoogleW.svg'
import googlePartnerW from '../../assets/certificados/googlePartnerW.svg'
import metaBusinessW from '../../assets/certificados/metaBusinessW.svg'
import rdStationW from '../../assets/certificados/rdStationW.svg'
import rockContW from '../../assets/certificados/rockContW.svg'

const Certification = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [line, setLine] = useState(lines)

  useEffect(() => {
    const handleWindowResize = () => {
      const newWidth = window.innerWidth
      setWindowWidth(newWidth)
      setLine(newWidth >= 768 ? linesXl : lines)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <section className="bg-white dark:bg-zinc-950 relative overflow-hidden py-20">
      <div className="px-4 mx-auto max-w-screen-xl py-28 md:py-32 sm:px-6 md:px-14 lg:px-20 flex justify-center">
        <div className=" w-[1000px] overflow-x-scroll z-10 flex  lg:justify-center   gap-10 no-scroll">
          <img className="hidden dark:block" src={analyticsGoogle} alt="" />
          <img className="hidden dark:block" src={googlePartner} alt="" />
          <img className="scale-125 hidden dark:block" src={metaBusiness} alt="" />
          <img className="hidden dark:block" src={rdStation} alt="" />
          <img className="hidden dark:block" src={rockCont} alt="" />
          <img className="block dark:hidden" src={analyticsGoogleW} alt="" />
          <img className="block dark:hidden" src={googlePartnerW} alt="" />
          <img className="scale-125 block dark:hidden" src={metaBusinessW} alt="" />
          <img className="block dark:hidden" src={rdStationW} alt="" />
          <img className="block dark:hidden" src={rockContW} alt="" />
        </div>
      </div>
      <img
        src={line}
        alt=""
        className="z-0 opacity-50 absolute scale-150 w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      />
    </section>
  )
}

export default Certification
