import React from 'react'
import mobiles from "../images/mobile.png"



function ThirdPage() {
    return (
      <div className=' w-full mt-10  flex flex-col lg:flex-row justify-between'>
        <div className='lg:w-1/2'>
          <button className='text-white rounded-lg h-9 text-sm lg:text-lg w-32 lg:w-44 bg-green-700'>Why Tenants Pro</button>
          <div className='mt-4 lg:mt-2 text-3xl lg:text-5xl text-white font-bold'>
            <h1 className='leading-snug'>Easy To Find Out Tenant & </h1>
            <h1 className='md:leading-snug'>Supported LandLord</h1>
          </div>
          <div className='pr-4 lg:pr-10 mt-4 lg:mt-10 text-base lg:text-lg text-white'>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <p className='mt-4 lg:mt-10'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className=' sm:w-full p-10 lg:w-3/5 lg:p-14 flex justify-center items-start ali'>
          <img className='max-w-full' src={mobiles} alt="" />
        </div>
      </div>
    );
  }
  
  export default ThirdPage;
  