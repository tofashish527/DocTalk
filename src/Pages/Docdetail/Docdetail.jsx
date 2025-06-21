import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/AddToDB';
import ErrorDoc from '../ErrorDoc/ErrorDoc';



const Docdetail = () => {
    const navigate = useNavigate();
    const data=useLoaderData()
    const {id}=useParams()
    const singledoc=data.find(sdoc=>sdoc.id===parseInt(id))

    if (!singledoc) {
        return <ErrorDoc message={`ID-${id} `} />;
      }
    
    const {name,image,education,speciality,registrationNumber,workplace,availableDays,consultationFee}=singledoc
    //console.log(singledoc)
    const handleAppointment=()=>{
        // addToStoredDB(parseInt(id),name);
        const success = addToStoredDB(parseInt(id), name);
        if (success) {
          navigate('/doclist');
        }
    }

    return (
        <div className='p-1'>
            <div className='text-center mt-3 mb-3 bg-white p-5 rounded-xl'>
                <h1 className='text-3xl font-bold mt-2 mb-2'>Doctor's Profile Details</h1>
                <p className='text-sm mb-5 mt-1'>Health is not just about what you'r eating.It's also about what you'r thinking,saying and doing.A peaceful mind leads<br></br> to a healthy body.</p>
            </div>
            <div className='flex gap-10 mt-3 mb-3 bg-white p-10 rounded-xl'>
                <div className="p-5 flex justify-center items-center bg-gray-100 w-[400px]">
                    <img
                        src={image}
                        alt="Doctor"
                        className="object-contain"
                    />
                </div>
               <div>
                 <h1 className='text-4xl font-bold mt-4 mb-15'>{name}</h1>
                 <p className='text-sm mt-4 mb-1'>{education}</p>
                 <p className='text-sm mt-2 mb-1'>{speciality}</p>
                 <p className='text-sm mb-1 mt-15'>Working at <br></br><span className='font-bold text-xl mt-10'>{workplace}</span></p>
                 <div className='mt-16 mb-1 border-b-1 border-dashed'></div>
                 <p className=' mb-2 flex gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-plus-icon lucide-circle-plus w-5 h-5 mt-1"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>Reg-no : {registrationNumber}</p>
                 <div className='border-b-1 border-dashed mb-5'></div>
                 <div className="flex mt-15 mb-6 flex-wrap items-start">
  <span className="font-bold text-xl mt-1 mr-2">Availability:</span>
  <div className="flex flex-wrap gap-2 mt-1">
    {availableDays.map((day, index) => (
      <button
        key={index}
        className="bg-amber-100 text-amber-900 rounded-md px-3 py-1 text-sm"
      >
        {day}
      </button>
    ))}
  </div>
</div>

                 <p className='font-bold text-sm mt-15'>Consultation Fee : <span className='text-blue-400'>Taka : {consultationFee}</span> (incl. VAT) <span className='text-blue-500'>Per consultation</span></p>
               </div>
            </div>
            <div className='mt-4 mb-3 bg-white p-5 rounded-xl'>
                <h1 className='text-xl font-bold text-center mt-2 mb-3'>Book an Appointment</h1>
                <div className='border-b-1 border-dashed'></div>
                <div className='flex justify-between mt-4 mb-1'>
                    <p className='text-sm font-bold mt-2'>Availability</p>
                    <button className='bg-green-100 text-green-900 rounded-xl p-2 mb-2'>Doctor Available Today</button>
                </div>
                <div className='border-b-1 border-dashed'></div>
                <div role="alert" className="bg-warning/20 alert mt-5 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-warning h-6 w-6 shrink-0">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  <span className='text-amber-700'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</span>
</div>
                <button className='w-full rounded-4xl text-white bg-blue-600 p-2 mt-5 mb-7' onClick={()=>{handleAppointment();}}>Book Appointment Now</button>
            </div>
        </div>
        
    );
};

export default Docdetail;
