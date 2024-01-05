import React from 'react';

interface DashboardSidebarProps {
    clickedButton: string;
    handleButtonClick: (buttonName: string) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ clickedButton, handleButtonClick }) => {
    return (
        <div className={`flex flex-row items-center justify-end 'w-full' h-20 bg-[#ffffff] px-12 mt-2`}>
            <div className='flex flex-row justify-center text-black text-base font-bold text-center gap-2'>
                <button
                    id={`${clickedButton === 'All' ? 'bgBlue' : ''}`}
                    className={`py-2 px-6 rounded-lg ${clickedButton === 'All' ? 'shadowCard' : ''}`}
                    onClick={() => handleButtonClick('All')}
                >
                    All
                </button>
                <button
                    id={`${clickedButton === 'Upcoming' ? 'bgBlue' : ''}`}
                    className={`py-2 px-6 rounded-lg ${clickedButton === 'Upcoming' ? 'shadowCard' : ''}`}
                    onClick={() => handleButtonClick('Upcoming')}
                >
                    Upcoming
                </button>
                <button
                    id={`${clickedButton === 'Overdue' ? 'bgBlue' : ''}`}
                    className={`py-2 px-6 rounded-lg ${clickedButton === 'Overdue' ? 'shadowCard' : ''}`}
                    onClick={() => handleButtonClick('Overdue')}
                >
                    Overdue
                </button>
                <button
                    id={`${clickedButton === 'Completed' ? 'bgBlue' : ''}`}
                    className={`py-2 px-6 rounded-lg ${clickedButton === 'Completed' ? 'shadowCard' : ''}`}
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