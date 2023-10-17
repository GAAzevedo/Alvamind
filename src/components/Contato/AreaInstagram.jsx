import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

const AreaInstagram = () => {
    return (
        <section className="relative bg-white dark:bg-zinc-930">
            <div className="py-24 px-4 mx-auto max-w-screen-xl sm:py-28 md:py-32 lg:py-36 sm:px-6 md:px-14 lg:px-20">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InstagramEmbed url="https://www.instagram.com/p/CyBXJyirSgN/?utm_source=ig_embed&utm_campaign=loading" width={328} />
                </div>
            </div>
        </section>
    )
}

export default AreaInstagram