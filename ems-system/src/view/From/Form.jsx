import React, { useState } from 'react';
import { newUser } from '../../Redux/Slices/AddSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginUser } from '../../Redux/Slices/UserSlice';
import { useParams } from 'react-router-dom';
import { updateData } from '../../Redux/Slices/CurdSlice';
import update from "../../images/update.png"

function Form() {

    const { id } = useParams()
    const editUser = useSelector(state => getLoginUser(state, id))
    const dispatch = useDispatch()
    const [name, setName] = useState(id ? editUser.name : "")
    const [email, setEmail] = useState(id ? editUser.email : "")
    const [role, setRole] = useState(id ? editUser.role : "")
    const [salary, setSalary] = useState(id ? editUser.salary : "")
    const [file, setFile] = useState(id ? editUser.file : "")


    const handleClick = async (e) => {
        e.preventDefault()
        dispatch(newUser({ name, email, role, salary, file }))
        setName("")
        setEmail("")
        setRole("")
        setSalary("")
        setFile("")

    }
    const newData = { name, email, role, salary}
    const handleUpdate = async (e) => {
        e.preventDefault()
        dispatch(updateData({ newData, id }))
    }

    return (
        <div className=' flex flex-col md:flex-row justify-center w-full'>
            <div className='mt-5'>
              <img src={update} alt="" />
            </div>
        <section className="bg-white rounded-lg ">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900">Add New Employee</h2>
                <form>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 ">Employee Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type name" required />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Product brand" required />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="file"
                                className="block mb-2 text-sm font-medium text-gray-900 ">File</label>
                            <input
                               
                                type="file"
                                name="file"
                                id="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="$2999" required />
                        </div>
                        <div>
                            <label
                                htmlFor="Role"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                            <select
                                id="Role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                <option selected>Select Role</option>
                                <option key={1} value="FrontEnd Developer">React JS Developer</option>
                                <option key={2} value="Node JS Developer">Node JS Developer</option>
                                <option key={3} value="UI Developer">UI Developer</option>
                                <option key={4} value="Full Stack Developer">Full Stack Developer</option>
                                <option key={5} value="React Native Developer">React Native Developer</option>
                                <option key={6} value="Project Manager">Project Manager</option>
                                <option key={7} value="Admin(Boss)">Admin(Boss)</option>

                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 ">Salary Assign ($)</label>
                            <input
                                type="number"
                                name="item-weight"
                                id="item-weight"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="$$$" required />
                        </div>

                    </div>
                    <button
                    onClick={id ? handleUpdate : handleClick}
                        type="submit"
                        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
                        {id ? "Update Employee" : "Add Employee"}
                    </button>
                </form>
            </div>
        </section>
        </div>
    );
}

export default Form;
