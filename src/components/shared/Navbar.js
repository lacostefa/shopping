import React, {useContext} from "react";
import {Link} from "react-router-dom";
///Css
import "../../css/Navbar.scss";
///Icons
import shopCart from "../../icons/shop.svg";
import {CartContext} from "../../context/CartContextProvider";


const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className="container_">
            <div className="sigUp-login">
                <div className="signUp">
                    <Link to='/shopping/signup'>Sign Up</Link>
                </div>
                <div className="login">
                    <Link to='/shopping/login'>Login</Link>
                </div>
            </div>
            <div>
                <div className="about-product-">
                    <div className="cart">
                        <Link to='/shopping/cart'>
                            <img src={shopCart} alt="shopCart"/>
                        </Link>
                        <span>{state.itemsCounter}</span>
                    </div>
                    <div className="paddingFont">
                        <Link to="/shopping/aboutUs">About Us</Link>
                    </div>
                    <div className="paddingFont">
                        <Link to="/shopping/products">Products</Link>
                    </div>
                    <div className="paddingFont">
                        <Link to="/shopping/">Main Page</Link>
                    </div>
                    <div className="paddingFont">
                        <Link to="/shopping/adminPage">Admin Page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;