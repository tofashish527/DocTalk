import React from 'react';
import { useNavigate } from 'react-router';

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center p-2 m-2">
            <img src="https://i.ibb.co.com/W4WtWVrG/vector-illustration-onboarding-app-screens-web-concept-design-team-mobile-apps-flat-line-style-backg.webp" alt="" className='mb-1 w-4/12 h-2/12'/>
      <h1 className="text-3xl font-bold text-blue-600 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved. Let’s get you back home.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700"
      >
        Go Back Home
      </button>
    </div>
    );
};

export default Contact;