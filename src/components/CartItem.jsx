import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";



const CartItem = ({item}) => {

  const dispatch = useDispatch();
  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
  }
  return (
    <div className="flex gap-8 items-center justify-center border-b-2 border-gray-900 rounded-lg p-5 m-5">
      
      <div className="h-48 w-48 flex items-center justify-center">
        <img className="h-full w-full object-contain" src={item.image} alt={item.title} /> 
      </div>

      <div className="flex-1 flex flex-col gap-4">

        <h1 className="text-grey-800 font-semibold text-lg">
          {item.title}
        </h1>

        <p className="text-gray-400 text-sm line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">

          <p className="text-green-600 font-semibold">
            ${item.price}
          </p>

          <button 
            className="flex p-2 bg-red-200 rounded-full hover:bg-red-400 hover:cursor-pointer animation hover:scale-105 transition-all duration-300 ease-in"
            onClick={removeFromCart} 
          >
            <MdDelete className="text-red-500 hover:text-red-800" size={22}/>
          </button>
        </div>
      </div>



    </div>
  )
}

export default CartItem
