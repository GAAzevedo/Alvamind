import React from 'react'
import banner from '../../assets/Imagens/banner2.png'
import foguete from '../../assets/Imagens/foguete.png'


const Area5WebSite = () => {
  return (

    <section data-aos="fade-up" className="overflow-hidden relative ">


      <div className="mx-auto max-w-screen-xl sm:py-20 md:py-32 lg:py-40 sm:px-12 md:px-14 lg:px-36 ">
        <div className=" items-center justify-center flex">
          <img src={banner} alt="" ></img>
          <img className='absolute flex items-end' src={foguete} alt="" />
          <p className='absolute flex-auto items-center sm:py-24 md:py-36 lg:py-40 px-20 sm:px-16 md:px-20 lg:px-40'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, pariatur accusamus deleniti sint quaerat assumenda est eum laboriosam dolorem maxime veritatis tempore exercitationem.</p>

        </div>
        

      </div>
      </section>
  )
}

export default Area5WebSite