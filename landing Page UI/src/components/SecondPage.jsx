import React from 'react'
import tick from "../images/Frame.png"
import banner from "../images/banner.png"

function SecondPage() {
    return (
        <>

            <div className=' w-full    mt-0 md:mt-5 '>
                <div className='container flex flex-col md:flex-row justify-between'>
                    <div className='heading '>
                        <h1 className='text-3xl md:text-4xl 2xl:text-6xl text-green-700 font-bold'>Available</h1>
                        
                        <h1 className='text-3xl md:text-4xl 2xl:text-6xl text-white font-bold'>On multiple Platform</h1>
                        <p className='text-base md:text-lg lg:text-xl md:leading:8 lg:leading-9 w-full md:w-[400] lg:w-[500px]   mt-4 md:mt-8 text-white leading-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>

                    <div className='box flex mt-10 md:mt-14 md:ml-10 '>
                        <div className='smallBox flex flex-col w-full md:w-56 lg:w-48 mr-4 lg:mr-10'>
                            <h1 className='underline text-xl md:text-2xl xl:text-4xl text-white mb-4'>Tenants</h1>
                            <p className='text-xs md:text-base text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            <ul className='text-xs md:text-lg mt-4 md:mt-6 text-green-800 leading-5'>
                                <li className='flex mt-1 '><img className='h-5 w-5 md:h-6 md:w-6' src={tick} alt="" />Professional Landlord</li>
                                <li className='flex mt-1 '><img className='h-5 w-5 md:h-6 md:w-6' src={tick} alt="" />Easy to use</li>
                            </ul>
                        </div>
                        <div className='smallBox flex flex-col md:w-56 lg:w-48 w-full '>
                            <h1 className='underline text-xl md:text-2xl xl:text-4xl text-white mb-4'>Landlord</h1>
                            <p className='text-xs md:text-base  text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            <ul className='text-xs md:text-lg mt-4 md:mt-6 text-green-800 leading-5'>
                                <li className='flex mt-1 '><img className='h-5 w-5 md:h-6 md:w-6' src={tick} alt="" />Professional Landlord</li>
                                <li className='flex mt-1 '><img className='h-5 w-5 md:h-6 md:w-6' src={tick} alt="" />Easy to use</li>
                                <li className='flex mt-1 '><img className='h-5 w-5 md:h-6 md:w-6' src={tick} alt="" />24/7 Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-full flex-col flex justify-center'>
                    <div className='flex justify-center mt-20  sm:mt-20 w-full'><img src={banner} alt="" /></div>
                    <div className='flex justify-center mt-6 md:mt-10 space-x-4'>
                        <button className='btn'>Web</button>
                        <button className='btn'>Google Play</button>
                        <button className='btn'>App Store</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SecondPage;

