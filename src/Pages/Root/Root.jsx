import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

// const Root = () => {
//     return (
//         <div className='bg-gray-100'>
//              <div className='max-w-7xl mx-auto'>
//            <Navbar></Navbar>
//             <Outlet></Outlet>
//             <Footer></Footer>    
//         </div>
//         </div>
//     );
// };

// export default Root;

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <div className="max-w-7xl w-full mx-auto flex flex-col flex-1">
                <Navbar />
                <div className="flex-1">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};
export default Root;
