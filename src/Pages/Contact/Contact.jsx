import React from 'react';
import Error from '../Error/Error';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center p-6 m-3">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved. Let’s get you back home.
      </p>
    </div>
    );
};

export default Contact;