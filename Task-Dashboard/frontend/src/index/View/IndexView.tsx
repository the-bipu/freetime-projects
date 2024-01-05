'use client';

import React from 'react';
import { useRouter } from 'next/router';

const IndexView = () => {

  const router = useRouter();

  const toggleDB = () => {
    router.push('/Dashboard');
  };

    return (
        <div className='flex flex-col justify-center items-center w-full pt-10'>
           Welcome to the Task Manager

           <div className='mt-8'>
             <button onClick={toggleDB}>Go to Dashboard</button>
           </div>
        </div>
    );
};

export default IndexView;
