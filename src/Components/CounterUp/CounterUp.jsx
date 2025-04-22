import React from 'react';
import successdoctor from '../../assets/success-doctor.png';
import CountUp from 'react-countup';

const CounterUp = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-4xl font-bold text-center'>We Provide Best Medical Services</h1>
      <p className='text-sm text-center mb-6'>
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
        <div className='border p-4 rounded-md text-center w-64 shadow-md'>
          <img src={successdoctor} alt="Doctor Icon" className="mx-auto w-16 h-16 mb-3" />
          <p className='font-medium text-lg mb-1'>Total Doctors</p>
          <div className='text-3xl font-bold text-blue-600'>
            <CountUp start={0} end={197} duration={5} enableScrollSpy />
          </div>
        </div>
        <div className='border p-4 rounded-md text-center w-64 shadow-md'>
          <img src={successdoctor} alt="Doctor Icon" className="mx-auto w-16 h-16 mb-3" />
          <p className='font-medium text-lg mb-1'>Total Reviews</p>
          <div className='text-3xl font-bold text-blue-600'>
            <CountUp start={0} end={197} duration={5} enableScrollSpy />
          </div>
        </div>
        <div className='border p-4 rounded-md text-center w-64 shadow-md'>
          <img src={successdoctor} alt="Doctor Icon" className="mx-auto w-16 h-16 mb-3" />
          <p className='font-medium text-lg mb-1'>Patients</p>
          <div className='text-3xl font-bold text-blue-600'>
            <CountUp start={0} end={197} duration={5} enableScrollSpy />
          </div>
        </div>
        <div className='border p-4 rounded-md text-center w-64 shadow-md'>
          <img src={successdoctor} alt="Doctor Icon" className="mx-auto w-16 h-16 mb-3" />
          <p className='font-medium text-lg mb-1'>Total Staffs</p>
          <div className='text-3xl font-bold text-blue-600'>
            <CountUp start={0} end={197} duration={5} enableScrollSpy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterUp;

