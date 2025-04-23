import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const ErrorDoc = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1>No Doctor Found</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorDoc;