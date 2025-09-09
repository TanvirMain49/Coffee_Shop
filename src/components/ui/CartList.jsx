import React from 'react';
import CartCard from './CartCard';

const CartList = () => {
    const productImages = [
        {
            image: "public/pd (1).jpg",
            title: "Iced Black Coffee with Lime",
            description: "Chilled black coffee with a twist of lime. Bright, zesty, and refreshing.",
            price: 3.5
        },
        {
            image: "public/pd (3).jpg",
            title: "Iced White Coffee with Oreo",
            description: "Creamy iced white coffee with Oreo. A perfect mix of coffee and dessert.",
            price: 4.5
        },
        {
            image: "public/pd (10).jpg",
            title: "Cinnamon Coffee",
            description: "Rich coffee infused with warm cinnamon. Comforting, aromatic, and lightly spiced.",
            price: 3.8
        },
    ];

    return (
        <div className="w-2/5 p-4">
            <h2 className="text-2xl mb-4">Cart</h2>
            <div className="space-y-4">
                {productImages.map((product, index) => (
                    <CartCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default CartList;
