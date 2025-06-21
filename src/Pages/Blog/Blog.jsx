import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = ({dt}) => {
    const {question,answer}=dt;
    return (
        <Helmet>
            <title>DocTalk | Blogs</title>
            <div className='bg-white mt-5 mb-3 p-6 rounded-2xl'>
            <h1 className='mb-2 text-xl font-bold'>{question}</h1>
            <div className='border-b-1 border-dashed'></div>
            <p className='mt-1 text-blue-600 text-md font-bold'>Answer : </p>
            <p className='mt-1'>{answer}</p>
            <div className='border-b-1 border-dashed mt-2'></div>
            <p className='mt-2'>Added at : 2025-4-22</p>
        </div>
        </Helmet>
      
    );
};

export default Blog;