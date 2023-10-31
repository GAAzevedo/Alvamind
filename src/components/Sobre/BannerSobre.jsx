import React, { useEffect, useState } from 'react'
import btflyBanner from '../../assets/images/bannerBtfly.png'
import btflyBannerSm from '../../assets/images/bannerBtflySm.png'
import btflyBannerMd from '../../assets/images/bannerBtflyMd.png'
import btflyBannerLg from '../../assets/images/bannerBtflyLg.png'
import btflyBannerXl from '../../assets/images/bannerBtflyXl.png'


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
        if (w >= 1280) {
            setImg(btflyBannerXl)
        }

    }, []);
    return (
        <section className='my-28'>
            <img className='my-8 w-full ' src={img} alt="" />
        </section>
    )
}

export default BannerSobre