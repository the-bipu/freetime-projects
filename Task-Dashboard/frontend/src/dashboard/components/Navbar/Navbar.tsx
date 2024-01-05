'use client';
import React from 'react'
import { useRouter } from 'next/router';

import { TiArrowBackOutline } from "react-icons/ti";

const Navbar = () => {

  const router = useRouter();

  const toggleHomeComing = () => {
    router.push('/');
  };
  
  return (
    <div className='w-full bgLight flex flex-row justify-between px-24 py-2'>
        <div className='px-1 py-3 text-xl font-bold'>Dashboard</div>
        <button onClick={toggleHomeComing} className='px-1 py-3 text-base font-medium flex flex-row items-center justify-center gap-2'>
          <TiArrowBackOutline />
          Back to home
        </button>
    </div>
  )
}

export default Navbar