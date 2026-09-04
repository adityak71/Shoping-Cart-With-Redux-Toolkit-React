import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux"
import { add, remove } from "../redux/Slices/cartSlice";

const Products = ({item}) => {
  const {cart} = useSelector((state)=> state);
  const dispatch = useDispatch();


  function addToCart(){
    dispatch(add(item));
    toast.success("Item Added To Cart")
  }

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  }

  return (
    <div className="flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 ease-in shadow-2xl p-5 rounded-lg bg-slate-100 space-y-3 gap-3 mt-10 ml-5">

      <div className="text-grey-800 font-semibold text-lg truncate w-40 mt-1 text-left">
        <p>{item.title}</p>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>

      <div className="h-45">
        <img src={item.image} alt={item.title} className="w-full h-full"/>
      </div>

      <div className="flex justify-between items-center w-full mt-5">
        <p className="text-green-600 font-semibold">${item.price}</p>

        {
          cart.some((p)=>p.id == item.id) ? 
          (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-xs p-1 px-3 uppercase hover:text-white hover:bg-gray-700 hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in" onClick={removeFromCart}>Remove Item</button>) :
          (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-xs p-1 px-3 uppercase hover:text-white hover:bg-gray-700 hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in" onClick={addToCart}>Add to Cart</button>)
        }

      </div>

    </div>
  )
}

export default Products
