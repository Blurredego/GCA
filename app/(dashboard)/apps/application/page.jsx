import React from 'react'
import { FaEdit, FaRegEye } from "react-icons/fa";

const mockData = [
    {
      id: 22,
      email: 'helo@gmail.com',
      companyName: 'Voldi',
      type: 'Limited Liability Company',
      companyEmail: 'demo@gmail.com',
      number: '+1 (246) 418-2836',
      referenceBy: 'N/A',
      action: '',
      approve: 'Yes',
      'membershipType': 'Founded Member',
      editApp: ''

       
    },
    {
      id: 22,
      email: 'helo@gmail.com',
      companyName: 'Voldi',
      type: 'Limited Liability Company',
      companyEmail: 'demo@gmail.com',
      number: '+1 (246) 418-2836',
      referenceBy: 'N/A',
      action: '',
      approve: 'Yes',
      'membershipType': 'Founded Member',
      editApp: ''

       
    },
    {
      id: 22,
      email: 'helo@gmail.com',
      companyName: 'Voldi',
      type: 'Limited Liability Company',
      companyEmail: 'demo@gmail.com',
      number: '+1 (246) 418-2836',
      referenceBy: 'N/A',
      action: '',
      approve: 'Yes',
      'membershipType': 'Founded Member',
      editApp: ''

       
    },
    {
      id: 22,
      email: 'helo@gmail.com',
      companyName: 'Voldi',
      type: 'Limited Liability Company',
      companyEmail: 'demo@gmail.com',
      number: '+1 (246) 418-2836',
      referenceBy: 'N/A',
      action: '',
      approve: 'Yes',
      'membershipType': 'Founded Member',
      editApp: ''

       
    },
    {
      id: 22,
      email: 'helo@gmail.com',
      companyName: 'Voldi',
      type: 'Limited Liability Company',
      companyEmail: 'demo@gmail.com',
      number: '+1 (246) 418-2836',
      referenceBy: 'N/A',
      action: '',
      approve: 'Yes',
      'membershipType': 'Founded Member',
      editApp: ''

       
    },
    {
      id: 22,
      email: 'helo@gmail.com',
      companyName: 'Voldi',
      type: 'Limited Liability Company',
      companyEmail: 'demo@gmail.com',
      number: '+1 (246) 418-2836',
      referenceBy: 'N/A',
      action: '',
      approve: 'Yes',
      'membershipType': 'Founded Member',
      editApp: ''

       
    },
  

  ];

const Users = () => {
    return (
        <div className=" mx-auto p-4">
          <div className="mb-4 w-full flex justify-end gap-3 items-center">
          <select  className="form-select red text-white w-fit  border  rounded-full  p-2">
                    <option>Create</option>
                    <option>Application</option>
                    <option>Form</option>
                  </select>
            <button className=" text-white px-4 py-2 rounded btn btn-blue ">
              Save
            </button>
          </div>
          <div className="overflow-x-auto w-full  text-nowrap shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs  text-white uppercase red " >
                <tr className='red bg-red-700'>
                <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Company Name</th>
              <th scope="col" className="px-6 py-3">Type</th>
              <th scope="col" className="px-6 py-3">Company Email</th>
                  <th scope="col" className="px-6 py-3">Number</th>
                  <th scope="col" className="px-6 py-3">Reference By</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                    <th scope="col" className="px-6 py-3">Approve</th>
                    <th scope="col" className="px-6 py-3">Membership Type</th>
                    <th scope="col" className="px-6 py-3">Edit App</th>
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
                    <td className="px-6 py-4">{item.referenceBy}</td>
                    <td className="px-6 py-4 ">{item.action}<FaRegEye className="h-5 w-5 cursor-pointer " color='blue'/> </td>
                    <td className="px-6 py-4 ">{item.approve}<FaEdit className="h-5 w-5 cursor-pointer inline-block ml-2" color='blue'/></td>
                    <td className="px-6 py-4 ">{item.membershipType} <FaEdit className="h-5 w-5 cursor-pointer inline-block ml-2" color='blue'/></td>
                    <td className="px-6 py-4 ">{item.editApp} <FaEdit className="h-5 w-5 cursor-pointer inline-block ml-2" color='blue'/></td>
                  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default Users