import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";

//Components
import SignUp from "./SignUp";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import AboutUs from "./AboutUs";
import Products from "./Products";

const MainPage = () => {
    return (<div>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/productDetails" element={<ProductDetails/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="*" element={<Navigate to="/mainPage"/>}/>
        </Routes>
        <div>mainPage</div>
        <div>Icons</div>
    </div>)
}

export default MainPage;