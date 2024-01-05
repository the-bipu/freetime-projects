'use client';

import React from 'react';
import { useRouter } from 'next/router';

import { FaChartPie } from "react-icons/fa";
import './indexView.scss';

const IndexView = () => {

  const router = useRouter();

  const toggleDB = () => {
    router.push('/Dashboard');
  };

  return (
    <div id='bgLightNormal' className='w-full h-full flex flex-row'>

      <div className='h-screen w-1/5 bg-[#F1F1FB] flex flex-col items-center py-4 border-r-2 border-zinc-300'>

        <div className='py-10 flex flex-row items-center justify-center gap-2'>
          <div className='w-16 h-16 bg-white rounded-lg'></div>
          <div className='text-sm font-bold flex flex-col text-[#222A51]'>
            <span>O2O</span>
            <span>Task</span>
            <span>Dashboard</span>
          </div>
        </div>

        <div className='w-full h-full flex flex-col items-center justify-start gap-6 pt-10'>

          <div className='text-lg font-semibold py-2 flex flex-row items-center gap-2 cursor-pointer text-[#222A51]'>
            <FaChartPie />
            Summary
          </div>

          <button className='text-lg font-semibold py-2 flex flex-row items-center gap-2 cursor-pointer text-[#222A51]' onClick={toggleDB}>
            <FaChartPie />
            Tasks
          </button>

        </div>
      </div>

      <div className='h-screen w-3/5 bg-[#F1F1FB] flex flex-col pt-12 px-16'>

        <div className='flex flex-col gap-12'>
          <h3 className='text-2xl font-bold text-[#222A51]'>Tasks Dashboard</h3>

          <div className='flex flex-row gap-10'>

            <div className='w-60 h-20 bg-[#5A59E3] rounded-xl px-6 py-4 text-white'>
              <p className='font-bold text-sm'>Total Task</p>
              <p className='font-bold text-xs'>7</p>
            </div>
            <div className='w-60 h-20 bg-[#5A59E3] rounded-xl px-6 py-4 text-white'>
              <p className='font-bold text-sm'>Pending Task</p>
              <p className='font-bold text-xs'>4</p>
            </div>
            <div className='w-60 h-20 bg-[#5A59E3] rounded-xl px-6 py-4 text-white'>
              <p className='font-bold text-sm'>Completed Task</p>
              <p className='font-bold text-xs'>3</p>
            </div>

          </div>

        </div>

        <div className='flex flex-col gap-6 pt-10'>
          <h3 className='text-lg font-bold text-[#222A51]'>Marketplace</h3>

          <div className='flex flex-row gap-8'>

            <div className='w-3/5 h-full flex flex-col gap-10'>
              <div className='w-full h-40 bg-[#fff] rounded-xl px-6 py-4'>
                <p className='font-bold text-base'>Total Task</p>
                <p className='font-bold text-base'>7</p>
              </div>
              <div className='w-full h-40 bg-[#fff] rounded-xl px-6 py-4'>
                <p className='font-bold text-base'>Pending Task</p>
                <p className='font-bold text-base'>4</p>
              </div>
            </div>
            <div className='w-2/5 h-auto bg-[#fff] rounded-xl'></div>

          </div>
        </div>
      </div>

      <div className='h-screen w-1/5 bg-[#fff] flex flex-col pt-12 px-16'>
        <button onClick={toggleDB}>Tasks</button>
      </div>

    </div>
  );
};

export default IndexView;
