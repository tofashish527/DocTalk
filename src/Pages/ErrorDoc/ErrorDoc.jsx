import React from 'react';

const ErrorDoc = ({message}) => {
    const handleNavigation = () => {
        window.location.replace('/');
      };
    return (

        <div className="text-center mt-20 bg-white p-15">
            <p className='text-3xl font-bold mb-2'>No Doctor Found !!</p>
            <p>No Doctor found with this id</p>
            <h1 className="text-4xl font-bold text-red-600">{message}</h1>
            <button
        className="btn rounded-4xl text-white bg-blue-600 mt-5"
        onClick={() => handleNavigation()}>
        View All Doctors
      </button>
        </div>
    );
};

export default ErrorDoc;