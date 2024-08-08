'use client'
import React, { useState } from 'react';
import BENEFITS from '../../components/BENEFITS/page';
import Process from '../../components/process/page';
import Fees from '../../components/Fees/page';
import Application from '../../components/Application/page';
import Layout from '../../components/layout/Layout';

const MemberShip = () => {
  const [activeTab, setActiveTab] = useState('Benefits');

  const tabs = ['Benefits', 'Process', 'Fees', 'Application'];

  const tabContent = {
    Benefits:<BENEFITS/>,
    Process:<Process/>,
    Fees: <Fees />,
    Application: <Application />,
  };

  return (
    <>
    <Layout>
    <section className="section">
            {/* About Top Section */}
                <div className="container cnt-center">
                    <div className="box-pageheader-1 text-center flex flex-col justify-center items-center">
                        <h2 className="text-white mt-15 wow animate__animated animate__fadeIn mb-10 ">Join GCA - Become a Member Today</h2>
                        <p className="font-md color-white wow animate__animated animate__fadeIn px-1">
                        Unlock Exclusive Benefits and Global Opportunities
                        </p>
                    </div>
                </div>
            </section>
    
      <div className='container    mx-auto px-4'>
      <div className=' flex flex-col  text-center gap-4 flex-wrap mt-24 justify-center'>
        <h3>Exclusive Tools and Resources</h3>
        <p className='text-lg text-[#818692]'>Access a range of specialized tools and resources designed to optimize your logistics operations. From advanced 
        <br className="d-none d-lg-block" />
        <span> quotation systems to comprehensive educational programs, GCA provides the essential tools to elevate your business </span>
        <br className="d-none d-lg-block" />
        <span> efficiency and expertise. </span>
         </p>
      </div>
        <div className='mt-32  gap-4 border-b border-gray-300'>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`uppercase mr-2 max-md:mt-2 ${
                activeTab === tab
                  ? 'red hover:bg-red-500 text-white border-b-2 rounded-full '
                  : 'bg-gray-200 text-gray-500  hover:text-gray-700 rounded-full'
              }`}
              onClick={() => setActiveTab(tab)}
            >
                  <button className=' py-2 btn-lg-d px-4 font-bold 2' > {tab}</button> 
            </button>
          ))}
        </div>
        

        <div className='my-12'>
          {tabContent[activeTab]}
        </div>
      </div>
    </Layout>
    </>
  );
};

export default MemberShip;