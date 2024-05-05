import React from "react";
import {  Outlet } from 'react-router-dom';
import { Header } from "../Header/Header";
import { Footer } from "../Header/Footer";
// import { Loader } from "components/Loader/Loader"


export const Layout = () => {

    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>)
}