import React, { useEffect, useState } from "react";
import { InstagramEmbed } from 'react-social-media-embed';
import BgWhite from '../../assets/Imagens/bg-white.png';
import BgBlack from '../../assets/Imagens/bg-black.png';
import BgBlackS from "../../assets/Imagens/bg-black-s.png";
import BgWhiteS from "../../assets/Imagens/bg-white-s.png";

const AreaInstagram = () => {
    const [img, setImg] = useState(BgBlackS);
    const [imgWhite, setImgWhite] = useState(BgWhiteS);
    useEffect(() => {
      let w = window.innerWidth;
  
      if (w >= 768) {
        setImgWhite(BgWhite)
        setImg(BgBlack);
      }
    }, []);

    return (
        <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
            
            <div className="absolute translate-x-96 z-0 flex  justify-center  items-center h-full opacity-40">
                <img
                className="max-w-full z-10 hidden dark:block"
                src={img}
                 alt=""
                 width="1400"
            />
                <img
                 className="max-w-full z-10 dark:hidden block"
                 src={imgWhite}
                 alt=""
                 width="1400"
             />
             </div>

             <div className="absolute -translate-x-96 -translate-y-72 z-0 flex  justify-center  items-center h-full opacity-40">
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

            <div className="py-24 px-4 mx-auto max-w-screen-xl sm:py-28 md:py-32 lg:py-36 sm:px-6 md:px-14 lg:px-20 z-50">
                <div className="z-50" style={{ display: 'flex', justifyContent: 'center' }}>
                    <InstagramEmbed url="https://www.instagram.com/p/CyBXJyirSgN/?utm_source=ig_embed&utm_campaign=loading" width={528} />
                </div>
            </div>
        </section>
    )
}

export default AreaInstagram