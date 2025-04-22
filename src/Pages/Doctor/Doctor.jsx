
import React from 'react';

const Doctor = ({singledoc}) => {
    const {name,education,registrationNumber,speciality,experience,image}=singledoc;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-actions justify-start">
      <div className="badge badge-outline">Available</div>
      <div className="badge badge-outline">{experience} years experience</div>
    </div>
  <div className="card-body">
    <h2 className="card-title">
      {name}
    </h2>
    <p>{education}-{speciality}</p>
    <p>Reg No : {registrationNumber}</p>
     </div>
     <button className='btn rounded-4xl text-blue-600 border border-blue-600'>View Details</button>    
</div>

        </div>
    );
};

export default Doctor;