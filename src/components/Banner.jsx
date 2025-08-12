import React from 'react';
import MaskedDiv from './ui/masked-div';
import bannerPic from "../../public/bannerpic.png"

const images = [
    "public/1.png",
    "public/2.png",
    "public/3.png",
    "public/4.png",
]

const ImageCard = ({ src, alt = "" }) => {
    return (
        <div className=" rounded-2xl ">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
        </div>
    );
};

const Banner = () => {
    return (
        <div className='px-6'>
            <div className='flex flex-col items-center gap-2 mb-4'>
                <p>REDEFINING RITUALS, ONE SIP AT A TIME </p>
                <h1 className='text-9xl'>ELEVATE YOUR EVERYDAY BREW</h1>
            </div>


            <MaskedDiv maskType="type-2" backgroundColor="#eee" size={1}>
                <img src={bannerPic} alt="Masked content" />
            </MaskedDiv>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-42 bg-white mt-12 p-6 rounded-2xl">
                {images.map((src, index) => (
                    <ImageCard key={index} src={src} alt={`Image ${index + 1}`} />
                ))}
            </div>

        </div>
    );
};

export default Banner;