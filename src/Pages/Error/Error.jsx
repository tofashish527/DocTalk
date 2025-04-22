import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved. Let’s get you back home.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
      >
        Go to Homepage
      </button>
    </div>
    </div>
  );
};

export default Error;