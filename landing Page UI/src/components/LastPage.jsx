import React from 'react'
import image from "../images/mobileOnHand.png"
import vector from "../images/vector.png"



function LastPage() {
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='smallsize flex justify-center  lg:p-10 2xl:p-40'>
                    <div className='flex bg-green-600 rounded-lg flex-col lg:flex-row'>
                        <div className='p-6 lg:p-10 '>
                            <div className='flex  flex-col items-center lg:justify-start lg:items-start'>
                                <h1 className='text-slate-950 text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-bold leading-normal'>Inchance your home journey</h1>
                                <h1 className='text-white text-3xl md:text-4xl 2xl:text-6xl font-bold'>with our mobile apps</h1>
                            </div>
                            <div className='flex justify-center lg:justify-start'>
                                <p className='leading-7 xl:leading-9 w-full lg:w-3/4 text-xs sm-text-base lg:text-xl mt-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                            <div className='mt-8 justify-center lg:justify-start lg:mt-10 flex'>
                                <button className= 'h-7 w-28 sm:h-10 lg:h-14 sm:w-44 lg:w-56 bg-black rounded-lg m-2 lg:m-3 text-white text-base lg:text-xl'>Play Store</button>
                                <button className='h-7 w-28 sm:h-10 lg:h-14 sm:w-44 lg:w-56 bg-black rounded-lg m-2 lg:m-3 text-white text-sm sm:text-base lg:text-xl'>Apple</button>
                            </div>
                        </div>
                        <div className='hidden w-4/6 lg:flex lg:h-full lg:flex-col lg:justify-end justify-center lg:mr-16'><img className='h-5/6 w-full p-0 mb-0' src={image} alt="" />
                        </div>
                    </div>
                </div>
                <div className='bg-green-600 w-full md:h-16 mt-20 flex flex-col md:flex-row justify-between items-center px-4 lg:px-14'>
                    <div className='flex justify-center items-center mb-2 lg:mb-0 lg:pr-8'>
                        <p className='text-base lg:text-xl'>2023. All rights reserved</p>
                    </div>
                    <div className='logo flex justify-center items-center mb-2 lg:mb-0'>
                        <img className='h-7 w-7' src={vector} alt="" />
                        <p className='text-base lg:text-xl mt-1 ml-1'>Tenant</p>
                    </div>
                    <div className='flex items-center justify-center '>
                        <ul className='flex lg:h-auto flex-col justify-center items-center md:flex-row md:justify-between lg:items-center'>
                            <li className='mx-1 lg:mx-3 text-base lg:text-xl mb-2 lg:mb-0'>Terms of Service</li>
                            <li className='mx-1 lg:mx-3 text-base lg:text-xl mb-2 lg:mb-0'>Privacy Policy</li>
                            <li className='mx-1 lg:mx-3 text-base lg:text-xl mb-2 lg:mb-0'>Cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LastPage;

