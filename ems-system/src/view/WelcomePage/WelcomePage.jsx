import React from 'react'
import Button from '../../Components/Button'
import { useNavigate } from 'react-router-dom'
import wallpaper from "../../images/wallpaper.png"


function WelcomePage() {


    const navigate = useNavigate()

    return (
        <div 
            className=' flex justify-center items-center bg-gray-900 bg-center bg-cover h-screen w-full'>
                <div><img src={wallpaper} alt="" /></div>

            <div className=' flex flex-col justify-center items-center gap-5 w-[500px] h-80 rounded-lg p-4 '>
                <h1 className='font-bold text-5xl text-white'>WELCOME TO EMS</h1>
                <div>
                    < Button text="Login" onClick={() => navigate("/signin")} />
                    < Button text="Signup" onClick={() => navigate("/registration")} />
                </div>

            </div>
        </div>
    )
}

export default WelcomePage
