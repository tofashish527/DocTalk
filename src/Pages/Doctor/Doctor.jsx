
import React from 'react';
import { Link } from 'react-router';

const Doctor = ({singledoc}) => {
    const {name,education,registrationNumber,speciality,experience,image,id}=singledoc;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure className='w-10/12 bg-gray-100 mx-auto mt-5'>
    <img
      src={image}
      alt="Shoes" className='h-40'/>
  </figure>
  <div className="card-actions justify-start ml-8 mt-4">
      <div className="badge badge-outline bg-green-100 text-green-900">Available</div>
      <div className="badge badge-outline bg-blue-100 text-blue-900">{experience} years experience</div>
    </div>
  <div className="card-body">
    <h2 className="card-title text-xl font-bold">
      {name}
    </h2>
    <p className='text-sm font-medium'>{education}-{speciality}</p>
    <div className='border-b-1 border-dashed'></div>
    <p>Reg No : {registrationNumber}</p>
     </div>
     <Link to={`/docdetail/${id}`}>
     <button className='btn justify-center items-center flex w-10/12 m-4 mx-auto rounded-4xl text-blue-600 border border-blue-600'>View Details</button> </Link>
        
</div>

        </div>
    );
};

export default Doctor;