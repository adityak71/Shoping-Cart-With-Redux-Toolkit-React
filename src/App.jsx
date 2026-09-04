import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


export default function App() {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-slate-700 shadow-md">
        <NavBar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}
