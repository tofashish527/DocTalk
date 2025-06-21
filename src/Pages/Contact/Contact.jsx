// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { useNavigate } from 'react-router';

// const Contact = () => {
//     const navigate = useNavigate();
//     return (
//       <Helmet>
//         <title>DocTalk | Contact</title>
//         <div className="min-h-screen bg-white flex flex-col justify-center items-center p-2 m-2">
//             <img src="https://i.ibb.co.com/W4WtWVrG/vector-illustration-onboarding-app-screens-web-concept-design-team-mobile-apps-flat-line-style-backg.webp" alt="" className='mb-1 w-4/12 h-2/12'/>
//       <h1 className="text-3xl font-bold text-blue-600 mb-2">404</h1>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
//       <p className="text-gray-600 mb-6 text-center max-w-md">
//         Oops! The page you are looking for doesn’t exist or has been moved. Let’s get you back home.
//       </p>
//       <button
//         onClick={() => navigate('/')}
//         className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700"
//       >
//         Go Back Home
//       </button>
//     </div>
//       </Helmet>
       
//     );
// };

// export default Contact;

import React from 'react';

const Contact = () => {
    return (
    
<div className="grid max-w-screen-xl mt-5 mb-5 grid-cols-1 gap-8 px-6 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">

  <div className="flex flex-col justify-between">
    <div className="space-y-4">
      <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
      <p className="text-gray-700">
        Feel free to talk to our online representative at any time you please using our Live Chat system on our website or one of the below instant messaging programs.
        <br />
        <br />
        Please be patient while waiting for response. <br />
        Phone General Inquiries: +1 (012) 345 6789
      </p>
      <div className="text-gray-600 font-medium">Get in touch.</div>
    </div>
  </div>

  
  <form noValidate className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="name" className="block mb-1 text-sm font-medium">Full name</label>
        <input
          id="name"
          type="text"
          className="w-full p-3 border rounded bg-white"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          className="w-full p-3 border rounded bg-white"
          placeholder="you@example.com"
        />
      </div>
    </div>

    <div>
      <label htmlFor="subject" className="block mb-1 text-sm font-medium">Subject</label>
      <input
        id="subject"
        type="text"
        className="w-full p-3 border rounded bg-white"
        placeholder="Subject"
      />
    </div>

    <div>
      <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
      <textarea
        id="message"
        rows="4"
        className="w-full p-3 border rounded bg-white"
        placeholder="Write your message here..."
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full p-3 bg-blue-900 text-white font-semibold rounded hover:bg-gray-400 transition"
    >
      Send Message
    </button>
  </form>
</div>

    );
};

export default Contact;