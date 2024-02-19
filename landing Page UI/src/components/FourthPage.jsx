import React from 'react'
import mobile from "../images/pictures.png"



function FourthPage() {
  return (
    <div className=' w-full mt-2 lg:mt-4 flex flex-col lg:flex-row justify-between'>
      <div className='w-full lg:w-1/2'>
        <button className='text-white rounded-lg h-9 w-44 bg-green-700'>Tenant</button>
        <div className='mt-2 lg:pr-10 text-3xl lg:text-5xl text-white font-bold'>
          <h1 className='leading-snug'>House Problem Lets Solve It Together</h1>
        </div>
        <div className='lg:pr-10 mt-4 lg:mt-10 text-sm lg:text-xl text-white'>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <p className='mt-2 lg:mt-4'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div className='w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0'>
        <img src={mobile} alt="" />
      </div>
    </div>
  );
}

export default FourthPage;
