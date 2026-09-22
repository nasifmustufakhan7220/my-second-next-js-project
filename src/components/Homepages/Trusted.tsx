import Image from 'next/image';
import React from 'react';
import bannerImg from "@/assets/ChatGPT Image Sep 22, 2026, 09_21_26 PM.png"
const Trusted = () => {
    return (
        <div>
            <Image src={bannerImg} alt='' className='max-w-full h-65 object-fill'/>
        </div>
    );
};

export default Trusted;