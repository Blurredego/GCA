// components/Overview.js
import React from 'react';
import ComponentsDashboardSales from './components-dashboard-sales';

const StatCard = ({ icon, total, title, items, bgColor }) => (
  <div className={`${bgColor} rounded-lg p-5 flex-1`}>
    <div className="flex items-center mb-4">
      <div className={`${icon.bg} rounded-full p-2 mr-3`}>
        <span className="text-white text-xl">{icon.symbol}</span>
      </div>
      <div>
        <div className="text-2xl font-bold">{total}</div>
        <div className="text-sm text-gray-600">{title}</div>
      </div>
    </div>
    {items.map((item, index) => (
      <div key={index} className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-600">{item.label}</span>
        <div className={`${item.bg} rounded px-5 py-1 text-sm font-medium ${item.textColor}`}>
          {item.value}
        </div>
      </div>
    ))}
  </div>
);

const Overview = () => {
  const data = [
    {
      icon: { symbol: '👥', bg: 'bg-pink-500' },
      total: '2k',
      title: 'All Users',
      bgColor: 'bg-[#FFE2E5]',
      items: [
        { label: 'Verified', value: '750', bg: 'bg-[#FA5A7D]', textColor: 'text-white' },
        { label: 'Un-Verified', value: '750', bg: 'bg-white', textColor: 'text-gray-700' },
      ],
    },
    {
      icon: { symbol: '📄', bg: 'bg-yellow-500' },
      total: '1k',
      title: 'All Application',
      bgColor: 'bg-[#FFF4DE]',
      items: [
        { label: 'Approved', value: '750', bg: 'bg-[#FF947A]', textColor: 'text-white' },
        { label: 'Un-Approved', value: '250', bg: 'bg-white', textColor: 'text-gray-700' },
      ],
    },
    {
      icon: { symbol: '📋', bg: 'bg-green-500' },
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
      icon: { symbol: '👤', bg: 'bg-purple-500' },
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

    <div className="p-6  mx-auto panel">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Overview</h2>
        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
          Last 30 days →
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.map((card, index) => (
          <StatCard key={index} {...card} />
        ))}
      </div>
    </div>
      <ComponentsDashboardSales />
    </>
  );
};

export default Overview;