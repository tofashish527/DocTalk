import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='bg-gray-100'>
             <div className='max-w-7xl mx-auto'>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>    
        </div>
        </div>
    );
};

export default Root;