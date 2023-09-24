import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";

//Components
import Navbar from "../pages/Navbar";
import ProductDetails from "./ProductDetails";
import AboutUs from "../pages/AboutUs";
import Store from "./Store";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";


const MainPage = () => {
    return (<div>
        <Navbar/>
        <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/products" element={<Store/>}/>
            <Route path="/*" element={<Navigate to="/mainPage"/>}/>
        </Routes>
    </div>)
}

export default MainPage;