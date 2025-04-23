import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/AddToDB';


const Docdetail = () => {
    const navigate = useNavigate();
    const data=useLoaderData()
    const {id}=useParams()
    const singledoc=data.find(sdoc=>sdoc.id===parseInt(id))
    const {name,image,education,speciality,registrationNumber,workplace,availableDays,consultationFee}=singledoc
    //console.log(singledoc)
    const handleAppointment=(id)=>{
        addToStoredDB(id)
    }

    return (
        <div className='p-1'>
            <div className='text-center mt-3 mb-3 bg-white p-5 rounded-xl'>
                <h1 className='text-3xl font-bold mt-2 mb-2'>Doctor's Profile Details</h1>
                <p className='text-sm mb-5 mt-1'>Health is not just about what you'r eating.It's also about what you'r thinking,saying and doing.A peaceful mind leads<br></br> to a healthy body.</p>
            </div>
            <div className='flex gap-10 mt-3 mb-3 bg-white p-10 rounded-xl'>
               {/* <div className='p-5 items-center'>
                  <img src={image} className='max-w-[325px] max-h-[383px] object-contain'></img>
               </div> */}
                <div className="p-5 flex justify-center items-center bg-gray-100 w-[200px]">
                    <img
                        src={image}
                        alt=""
                        className="max-w-[325px] max-h-[383px] object-contain"
                    />
                </div>
               <div>
                 <h1 className='text-3xl font-bold mt-3 mb-2'>{name}</h1>
                 <p className='text-sm mb-1'>{education}</p>
                 <p className='text-sm mb-1'>{speciality}</p>
                 <p className='text-sm mb-1'>Working at <br></br><span className='font-bold text-xl'>{workplace}</span></p>
                 <div className='border-b-1 border-dashed'></div>
                 <p className='mt-2 mb-2'>Reg-no : {registrationNumber}</p>
                 <div className='border-b-1 border-dashed'></div>
                 <div className='flex mt-2 mb-2'>
                 <span className='font-bold text-xl'>Availability :</span>
                 <div className='flex  gap-2 ml-2'>
                 {
                        availableDays.map(day=> <button className='bg-amber-100 text-amber-900 rounded-xl p-1'>{day}</button>)
                    }
                 </div>
                 </div>
                 <p className='font-bold text-sm'>Consultation Fee : <span className='text-blue-400'>Taka : {consultationFee}</span> (incl. VAT) <span className='text-blue-500'>Per consultation</span></p>
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
                <button className='w-full rounded-4xl text-white bg-blue-600 p-2 mt-5 mb-7' onClick={()=>{handleAppointment(id);navigate('/doclist');}}>Book Appointment Now</button>
            </div>
        </div>
    );
};

export default Docdetail;