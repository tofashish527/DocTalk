import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Doctors/Doctors';
import CounterUp from '../../Components/CounterUp/CounterUp';

const Home = () => {
    const data=useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Doctors doc={data}></Doctors>
            <CounterUp></CounterUp>
        </div>
    );
};

export default Home;