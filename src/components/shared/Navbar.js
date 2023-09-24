import React from "react";
import {Link} from "react-router-dom";

///Icons
import shopCart from "../icons/shop.svg";

const Navbar = () => {
    return (
        <div>
            <div>
                <button><Link to='/signup'>Sign Up</Link></button>
            </div>
            <div>
                <button><Link to='/login'>Login</Link></button>
            </div>
            <div>
                <Link to='/cart'><img src={shopCart} alt="shopCart"/></Link>
            </div>
            <div>
                <Link to="/aboutUs">About Us</Link>
            </div>
            <div>
                <Link to="/products">Products</Link>
            </div>
            <div>
                <Link to="/">Main Page</Link>
            </div>
        </div>
    )
}


export default Navbar;