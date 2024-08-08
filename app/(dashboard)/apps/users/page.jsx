import React from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineVerticalDistribute } from "react-icons/md";

const mockData = [
    {
      id: 22,
        name: 'voldi',
        email: 'helo@gmail.com',
        number: '+1 (246) 418-2836',
        city: 'Lagos',
        country: 'Nigeria',
        referenceBy: 'John Doe',
        appSub: 'Yes',
        action: '',
        verified: 'Yes',
        role: 'Admin',
        membershipType: 'Founded Member',
        comments: 'clod',
    },
    {
        id: 29,
          name: 'voldi',
          email: 'helo@gmail.com',
          number: '+1 (246) 418-2836',
          city: 'Lagos',
          country: 'Nigeria',
          referenceBy: 'N/A',
          appSub: 'Yes',
          action: '',
          verified: 'Yes',
          role: 'Admin',
          membershipType: 'Founded Member',
          comments: 'clod',
      },
      {
        id: 42,
          name: 'voldi',
          email: 'helo@gmail.com',
          number: '+1 (246) 418-2836',
          city: 'Lagos',
          country: 'Nigeria',
          referenceBy: 'N/A',
          appSub: 'Yes',
          action: '',
          verified: 'Yes',
          role: 'Admin',
          membershipType: 'Founded Member',
          comments: 'clod',
      },
      {
        id: 24,
          name: 'voldi',
          email: 'helo@gmail.com',
          number: '+1 (246) 418-2836',
          city: 'Lagos',
          country: 'Nigeria',
          referenceBy: 'N/A',
          appSub: 'Yes',
          action: '',
          verified: 'Yes',
          role: 'Admin',
          membershipType: 'Founded Member',
          comments: 'clod',
      },
      {
        id: 74,
          name: 'voldi',
          email: 'helo@gmail.com',
          number: '+1 (246) 418-2836',
          city: 'Lagos',
          country: 'Nigeria',
          referenceBy: 'N/A',
          appSub: 'Yes',
          action: '',
          verified: 'Yes',
          role: 'Admin',
          membershipType: 'Founded Member',
          comments: 'clod',
      },
      {
        id: 42,
          name: 'voldi',
          email: 'helo@gmail.com',
          number: '+1 (246) 418-2836',
          city: 'Lagos',
          country: 'Nigeria',
          referenceBy: 'N/A',
          appSub: 'Yes',
          action: '',
          verified: 'Yes',
          role: 'Admin',
          membershipType: 'Founded Member',
          comments: 'clod',
      },
      {
        id: 24,
          name: 'voldi',
          email: 'helo@gmail.com',
          number: '+1 (246) 418-2836',
          city: 'Lagos',
          country: 'Nigeria',
          referenceBy: 'N/A',
          appSub: 'Yes',
          action: '',
          verified: 'Yes',
          role: 'Admin',
          membershipType: 'Founded Member',
          comments: 'clod',
      },
      {
        id: 74,
          name: 'voldi',
          email: 'helo@gmail.com',
          number: '+1 (246) 418-2836',
          city: 'Lagos',
          country: 'Nigeria',
          referenceBy: 'N/A',
          appSub: 'Yes',
          action: '',
          verified: 'Yes',
          role: 'Admin',
          membershipType: 'Founded Member',
          comments: 'clod',
      },
    
    
   
  ];

const Users = () => {
    return (
        <div className=" mx-auto p-4">
          <div className="mb-4 w-full flex justify-end gap-3 items-center">
          <MdOutlineVerticalDistribute className='w-8 h-8 curser-pointer'/>
          <button className=" text-white px-4 py-2 rounded red  hover:bg-red-400">
              Create 
            </button>
            <button className=" text-white px-4 py-2 rounded btn btn-blue ">
              Save
            </button>
          </div>
          <div className="overflow-x-auto w-full  text-nowrap shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs  text-white uppercase red " >
                <tr className='red bg-red-700'>
                  <th scope="col" className="px-6 py-3">ID</th>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Email</th>
                  <th scope="col" className="px-6 py-3">Number</th>
                  <th scope="col" className="px-6 py-3">City</th>
                  <th scope="col" className="px-6 py-3">country</th>
                  <th scope="col" className="px-6 py-3">Reference By</th>
                  <th scope="col" className="px-6 py-3">App Sub</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                    <th scope="col" className="px-6 py-3">Verified</th>
                    <th scope="col" className="px-6 py-3">Role</th>
                    <th scope="col" className="px-6 py-3">Membership Type</th>
                    <th scope="col" className="px-6 py-3">comments</th>



                </tr>
              </thead>
              <tbody>
                {mockData.map((item) => (
                  <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.number}</td>
                    <td className="px-6 py-4">{item.city}</td>
                    <td className="px-6 py-4">{item.country}</td>
                    <td className="px-6 py-4">{item.referenceBy}</td>
                    <td className="px-6 py-4">{item.appSub}</td>
                    <td className="px-6 py-4 ">{item.action}<RiDeleteBinLine className="h-5 w-5 cursor-pointer " color='red'/> </td>
                    <td className="px-6 py-4 ">{item.verified}<FaEdit className="h-5 w-5 cursor-pointer inline-block ml-2" color='blue'/></td>
                    <td className="px-6 py-4 ">{item.role}<FaEdit className="h-5 w-5 cursor-pointer inline-block ml-2" color='blue'/></td>
                    <td className="px-6 py-4 ">{item.membershipType} <FaEdit className="h-5 w-5 cursor-pointer inline-block ml-2" color='blue'/></td>
                    <td className="px-6 py-4 ">{item.comments} <FaEdit className="h-5 w-5 cursor-pointer inline-block ml-2" color='blue'/></td>
                  
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default Users