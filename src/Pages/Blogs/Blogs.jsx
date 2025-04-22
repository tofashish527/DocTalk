import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const data=useLoaderData();
    console.log(data)
    return (
        <div className=''>
            <h1 className='text-4xl font-bold mt-8 text-center'>Blogs</h1>
            <p className='text-sm mt-2 text-center mt-5'>Let's explore some basic concept that will make you a good developer</p>
            <div>
            {
                data.map(dt=><Blog key={dt.id} dt={dt}></Blog> )
            }
            </div>
        </div>
    );
};

export default Blogs;