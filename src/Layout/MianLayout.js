import React from 'react';
import Header from '../Pages/CommonComponent/Header';
import Footer from '../Pages/CommonComponent/Footer';
import { Outlet } from 'react-router-dom';

const MianLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MianLayout;