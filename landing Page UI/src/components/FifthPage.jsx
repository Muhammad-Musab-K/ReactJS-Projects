import React from 'react'
import screen from "../images/screen.png"

// function FifthPage() {
//   return (
//     <>
//       <div className=' ml-8 mr-8 w-full mt-10 px-20 flex justify-between'>
//         <div className='w/12'><img src={screen} alt="" /></div>
//         <div className='ThirdPageHeading w-1/2'>
//           <button className=' text-white rounded-lg h-9 w-44 bg-green-700'>Vendor Management</button>
//           <div className='mt-2 text-5xl text-white font-bold'><h1 className='leading-snug'>All in one,
//             Landlord Management
//             System</h1>


//           </div>
//           <div className='pr-10'>
//             <p className='mt-4 text-xl text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
//             </p>
//             <p className='mt-10 text-xl text-white'>
//               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
//           </div>

//         </div>

//       </div>
//     </>
//   )
// }

// export default FifthPage

function FifthPage() {
  return (
    <div className='w-full mt-2 flex flex-col-reverse lg:flex-row justify-between items-center'>
      <div className='lg:w-1/2 flex flex-col justify-end '>
        <img className='max-w-full' src={screen} alt="" />
      </div>
      <div className='lg:w-1/2 lg:ml-6'>
        <button className='text-white rounded-lg h-9 lg:w-44 text-sm lg:text-lg w-40 bg-green-700 mb-4 lg:mb-0'>Vendor Management</button>
        <div className='text-3xl lg:text-5xl text-white font-bold'>
          <h1 className='leading-snug'>All in one, Landlord Management System</h1>
        </div>
        <div className='pr-4 lg:pr-10 mt-4 lg:mt-8 text-base lg:text-xl text-white'>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <p className='mt-4 lg:mt-10'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FifthPage;

