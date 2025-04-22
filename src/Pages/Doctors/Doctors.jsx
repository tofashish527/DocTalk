import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({doc}) => {
    const [displaydoc,setDisplayDoc]
    =useState([])
    const [showAll,setShowAll]=useState(false)
    useEffect(()=>{
        if(showAll){
            setDisplayDoc(doc)
        }
        else{
            setDisplayDoc(doc.slice(0,6))
        }
    },[doc,showAll])
    useEffect(()=>{
        setDisplayDoc(doc.slice(0, 6))
    },[])
    return (
        <>
        <div className='mt-3 pt-5'>
            <h1 className='text-3xl font-bold text-center'>Our Best Doctors</h1>
            <p className='text-sm text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a<br></br> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
        {
            displaydoc.map(singledoc=> <Doctor singledoc={singledoc} key={doc.id}></Doctor>)
        }
        </div>
        <div className="flex justify-center my-4">
            <button  className="btn rounded-4xl text-white bg-blue-600" onClick={()=>{
                setShowAll(!showAll)
                if(showAll) window.scrollTo(0,400)
                }}>{showAll?'Show Less' : 'Show All'}</button>
        </div>
        </>
    );
};

export default Doctors;
