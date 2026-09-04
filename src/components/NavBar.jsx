import { HiShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";



const NavBar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div>

      <nav className="flex justify-between items-center h-14 max-w-6xl mx-auto px-2 text-white">

        <NavLink to="/">
          <div>
            <img 
              height={50}
              width={50}
              src="public/logo.png" 
              alt="Logo"
            />
          </div>
        </NavLink>
        
        <div className="flex gap-5 text-lg items-center font-medium">

          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <HiShoppingCart />
              {
                cart.length > 0 && (
                  <span className="absolute -top-2.5 -right-1 bg-green-600 text-xs rounded-full text-white h-4 w-4 flex items-center justify-center animate-bounce">
                    {cart.length}
                  </span>
                )
              }
            </div>
          </NavLink>
            
        </div>

      </nav>
    </div>
  )
}

export default NavBar
