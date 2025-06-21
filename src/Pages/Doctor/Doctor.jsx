
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
      alt="Doctors" className='h-40'/>
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
    <p className='flex gap-1 mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus-icon lucide-circle-plus w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>Reg No : {registrationNumber}</p>
     </div>
     <Link to={`/docdetail/${id}`}>
     <button className='btn justify-center items-center flex w-10/12 m-4 mx-auto rounded-4xl text-blue-600 border border-blue-600'>View Details</button> </Link>
        
</div>

        </div>
    );
};

export default Doctor;