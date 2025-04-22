import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            
        </div>
    );
};

export default Home;