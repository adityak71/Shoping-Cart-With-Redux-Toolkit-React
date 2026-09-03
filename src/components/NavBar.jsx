import { HiShoppingCart } from "react-icons/hi2";
import { NavLink } from "react-router-dom";



const NavBar = () => {
  return (
    <div>

      <div className="flex justify-between">

        <NavLink to="/">
          <div>
            <img src="https://juststickers.in/product/redux-sticker/"/>
          </div>
        </NavLink>
        
        <div>

          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <HiShoppingCart />
          </NavLink>
            
        </div>

      </div>
    </div>
  )
}

export default NavBar
