'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';

import './indexView.scss';

import { FaChartPie } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { ImStatsDots } from "react-icons/im";
import { BiCategory } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";

const IndexView = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Summary');

  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  const toggleDB = () => {
    router.push('/Dashboard');
  };

  return (
    <div id='bgLightNormal' className='w-full h-full flex flex-row'>

      <div className='h-screen w-4/12 bg-[#F1F1FB] flex flex-col items-center py-4 border-r-2 border-zinc-300'>

        <div className='py-10 flex flex-row items-center justify-center gap-2'>
          <div className='w-16 h-16 bg-white rounded-lg'></div>
          <div className='text-sm font-bold flex flex-col text-[#222A51]'>
            <span>O2O</span>
            <span>Task</span>
            <span>Dashboard</span>
          </div>
        </div>

        <div className='w-full h-full flex flex-col items-start justify-start gap-6 pt-10 pl-10'>

          <button onClick={() => handleTabClick('Summary')} className={`text-lg font-semibold py-2 flex flex-row items-center gap-3 cursor-pointer ${activeTab === 'Summary' ? 'text-[#222A51]' : 'text-[#9F9FAB]'}`}>
            <FaChartPie />
            Summary
          </button>
          <button onClick={() => handleTabClick('Transaction')} className={`text-lg font-semibold py-2 flex flex-row items-center gap-3 cursor-pointer ${activeTab === 'Transaction' ? 'text-[#222A51]' : 'text-[#9F9FAB]'}`}>
            <GrTransaction />
            Transaction
          </button>
          <button onClick={() => handleTabClick('Statistics')} className={`text-lg font-semibold py-2 flex flex-row items-center gap-3 cursor-pointer ${activeTab === 'Statistics' ? 'text-[#222A51]' : 'text-[#9F9FAB]'}`}>
            <ImStatsDots />
            Statistics
          </button>
          <button onClick={() => handleTabClick('Category')} className={`text-lg font-semibold py-2 flex flex-row items-center gap-3 cursor-pointer ${activeTab === 'Category' ? 'text-[#222A51]' : 'text-[#9F9FAB]'}`}>
            <BiCategory />
            Category
          </button>
          <button onClick={toggleDB} className={`text-lg font-semibold py-2 flex flex-row items-center gap-3 cursor-pointer ${activeTab === 'Tasks' ? 'text-[#222A51]' : 'text-[#9F9FAB]'}`}>
            <FaTasks />
            Tasks
          </button>

        </div>
      </div>

      <div className='h-screen w-auto bg-[#F1F1FB] flex flex-col pt-12 px-16'>

        <div className='flex flex-col gap-12'>
          <h3 className='text-2xl font-bold text-[#222A51]'>Tasks Dashboard</h3>

          <div className='flex flex-row gap-6'>

            <div className='h-20 w-64 bg-[#5A59E3] rounded-xl px-6 py-4 text-white'>
              <p className='font-semibold text-base'>Total Task</p>
              <p className='font-bold text-sm'>7</p>
            </div>
            <div className='h-20 w-64 bg-[#5A59E3] rounded-xl px-6 py-4 text-white'>
              <p className='font-semibold text-base'>Pending Task</p>
              <p className='font-bold text-sm'>4</p>
            </div>
            <div className='h-20 w-64 bg-[#5A59E3] rounded-xl px-6 py-4 text-white'>
              <p className='font-semibold text-base'>Completed Task</p>
              <p className='font-bold text-sm'>3</p>
            </div>

          </div>

        </div>

        <div className='flex flex-col gap-6 pt-10'>
          <h3 className='text-lg font-bold text-[#222A51]'>Marketplace</h3>

          <div className='flex flex-row gap-8'>

            <div className='w-8/12 h-full flex flex-col gap-10'>
              <div className='w-full h-40 bg-[#fff] rounded-xl px-6 py-4'>
                <p className='font-semibold text-lg'>Total Task</p>
                <p className='font-light text-sm text-[#9F9FAB]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium impedit natus fugiat sapiente voluptates, rerum necessitatibus quasi nostrum. Modi, quos?</p>
              </div>
              <div className='w-full h-40 bg-[#fff] rounded-xl px-6 py-4'>
                <p className='font-bold text-base'>Pending Task</p>
                <p className='font-bold text-base'></p>
              </div>
            </div>
            <div className='w-4/12 h-auto bg-[#fff] rounded-xl'></div>

          </div>
        </div>
      </div>

      {activeTab === 'Category' ? (
        <>
          <div className='h-screen w-5/12 bg-[#F9F8FD] flex flex-col pt-12 px-16'>
            <h3 className='text-2xl font-bold text-[#222A51]'>Category</h3>
          </div>
        </>
      ) : activeTab === 'Transaction' ? (
        <>
          <div className='h-screen w-5/12 bg-[#F9F8FD] flex flex-col pt-12 px-16'>
            <h3 className='text-2xl font-bold text-[#222A51]'>Transaction</h3>
          </div>
        </>
      ) : activeTab === 'Statistics' ? (
        <>
          <div className='h-screen w-5/12 bg-[#F9F8FD] flex flex-col pt-12 px-16'>
            <h3 className='text-2xl font-bold text-[#222A51]'>Statistics</h3>
          </div>
        </>
      ) : (
        <>
          <div className='h-screen w-5/12 bg-[#F9F8FD] flex flex-col pt-12 px-16'>
            <h3 className='text-2xl font-bold text-[#222A51] mb-12'>Summary</h3>
            <div className='w-64 h-64 bg-white rounded-xl'></div>
          </div>
        </>
      )}

    </div>
  );
};

export default IndexView;
