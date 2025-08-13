import React from 'react';
import MaskedDiv from './ui/masked-div';

const productImages = [
    "public/pd (1).jpg",
    "public/pd (3).jpg",
    "public/pd (10).jpg",
]

const BestProduct = () => {
    return (
        <div className='p-6 mt-12 space-y-6'>
            <div className='flex flex-col items-center'>
                <h1 className='text-6xl'>BEST PRODUCT</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {productImages.map((src, index) => (
                    <MaskedDiv key={index} maskType="type-1" className="rotate-180" backgroundColor="#f2f2f2" size={1}>
                        <img className="rotate-180" src={src} alt={`Product ${index + 1}`} />
                    </MaskedDiv>
                ))}
            </div>

        </div>
    );
};

export default BestProduct;