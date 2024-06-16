import { Link } from "react-router-dom";
import React from "react";
import { ShoppingCart} from "phosphor-react";
import './Navbar.css';
import logo from '../assets/logo-1.png'
const Navbar = () =>{
    return (
        <div className="navbar">
          <img src={logo} alt="logo" className="img"/>
            <div className="links">
                <Link to='/' title="Shop">Shop</Link>
                <Link to='/cart' title="Cart"><ShoppingCart size={32} className="cart-icon"/></Link>
            </div>
        </div>
    );
}

export default Navbar;