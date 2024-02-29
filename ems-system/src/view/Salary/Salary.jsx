import React from 'react';
import { useEffect } from 'react';
import { IsUserIn } from '../../Firebase/Firebase';
import { useSelector } from 'react-redux';

function Salary() {
  const salaries = useSelector(state => state?.users?.AllUserData)

  const users = salaries?.map((salary, index) => {
    console.log(salary)
    return (
      <tr className="border-b border-gray-200 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 ">
          {index}
        </th>
        <td className="px-6 py-4">
          {salary?.name}
        </td>
        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
          {salary?.salary}
        </td>

      </tr>
    )

  })


  useEffect(() => {
    IsUserIn()
  })

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className='m-6 text-center'>
        <h1 className='text-3xl md:6xl font-bold'>SALARIES OF EMPLOYEES</h1>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase ">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 ">
              Index
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-50 ">
              Salary
            </th>

          </tr>
        </thead>
        <tbody>
          {users}

          {/* Additional rows go here */}
        </tbody>
      </table>
    </div>
  );
}

export default Salary;
