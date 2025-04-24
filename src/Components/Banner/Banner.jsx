import React from 'react';
import banner from '../../assets/banner-img-1.png'
const Banner = () => {
    return (
        <div className='bg-gradient-to-b from-gray-200 to-white border-4 border-white rounded-xl p-8 shadow-md mt-1'>
            <div className='text-center'>
                 <h1 className='text-4xl font-bold mt-4 mb-4'>Dependable Care, Backed by Trusted<br></br> Professionals.</h1>
                 <p className='text-xm mt-5 mb-5 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a<br></br> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div >
            <div className='flex gap-2 justify-center mb-2 mt-2'>
            <input type="text" placeholder="Search Any Doctor..." className="input rounded-4xl w-2/3 mt-3 mb-5" />
            <button className="btn mt-3 mb-5 rounded-4xl text-white bg-blue-600">Search Now</button>
            </div>
            <div className='flex gap-3 mx-auto items-center justify-center'>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div>
                <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;