//  import React, { useEffect, useState } from 'react';
//  import { useLoaderData, useNavigate } from 'react-router';
// import { getStoredDoc } from '../../Utility/AddToDB';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
// const Doclist = () => {
//     const navigate = useNavigate();
//     const data=useLoaderData();
//     const [doclist,setDoclist]=useState([])
//     //console.log(data)
//     useEffect(()=>{
//         const storedDocData=getStoredDoc();
//         const ConvertedStoredDoc=storedDocData.map(id=>parseInt(id))
//         const myDoclist=data.filter(doc=>ConvertedStoredDoc.includes(doc.id))
//         //console.log(myDoclist)
//         setDoclist(myDoclist)
        
//     },[data])
//     return (
        
  
//   <div>
//       {
//     doclist.length > 0 ? (
//     <ul>
//         {doclist.map(doc => (
//             <> 
//             <div>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Bar dataKey="fee" fill="#8884d8">
//                   {chartData.map((_, index) => (
//                     <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//                   ))}
//                 </Bar>
//               </BarChart>
//             </ResponsiveContainer>
//             </div> 
//             <div key={doc.id} className='rounded-xl bg-white mt-5 p-5'>
//                 <div className='flex justify-between '>
//                 <div>
//                 <p className='font-bold text-xl'>{doc.name}</p>
//                 <p>{doc.education}-{doc.speciality}</p>
//                 </div>
//                 <div>
//                     <p>Appointment Fee : {doc.consultationFee} Taka + Vat.</p>
//                 </div>
//                 </div>
//                 <button className='w-full rounded-4xl text-red-600 border border-red-600 p-2 mt-5 mb-7'>Cancel Appointment</button>
//             </div>
//             </>
            
           
            
//             // Or use your Doctor component: <Doctor key={doc.id} doctor={doc} />
//         ))}
//     </ul>
// ) : (
//     <div className='text-center'>
//         <h1 className='text-3xl font-bold mt-5'>You Have Not Booked Any Appointment Yet</h1>
//         <p className='text-sm mt-5'>Our platform connects you with verified , experienced doctors across various specialities- all at your convenience.</p>
//         <button className='w-4/12 rounded-4xl text-white bg-blue-600 p-2 mt-5 mb-7' onClick={() => navigate('/')}>Book Appointment Now</button>
//         </div>
// )}
//   </div>

    
//     );
// };

// export default Doclist;

import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { getStoredDoc } from '../../Utility/AddToDB';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const Doclist = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const [doclist, setDoclist] = useState([]);

  useEffect(() => {
    const storedDocData = getStoredDoc();
    const ConvertedStoredDoc = storedDocData.map(id => parseInt(id));
    const myDoclist = data.filter(doc => ConvertedStoredDoc.includes(doc.id));
    setDoclist(myDoclist);
  }, [data]);

  // Create chart data from doclist
  const chartData = doclist.map(doc => ({
    name: doc.name,
    fee: doc.consultationFee,
  }));

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div>
      {doclist.length > 0 ? (
        <>
          {/* Render BarChart once, above list */}
          <div className="my-10">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="fee" fill="#8884d8" shape={<TriangleBar />}>
                  {chartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* List of doctors with cancel buttons */}
          <ul>
            {doclist.map(doc => (
              <div key={doc.id} className="rounded-xl bg-white mt-5 p-5">
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold text-xl">{doc.name}</p>
                    <p>{doc.education} - {doc.speciality}</p>
                  </div>
                  <div>
                    <p>Appointment Fee : {doc.consultationFee} Taka + Vat.</p>
                  </div>
                </div>
                <button className="w-full rounded-4xl text-red-600 border border-red-600 p-2 mt-5 mb-7">
                  Cancel Appointment
                </button>
              </div>
            ))}
          </ul>
        </>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mt-5">You Have Not Booked Any Appointment Yet</h1>
          <p className="text-sm mt-5">
            Our platform connects you with verified, experienced doctors across various specialities — all at your convenience.
          </p>
          <button className="w-4/12 rounded-4xl text-white bg-blue-600 p-2 mt-5 mb-7" onClick={() => navigate('/')}>
            Book Appointment Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Doclist;
