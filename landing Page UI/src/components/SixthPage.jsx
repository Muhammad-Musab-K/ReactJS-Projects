import React from 'react'
import coma from "../images/coma.png"
import coma2 from "../images/coma2.png"
import stars from "../images/stars.png"

// function SixthPage() {
//     return (
//         <>
//             <div className='flex px-20 flex-col'>
//                 <div className='ml-10 text-5xl font-bold leading-snug'><h1 className='text-green-700'>Customers thoughts </h1>
//                     <h1 className='text-white'>PlayStore and AppStore</h1>
//                 </div>
//                 <div className='flex justify-center mt-10 px-20 h-64'>
//                     <div className='flex'>
//                         <div className='flex float-start h-64'><img className='w-10 h-12' src={coma} alt="" /></div>
//                         <div className='w-96 mx-10 flex flex-col justify-center'>
//                             <h1 className='text-white text-3xl'>John Doe</h1>
//                             <div className=''><img src={stars} alt="" /></div>
//                             <p className='leading-7 text-sm text-white '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
//                         </div>
//                     </div>
//                     <div className='flex'>
//                         <div className='w-96 h-64 flex flex-col justify-center mx-10 '>
//                             <h1 className='text-white text-3xl'>John Doe</h1>
//                             <div className=''><img className='' src={stars} alt="" /></div>
//                             <p className='leading-7 text-sm text-white '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
//                         </div>
//                         <div className="h-64 flex flex-col justify-end">
//                             <img className="w-10 h-12" src={coma2} alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SixthPage


function SixthPage() {
    return (
        <div className='flex flex-col  mt-20 '>
            <div className=' text-3xl md:text-4xl 2xl:text-6xl font-bold leading-snug'>
                <h1 className='text-green-700'>Customers thoughts</h1>
                <h1 className='text-white'>PlayStore and AppStore</h1>
            </div>
            <div className=' w-full  flex flex-col md:flex-row  justify-center mt-10 px-4 lg:px-20'>
                <div className='flex'>
                    <div className='hidden md:flex  lg:h-64 lg:mr-4'>
                        <img className='w-10 h-12' src={coma} alt="" />
                    </div>
                    <div className='w-full lg:w-96 mx-4 lg:mx-10 mt-4 lg:mt-0 flex flex-col justify-center'>
                        <h1 className='text-white text-xl lg:text-3xl'>John Doe</h1>
                        <div className=''><img src={stars} alt="" /></div>
                        <p className='text-base lg:text-xl text-white leading-6 lg:leading-7 mt-2'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full lg:w-96 h-40 lg:h-64 mx-4 lg:mx-10 mt-4 lg:mt-0 flex flex-col justify-center'>
                        <h1 className='text-white text-xl lg:text-3xl'>John Doe</h1>
                        <div className=''><img src={stars} alt="" /></div>
                        <p className='text-base lg:text-xl text-white leading-6 lg:leading-7 mt-2'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                    <div className=' hidden md:flex lg:h-64 ml-4 lg:ml-0 flex-col justify-end'>
                        <img className='w-10 h-12' src={coma2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SixthPage;





