import React, { useEffect, useState } from 'react'

import './dashboardModule.scss';

interface Task {
    title: string;
    description: string;
    dueDate: string;
    priority: string;
}

const DashboardView = () => {
    const [showdb, setShowdb] = useState(false);
    const [dataBox, setDataBox] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);


    useEffect(() => {
        const storedTasksString = localStorage.getItem('tasks');
        const storedTasks = storedTasksString ? JSON.parse(storedTasksString) : [];
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    const toggleDashboard = () => {
        setShowdb(!showdb);
    }

    const toggleDataBox = () => {
        setDataBox(!dataBox);
    }

    const handleFormSubmit = (e: any) => {
        e.preventDefault();

        // Collect form input values
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
        const dueDate = e.target.elements.date.value;
        const priority = e.target.elements.priority.value;

        // Create task object
        const newTask = {
            title,
            description,
            dueDate,
            priority,
        };

        // Update tasks state
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);

        // Update local storage
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        // Clear form inputs
        e.target.reset();
    };

    return (
        <div className='flex flex-row'>
            <div className={`flex flex-col items-center justify-between ${showdb ? 'flex' : 'hidden'} w-1/5 h-[44.8rem] bg-[#0d0c22] py-12 px-6`}>
                <div>
                    <p className='text-white text-2xl font-semibold'>Dashboard</p>
                    <div className='flex flex-col justify-center text-white text-base font-bold text-center gap-6 mt-12'>
                        <div className='bg-[#2f2f2f] py-2 px-6 rounded-lg'>Upcoming</div>
                        <div className='bg-[#2f2f2f] py-2 px-6 rounded-lg'>Overdue</div>
                        <div className='bg-[#2f2f2f] py-2 px-6 rounded-lg'>Completed</div>
                    </div>
                </div>
                <div className='text-white'>@2024</div>
            </div>

            <div className='w-full h-screen px-4'>
                <nav className='flex flex-row w-full h-20 p-4 justify-between'>
                    <button id='buttonV' onClick={toggleDataBox} className='py-2 px-4 rounded-lg'>Add Card</button>
                    <button id='buttonB' onClick={toggleDashboard} className='py-2 px-4 rounded-lg'>Dashboard</button>
                </nav>

                <div className={`w-full h-auto flex justify-center items-center ${dataBox ? 'flex' : 'hidden'}`}>
                    <form onSubmit={handleFormSubmit} className='w-96 h-auto flex flex-col gap-4 p-8 bg-zinc-300 rounded-xl'>
                        <div className='flex flex-col'>
                            <label htmlFor="title">Title</label>
                            <input type="text" name='title' className='bg-white p-2 w-full rounded-lg mt-1 outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="description">Description</label>
                            <input type="text" name='description' className='bg-white p-2 w-full rounded-lg mt-1 outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="date">Due Date</label>
                            <input type="text" name='date' className='bg-white p-2 w-full rounded-lg mt-1 outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="priority">Priority Level</label>
                            <input type="text" name='priority' className='bg-white p-2 w-full rounded-lg mt-1 outline-none' />
                        </div>
                        <button id='buttonV' className='flex items-center justify-center w-full h-auto p-2 rounded-xl mt-2'>
                            Add
                        </button>
                    </form>
                </div>

                <div id='bgBlue' className='flex items-center md:w-80 w-full h-auto py-6 px-8 rounded-lg'>
                    {tasks.map((task, index) => (
                        <div key={index} className='flex flex-row w-full'>
                            <div className='relative flex flex-col w-full gap-4'>

                                <div className='w-auto p-2 bg-[#ff9e4f]'>
                                    {task.priority}
                                </div>

                                <div>
                                    {task.title}
                                </div>

                                <div>
                                    {task.description}
                                </div>
                            </div>
                            <div className='flex flex-col w-1/5'>
                                <div>{task.dueDate}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default DashboardView