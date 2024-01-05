import React from 'react';
import { BiTask, BiTaskX } from 'react-icons/bi'; // Import necessary icons
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

interface TaskItemProps {
    task: {
        priority: string;
        dueDate: Date;
        title: string;
        description: string;
        status: string;
    };
    index: number;
    currentDate: Date;
    handleDelete: (index: number) => void;
    handleEditClick: (index: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, currentDate, handleDelete, handleEditClick }) => {
    return (
        <div id='bgBlue' key={index} className='flex flex-row md:w-80 w-full min-h-48 py-6 px-8 rounded-lg shadowCard'>

            <div className='relative flex flex-col w-full gap-4'>
                <div className='flex flex-row justify-between'>
                    <div
                        className={`w-auto px-4 py-1 flex items-center justify-center rounded-md text-white font-light text-sm 
                                ${task.priority === 'Hard' ? 'bg-red-500' :
                                task.priority === 'Medium' ? 'bg-orange-500' :
                                    'bg-green-500'}`}
                    >
                        {task.priority}
                    </div>
                    <div className='w-auto bg-[#3638b8] px-4 py-1 flex items-center justify-center rounded-md text-white font-light text-sm'>
                        {task.dueDate instanceof Date ? task.dueDate.toDateString() : ''}
                    </div>
                </div>
                <div className='w-full'>
                    <div className='font-semibold text-2xl'>
                        {task.title}
                    </div>
                    <div className='font-light text-gray-500'>
                        {task.description}
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='font-light text-gray-500 text-sm flex flex-row gap-2 items-center'>
                        <div>
                            {task.dueDate instanceof Date && (
                                <>
                                    {
                                        task.dueDate.toDateString() === currentDate.toDateString() ? (
                                            <div>Today</div>
                                        ) : task.dueDate > currentDate ? (
                                            <div>Upcoming</div>
                                        ) : (
                                            <div>Gone</div>
                                        )
                                    }
                                </>
                            )}

                        </div>
                        <div className='text-lg flex items-center justify-center'>
                            <button>
                                {task.status === 'true' ? (
                                    <BiTask className='text-green-700' />
                                ) : (
                                    <BiTaskX className='text-red-700' />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className='w-full flex flex-row justify-end gap-4 text-2xl'>
                        <button className='text-[red]' onClick={() => handleDelete(index)}><MdDelete /></button>
                        <button className='text-[blue] text-xl' onClick={() => handleEditClick(index)}><FaEdit /></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TaskItem;
