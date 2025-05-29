import React from 'react';
import img from "../assets/em.png";

const EmptyTenant = () => {
    return (
        <div className="flex  items-center justify-center h-screen">
            <div className='max-w-[356px] p-1.5 text-center' >
                <img src={img} alt="image" className='mx-auto block'/>
                <h1 className='font-medium text-xl my-2.5'>
                    No Matches Found
                </h1>
                <p className='text-[#666] font-medium text-[16px] mb-6'>
                    We could not find any matches for your request
                </p>
            </div>
        </div>
    )
}
export default EmptyTenant;