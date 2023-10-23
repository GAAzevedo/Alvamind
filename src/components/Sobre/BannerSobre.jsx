import React, { useEffect, useState } from 'react'
import btflyBanner from '../../assets/Imagens/bannerBtfly.png'
import btflyBannerSm from '../../assets/Imagens/bannerBtflySm.png'
import btflyBannerMd from '../../assets/Imagens/bannerBtflyMd.png'
import btflyBannerLg from '../../assets/Imagens/bannerBtflyLg.png'


const BannerSobre = () => {
    const [img, setImg] = useState(btflyBanner)
    useEffect(() => {
        let w = window.innerWidth;

        if (w >= 640) {
            setImg(btflyBannerSm);
        }
        if (w >= 768) {
            setImg(btflyBannerMd);
        }
        if (w >= 1024) {
            setImg(btflyBannerLg)
        }

    }, []);
    return (
        <section className='my-28'>
            <img className='my-8 mx-auto' src={img} alt="" />
        </section>
    )
}

export default BannerSobre