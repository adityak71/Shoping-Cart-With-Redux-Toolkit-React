import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import Products from "../components/Products";

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchProductData(){
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setItems(data);
    } catch(error) {
      console.log("Error happend on Api calling: ", error)
      setItems([]);
    }
    setLoading(false);
  }

  useEffect ( () =>{
    (()=>fetchProductData())()
  },[])

  return (
    <div>
      {
        loading ? 
          <Spinner/> 
          : 
          items.length > 0 ? 
          ( <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto my-5 space-y-10 space-x-5 min-h-[80vh]">
            {
              items.map((item)=>(
                <Products key={item.id} item={item}/>
              ))
            }
          </div>)
          : 
          <NotFound/>
      }
    </div>
  )
}

export default Home
