import React from 'react';
import successdoctor from '../../assets/success-doctor.png';
import successreview from '../../assets/success-review.png';
import successpatients from '../../assets/success-patients.png';
import successstaff from '../../assets/success-staffs.png';
import CountUp from 'react-countup';

const CounterUp = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-4xl font-bold text-center'>We Provide Best Medical Services</h1>
      <p className='text-sm text-center mb-6'>
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
        <div className='bg-white p-6 rounded-md  w-64 shadow-md'>
          <img src={successdoctor} alt="Doctor Icon" className=" w-12 h-12 mb-3" />
          <div className='text-3xl font-bold text-blue-600'>
            <CountUp start={0} end={197} duration={5} enableScrollSpy />
            <span className="ml-1">+</span>
          </div>
          <p className='font-medium text-lg mb-1'>Total Doctors</p>
        </div>
        <div className='bg-white p-6 rounded-md  w-64 shadow-md'>
          <img src={successreview} alt="Doctor Icon" className=" w-12 h-12 mb-3" />
          <div className='text-3xl font-bold text-blue-600'>
            <CountUp start={0} end={467} duration={5} enableScrollSpy />
            <span className="ml-1">+</span>
          </div>
          <p className='font-medium text-lg mb-1'>Total Reviews</p>
        </div>
        <div className='bg-white p-6 rounded-md  w-64 shadow-md'>
          <img src={successpatients} alt="Doctor Icon" className=" w-12 h-12 mb-3" />
          <div className='text-3xl font-bold text-blue-600'>
            <CountUp start={0} end={1900} duration={5} enableScrollSpy />
            <span className="ml-1">+</span>
          </div>
          <p className='font-medium text-lg mb-1'>Patients</p>
        </div>
        <div className='bg-white p-6 rounded-md w-64 shadow-md'>
          <img src={successstaff} alt="Doctor Icon" className=" w-12 h-12 mb-3" />
          <div className='text-3xl font-bold text-blue-600'>
            <CountUp start={0} end={300} duration={5} enableScrollSpy />
            <span className="ml-1">+</span>
          </div>
          <p className='font-medium text-lg mb-1'>Total Staffs</p>
        </div>
      </div>
    </div>
  );
};

export default CounterUp;

