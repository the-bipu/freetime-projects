import React from 'react';

interface DashboardSidebarProps {
    showdb: boolean;
    clickedButton: string;
    handleButtonClick: (buttonName: string) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ showdb, clickedButton, handleButtonClick }) => {
    return (
        <div className={`flex flex-col items-center justify-between ${showdb ? 'flex' : 'hidden'} ${showdb ? 'w-1/5' : 'w-0'} h-[44.8rem] bg-[#0d0c22] py-12 px-6`}>
            <div>
                <p className='text-white text-2xl font-semibold'>Dashboard</p>
                <div className='flex flex-col justify-center text-white text-base font-bold text-center gap-6 mt-12'>
                    <button
                        className={`py-2 px-6 rounded-lg ${clickedButton === 'All' ? 'bg-[#2f2f2f]' : ''}`}
                        onClick={() => handleButtonClick('All')}
                    >
                        All
                    </button>
                    <button
                        className={`py-2 px-6 rounded-lg ${clickedButton === 'Upcoming' ? 'bg-[#2f2f2f]' : ''}`}
                        onClick={() => handleButtonClick('Upcoming')}
                    >
                        Upcoming
                    </button>
                    <button
                        className={`py-2 px-6 rounded-lg ${clickedButton === 'Overdue' ? 'bg-[#2f2f2f]' : ''}`}
                        onClick={() => handleButtonClick('Overdue')}
                    >
                        Overdue
                    </button>
                    <button
                        className={`py-2 px-6 rounded-lg ${clickedButton === 'Completed' ? 'bg-[#2f2f2f]' : ''}`}
                        onClick={() => handleButtonClick('Completed')}
                    >
                        Completed
                    </button>
                </div>
            </div>
            <div className='text-white'>@2024</div>
        </div>
    );
};

export default DashboardSidebar;