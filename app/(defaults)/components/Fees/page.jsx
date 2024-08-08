import React from 'react'

const Fees = () => {
  return (
    <div className='container justify-between flex gap-4 flex-grow max-sm:flex-col  mt-5'>

    <div className='shadow-lg  rounded w-full'>
    <div className='red p-4  text-center'><h3 className='text-white'>Types of Membership</h3></div>
    <div className='p-6 space-y-3'>
    <h4>Ordinary Membership</h4>
    <p className="text-gray-500 text-lg ">Open to all Container traders, Container manufacturers, Container owners, NVOEC and NVOCC companies</p>
   
   
    <h4>Associate Memberships</h4>
    <p className="text-gray-500 text-lg ">Freight forwarding companies, Container depots, Transport Operators, shipping agencies or entities closely associated with the freight forwarding and logistics industry.</p>
   
   
    </div>

    </div>
    <div className='shadow-lg  rounded w-full'>
    <div className='red p-4  text-center'><h3 className='text-white'>Fee Structure</h3></div>
    <div className='p-6 space-y-3'>
    <h4>Ordinary</h4>
    <p className="text-gray-500 text-lg ">For container traders, NVOCC and NVOEC companies 
    USD 1500 per year. </p>
   
   
    <h4>Associate</h4>
    <p className="text-gray-500 text-lg ">Direct shippers and Service providers for industry 
    USD 1800 per year.</p>
    <p className='mt-4 text-gray-500 text-lg'>Government agencies, other trade associations and individuals who like to participate and understand and help the industry.</p>
   
   
    </div>



    </div>
    </div>
  )
}

export default Fees