import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import task from "../../images/task.png"
import { AddUpdateData } from '../../Redux/Slices/CurdSlice'

function Task() {

    const [id, setId] = useState("")
    const [assignTask, setAssignTask] = useState("")

    const dispatch = useDispatch()

    
    const employee = useSelector(state => state?.users?.AllUserData)
    const employees = employee?.map((user, index) => {
        return (
            <option key={index} value={user?.id} >{user?.name}</option>
        )
    })
    const handleTask = () => {
        dispatch(AddUpdateData({ assignTask, id }))
        setAssignTask("")
        setId("")

    }

    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 w-full h-screen bg-gray-900'>
            <div className='w-72 md:w-[500px]'>
                <h1 className=' text-white font-semibold text-3xl'>Assign Tasks</h1>
                <div className="mt-5 space-y-2">
                    <label className="block mb-2 text-sm font-medium text-white ">Select Employee</label>
                    <select
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value=""></option>
                        {employees}
                    </select>

                    <label className="block mb-2 text-sm font-medium text-white ">Task</label>
                    <textarea
                        value={assignTask}
                        onChange={(e) => setAssignTask(e.target.value)}
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Assign Task"></textarea>

                    <label className="block mb-2 text-sm font-medium text-white ">Image(optional)</label>

                    <button
                        onClick={handleTask}
                        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
                        Submit
                    </button>
                </div>
            </div>
            <div>
                <img src={task} alt="" />
            </div>
        </div>
    )
}

export default Task
