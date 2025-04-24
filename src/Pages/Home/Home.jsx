import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Doctors/Doctors';
import CounterUp from '../../Components/CounterUp/CounterUp';
import { Helmet } from "react-helmet";

const Home = () => {
    const data=useLoaderData();
   // console.log(data)
    return (
        <div>
            <Helmet>
        <title>MediConnect - Home</title>
      </Helmet>
            <Banner></Banner>
            <Doctors doc={data}></Doctors>
            <CounterUp></CounterUp>
        </div>
    );
};

export default Home;