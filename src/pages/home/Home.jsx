import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";

const Home = () => {
    return <>
        <Header />

        <Outlet />
    </>
};

export default Home;