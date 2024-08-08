import React from 'react';
import { FaRegEye } from "react-icons/fa";

const mockData = [
  {
    id: 22,
    email: 'voldi@gmail.com',
    companyName: 'Voldi',
    type: 'Limited Liability Company',
    companyEmail: 'voldi@gmail.com',
    number: '+1 (246) 418-2836',
  },
  {
    id: 23,
    email: 'voldi@gmail.com',
    companyName: 'Voldi',
    type: 'Limited Liability Company',
    companyEmail: 'voldi@gmail.com',
    number: '+1 (246) 418-2836',
  },
  {
    id: 25,
    email: 'hello@gmail.com',
    companyName: 'Guzman and Parrish Traders',
    type: 'Sole Proprietorship',
    companyEmail: 'gijimoj@mailinator.com',
    number: '+1 (441) 656-5326',
  },
  {
    id: 26,
    email: 'hello@gmail.com',
    companyName: 'Guzman and Parrish Traders',
    type: 'Sole Proprietorship',
    companyEmail: 'gijimoj@mailinator.com',
    number: '+1 (441) 656-5326',
  },
  {
    id: 27,
    email: 'example@gmail.com',
    companyName: 'Example Corp',
    type: 'Corporation',
    companyEmail: 'info@example.com',
    number: '+1 (555) 123-4567',
  },
];

function DataTable() {
  return (
    <div className=" mx-auto p-4">
      <div className="mb-4 w-full flex justify-end">
        <button className=" text-white px-4 py-2 rounded red  hover:bg-red-400">
          Save
        </button>
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs  text-white uppercase red " >
            <tr className='red bg-red-700'>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Company Name</th>
              <th scope="col" className="px-6 py-3">Type</th>
              <th scope="col" className="px-6 py-3">Company Email</th>
              <th scope="col" className="px-6 py-3">Number</th>
              <th scope="col" className="px-6 py-3">Actions</th>
              <th scope="col" className="px-6 py-3">Approve</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item) => (
              <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.companyName}</td>
                <td className="px-6 py-4">{item.type}</td>
                <td className="px-6 py-4">{item.companyEmail}</td>
                <td className="px-6 py-4">{item.number}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline" >

                    <FaRegEye className="h-5 w-5" />
                    {/* <FaRedClose className="h-5 w-5" /> */}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <select  className="form-select  border  rounded-full  p-2">
                    <option>Choose</option>
                    <option>Approve</option>
                    <option>Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;