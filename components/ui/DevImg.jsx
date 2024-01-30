import React from 'react';
import Image from 'next/image'

// components

const DevImg = ({containerStyles, imgSrc}) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} objectFit='cover' fill priority alt='profile-image'/>
        </div>
    )
}

export default DevImg
