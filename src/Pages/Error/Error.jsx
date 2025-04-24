import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar></Navbar>
            <div className=" bg-white flex flex-col justify-center items-center p-3 mt-6">
                <img src="https://i.ibb.co.com/yFsz41Qm/404-status-code.png" alt="" className='w-5/12 h-3/12' />
      <p className="text-gray-600 text-xl mb-6 text-center max-w-md font-bold mt-4">
        Ooops! The page you are looking for doesn’t exist or has been moved. Let’s get you back home.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700"
      >
        Go to Home
      </button>
    </div>
    </div>
  );
};

export default Error;