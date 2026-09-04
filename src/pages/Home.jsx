import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";
import Products from "../components/Products";

const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);

  async function fetchProductData(){
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPost(data);
    } catch(error) {
      console.log("Error happend on Api calling: ", error)
      setPost([]);
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
          posts.length > 0 ? 
            posts.map((post)=>(
              <Products key={post.id} post={post}/>
            ))
          : 
          <NotFound/>
      }
    </div>
  )
}

export default Home
