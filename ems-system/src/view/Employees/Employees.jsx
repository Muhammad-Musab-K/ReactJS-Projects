import React from 'react';
import { useEffect } from 'react';
import { IsUserIn } from '../../Firebase/Firebase';
import { useSelector } from 'react-redux';


function Employees() {

  const employee = useSelector(state => state?.users.AllUserData)

  const employees = employee?.map((user, index) => {
    return (
      <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {user?.name}
        </th>
        <td className="px-6 py-4">
          {user?.email}
        </td>
        <td className="px-6 py-4">
          {user?.role}
        </td>
        <td className="px-6 py-4">
          {user?.task?.length ?? 0}
        </td>
        <td className="px-6 py-4">
          <a href={`/nav/form/${user?.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
    )

  })

  useEffect(() => {
    IsUserIn()
  })

  return (
    <>
      <div className='text-center m-6'><h1 className='text-3xl md:text-6xl font-bold'>TEAM</h1> </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Task
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {employees}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Employees;
