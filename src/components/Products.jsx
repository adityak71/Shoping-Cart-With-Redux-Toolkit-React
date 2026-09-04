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
    <div>

      <div>
        <p>{item.title}</p>
      </div>

      <div>
        <p>{item.description}</p>
      </div>

      <div>
        <img src={item.image} alt={item.title}/>
      </div>

      <div>
        <p>{item.price}</p>
      </div>

      {
        cart.some((p)=>p.id == item.id) ? 
        (<button onClick={removeFromCart}>Remove Item</button>) :
        (<button onClick={addToCart}>Add to Cart</button>)
      }

    </div>
  )
}

export default Products
