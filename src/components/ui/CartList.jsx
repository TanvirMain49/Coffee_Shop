import CartCard from './CartCard';
import { Trash2 } from 'lucide-react';

const CartList = ({ productList, updateItemQuantity, removeItem }) => {
  return (
    <div className="lg:w-2/5 p-4 border border-primary rounded-lg h-fit">
      <h2 className="text-2xl mb-4 font-semibold">Items in Cart</h2>
      {productList.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
          <p className="text-gray-400 text-sm mt-2">Add some delicious coffee to get started!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {productList.map((product, index) => (
            <div key={`${product.id}-${index}`} className="relative">
              <CartCard
                index={index}
                image={product.photo_url || product.image}
                title={product.name || product.title}
                description={product.description}
                price={parseFloat(product.price)}
                quantity={product.quantity}
                updateQuantity={updateItemQuantity}
              />
              {/* Remove Item Button */}
              <button
                onClick={() => removeItem(index)}
                className="absolute top-2 right-2 p-1 text-primary hover:text-primary/50 hover:bg-red-50 rounded-full transition-colors"
                title="Remove item"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartList;