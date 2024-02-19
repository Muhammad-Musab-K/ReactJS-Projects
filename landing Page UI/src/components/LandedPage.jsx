import React from 'react'
import vector from "../images/vector.png"
import tick from "../images/Frame.png"
import downArrow from "../images/arrow-down-right.png"
import house from "../images/house.png"
import family from "../images/family.png"
import vectorBackground from "../images/background.png"
import landedPage from "../images/landedPage.png"


function LandedPage() {
    return (
        <>
        <div className=''>
            <div className='w-full  flex justify-between mt-4   mb-10'>
                <div className='mainDiv flex flex-col items-start w-full md:w-1/2'>
                    <div className='logo flex items-center mb-4 md:mb-8 ml-2 md:ml-0'>
                        <img className='h-10 w-10' src={vector} alt="" />
                        <p className='text-white text-lg md:text-xl lg:text-2xl ml-2'>Tenant</p>
                    </div>

                    <div className='Heading mb-4 md:mb-8 mt-4 md:mt-10'>
                        <h1 className='text-green-600 text-3xl  2xl:text-6xl font-bold mb-2 md:mb-4 md:text-5xl'>Connecting</h1>
                        <h1 className='text-white text-3xl  2xl:text-6xl font-bold md:text-5xl'>Tenants Landlord</h1>
                    </div>

                    <div className='text text-sm md:text-lg lg:text-xl text-white leading-relaxed mb-4 md:mb-8'>
                        <p className='leading-6 md:leading-9'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>

                    <div className='List flex flex-wrap mb-4 md:mb-8'>
                        <ul className='text-sm md:text-lg lg:text-xl text-green-800 leading-8 mr-8 md:mr-14 mb-2 md:mb-0'>
                            <li className='flex items-center mb-2 md:mb-1 lg:mb-6'><img className='h-6 w-6 mr-2' src={tick} alt="" />Professional Landlord</li>
                            <li className='flex items-center mb-2 md:mb-1 lg:mb-6'><img className='h-6 w-6 mr-2' src={tick} alt="" />Easy to use</li>
                            <li className='flex items-center mb-2 md:mb-1 lg:mb-6'><img className='h-6 w-6 mr-2' src={tick} alt="" />24/7 Support</li>
                        </ul>
                        <ul className='text-sm md:text-lg lg:text-xl text-green-800 leading-8'>
                            <li className='flex items-center mb-2 md:mb-1 lg:mb-6'><img className='h-6 w-6 mr-2' src={tick} alt="" />Happy tenants</li>
                            <li className='flex items-center mb-2 md:mb-1 lg:mb-6'><img className='h-6 w-6 mr-2' src={tick} alt="" />Certified properties</li>
                            <li className='flex items-center mb-2 md:mb-1 lg:mb-6'><img className='h-6 w-6 mr-2' src={tick} alt="" />Dedicated team</li>
                        </ul>
                    </div>

                    <div className='scroll flex items-center mt-1 md:mt-4'>
                        <p className='text-lg md:text-xl lg:text-2xl text-white mr-2'>Scroll to learn more</p>
                        <img className='h-6 w-6' src={downArrow} alt="" />
                    </div>
                </div>

                <div className='mainDiv2  hidden md:flex w-1/2 lg:w-2/5 justify-center items-center lg:p-4 xl:10'>
                    <img className='' src={landedPage} alt="" />
                </div>
            </div>
            </div>
        </>
    );
}

export default LandedPage;
