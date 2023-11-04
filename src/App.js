import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";

///Contexts
import ContextProductsProvider from "./context/ContextProductsProvider";
import CartContextProvider from "./context/CartContextProvider";

///Components
import Navbar from "./components/shared/Navbar";
import SignUp from "./components/shared/SignUp";
import Login from "./components/shared/Login";
import ProductDetails from "./components/shared/ProductDetails";
import AboutUs from "./components/shared/AboutUs";
import Store from "./components/shared/Store";
import ShopCart from "./components/shared/ShopCart";
import AdminPage from "./components/adminPage/AdminPage";
import MainPage from "./components/shared/MainPage";


function App() {
    return (
        <div className="App">
            <ContextProductsProvider>
                <CartContextProvider>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/products/:id" element={<ProductDetails/>}/>
                        <Route path="/aboutUs" element={<AboutUs/>}/>
                        <Route path="/products" element={<Store/>}/>
                        <Route path="/cart" element={<ShopCart/>}/>
                        <Route path="/*" element={<Navigate to="/mainPage"/>}/>
                        <Route path="/adminPage" element={<AdminPage/>}/>
                    </Routes>
                </CartContextProvider>
            </ContextProductsProvider>
        </div>
    );
}

export default App;
