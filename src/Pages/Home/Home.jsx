import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    const data=useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Doctors doc={data}></Doctors>
        </div>
    );
};

export default Home;