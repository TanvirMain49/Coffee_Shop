import CartCard from "@/components/ui/CartCard";
import CartList from "@/components/ui/CartList";


const Cart = () => {
    return (
        <div className="p-6 mx-40">
            <h1 className="text-3xl font-bold">Your Cart</h1>
            <p className="mt-2 text-gray-600">Items you’ve added will appear here.</p>

            <div className="flex w-full gap-4">

                <div className="h-[500px] w-3/5 flex items-center justify-center bg-amber-600">
                    <h2 className="text-5xl">FORM</h2>
                </div>


                <CartList></CartList>
            </div>


        </div>
    );
};

export default Cart;
