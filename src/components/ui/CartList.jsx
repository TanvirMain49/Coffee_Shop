
import CartCard from './CartCard';

const CartList = ({productList}) => {

    return (
        <div className="w-2/5 p-4 border border-primary rounded-lg">
            <h2 className="text-2xl mb-4">Items in Cart</h2>
            {productList.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {productList.map((product, index) => (
                        <CartCard
                            key={index}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartList;
