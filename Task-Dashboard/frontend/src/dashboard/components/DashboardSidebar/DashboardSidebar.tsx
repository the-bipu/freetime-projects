import React from 'react';

interface DashboardSidebarProps {
    showdb: boolean;
    clickedButton: string;
    handleButtonClick: (buttonName: string) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ showdb, clickedButton, handleButtonClick }) => {
    return (
        <div className={`flex flex-row items-center justify-between 'w-full' h-20 bg-[#0d0c22] px-6`}>
            <div className='flex flex-row justify-center text-white text-base font-bold text-center gap-6'>
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
            <div className='text-white'>@2024</div>
        </div>
    );
};

export default DashboardSidebar;