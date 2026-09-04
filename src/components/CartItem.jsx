import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";



const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();
  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item Removed from Cart");
  }
  return (
    <div>
      
      <div>
        <img src={item.image} alt={item.title} /> 
      </div>

      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
        <div>
          <p>{item.price}</p>
          <p>{itemIndex}</p>
          <div>
            <MdDelete onClick={removeFromCart} />
          </div>
        </div>
      </div>



    </div>
  )
}

export default CartItem
