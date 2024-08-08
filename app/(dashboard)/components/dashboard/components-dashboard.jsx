// components/Overview.js
import React from 'react';
import ComponentsDashboardSales from './components-dashboard-sales';
import Image from 'next/image';
import Users from '@/public/assets/images/users.svg';
import Members from '@/public/assets/images/members.svg';
import Invoices from '@/public/assets/images/invoices.svg';
import Applications from '@/public/assets/images/applications.svg';

const StatCard = ({ icon, total, title, items, bgColor }) => (
  <div className={`${bgColor} rounded-lg p-5 flex-1`}>
    <div className="flex items-center mb-4">
      <div className={` mr-3`}>
        <span className="text-white text-xl">
          <Image className='w-fit h-fit' src={icon} alt="icon" width={62} height={62} />
        </span>
      </div>
      <div>
        <div className="text-2xl font-bold">{total}</div>
        <div className="text-sm text-gray-600">{title}</div>
      </div>
    </div>
    {items.map((item, index) => (
      <div key={index} className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600 font-bold">{item.label}</span>
        <div className={`${item.bg} rounded px-5  py-1 text-sm font-bold ${item.textColor}`}>
          {item.value}
        </div>
      </div>
    ))}
  </div>
);

const Overview = () => {
  const data = [
    {
      icon: Users,
      total: '2k',
      title: 'All Users',
      bgColor: 'bg-[#FFE2E5]',
      items: [
        { label: 'Verified', value: '750', bg: 'bg-[#FA5A7D]', textColor: 'text-white' },
        { label: 'Un-Verified', value: '750', bg: 'bg-white', textColor: 'text-gray-700' },
      ],
    },
    {
      icon: Applications,
      total: '1k',
      title: 'All Application',
      bgColor: 'bg-[#FFF4DE]',
      items: [
        { label: 'Approved', value: '750', bg: 'bg-[#FF947A]', textColor: 'text-white' },
        { label: 'Un-Approved', value: '250', bg: 'bg-white', textColor: 'text-gray-700' },
      ],
    },
    {
      icon: Invoices,
      total: '2k',
      title: 'All Invoices',
      bgColor: 'bg-[#DCFCE7]',
      items: [
        { label: 'Paid', value: '750', bg: 'bg-[#46DA5F]', textColor: 'text-white' },
        { label: 'Unpaid', value: '750', bg: 'bg-white', textColor: 'text-gray-700' },
        { label: 'Total Issued', value: '750', bg: 'bg-white', textColor: 'text-gray-700' },
      ],
    },
    {
      icon: Members,
      total: '1k',
      title: 'Active Members',
      bgColor: 'bg-[#F3E8FF]',
      items: [
        { label: 'Category 1', value: '750', bg: 'bg-[#BF83FF]', textColor: 'text-white'},
        { label: 'Category 2', value: '250', bg: 'bg-white', textColor: 'text-gray-700' },
      ],
    },
  ];

  return (
    <>
    
      <div className="p-6 mx-auto panel mt-20  ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Overview</h2>
          <select className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((card, index) => (
            <StatCard key={index} {...card} />
          ))}
        </div>
      </div>
      <div className='overflow-hidden mt-16 shadow-md'>
      <ComponentsDashboardSales />
      </div>
    </>
  );
};

export default Overview;
