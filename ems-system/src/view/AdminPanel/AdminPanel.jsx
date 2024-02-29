
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import wallet from "../../images/wallet.png"
import adduser from '../../images/adduser.png'
import employees from "../../images/employees.png"
import task from "../../images/task.png"
import admin from '../../images/admin.png'

import Box from "../../Components/Box"

export default function AdminPanel() {
    const navigate = useNavigate()

   
    return (
        <>

            <div className="min-h-full">


                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Admin Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div className="flex bg-gray-800  mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        <div className='flex items-center flex-wrap gap-8'>
                            < Box bg="bg-yellow-700" color="text-white" text="Total Employees = 10" icon={employees} onClick={() => navigate("/nav/employees")} />
                            < Box bg="bg-green-700" color="text-white" text="Total Salary = 12000$" icon={wallet} onClick={() => navigate("/nav/salary")} />
                            < Box bg="bg-red-700" color="text-white" text="Total Task = 20" icon={task} onClick={() => navigate("/nav/task")} />
                            < Box bg="bg-blue-700" color="text-white" text="Add New Employee" icon={adduser} onClick={() => navigate("/nav/form")} />
                        </div>
                        <div className=' hidden md:flex justify-center items-center'>
                           <img className='w-[600px]' src={admin} alt="" />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}



