import React from "react";

///Components
import SignUp from "./SignUp";
import Login from "./Login";
import {Link} from "react-router-dom";

///Icons
import shopCart from "/src/icons/shop.svg";

const Navbar = () => {
    return (
        <div>
            <div>
                <button><Link to='/signup'>Sign Up</Link></button>
            </div>
            <div>
                <button><Link to='login'>Login</Link></button>
            </div>
            <div>
                <Link to='/cart'><img src={shopCart} alt="shopCart"/></Link>
            </div>
        </div>
    )
}


export default Navbar;