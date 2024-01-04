import React from 'react';

const IndexView = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full pt-10'>
           Welcome to the Task Manager

           <div className='mt-8'>
             <a href="/Dashboard">Go to Dashboard</a>
           </div>
        </div>
    );
};

export default IndexView;
