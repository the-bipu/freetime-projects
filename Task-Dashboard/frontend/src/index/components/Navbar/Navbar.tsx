'use client';
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-1/5 h-full flex flex-row justify-center items-center px-20 border-r-2 border-gray-600'>
      <div className='text-xl font-bold'>Dashboard</div>




      <div className='w-1/5 h-full flex flex-row justify-center items-center px-20 border-r-2 border-gray-600'>
        <div className='text-xl font-bold'>Dashboard</div>
      </div>

      <div className='w-4/5 h-full p-10'>
        <p>Welcome to the Task Manager</p>

        <div className='mt-8'>
          {/* <button onClick={toggleDB}>Go to Dashboard</button> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar