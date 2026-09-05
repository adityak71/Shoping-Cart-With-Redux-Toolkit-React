import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const totalAmount = cart.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      {cart.length > 0 ? (

        <div className="max-w-7xl mx-auto">

          {/* Page Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Shopping Cart
          </h1>

          {/* Main Cart Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-4">

              <div className="border-b pb-4 mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Your Cart
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  {cart.length} {cart.length === 1 ? "item" : "items"}
                </p>
              </div>

              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}

            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-md p-6 h-fit">

              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-600 mb-4">
                <span>Total Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="border-t pt-4 flex justify-between">
                <span className="text-lg font-semibold">
                  Total Amount
                </span>

                <span className="text-lg font-bold text-green-600">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>

              <button
                className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg
                           font-semibold
                           hover:bg-green-700
                           hover:cursor-pointer
                           animation hover:scale-105
                           transition-all duration-300"
              >
                Checkout Now
              </button>

            </div>

          </div>
        </div>

      ) : (

        /* Empty Cart */
        <div className="min-h-[70vh] flex flex-col items-center justify-center">

          <h1 className="text-4xl font-bold text-gray-800">
            Cart is Empty
          </h1>

          <p className="text-gray-500 mt-3">
            You haven't added anything to your cart yet.
          </p>

          <Link to="/">
            <button
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg
                         font-semibold
                         hover:bg-blue-700
                          hover:cursor-pointer
                         animation hover:scale-105
                         transition-all duration-300"
            >
              Continue Shopping
            </button>
          </Link>

        </div>

      )}

    </div>
  );
};

export default Cart;