import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";

const AdminPage = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <Home/>
        </div>
    )
}

export default AdminPage;