import React, { useEffect, useState } from 'react'

import './dashboardModule.scss';

import EditTask from '../components/EditTask/EditTask';
import AddTask from '../components/AddTask/AddTask';
import DashboardSidebar from '../components/DashboardSidebar/DashboardSidebar';
import TaskItem from '../components/TaskItem/TaskItem';
import AddItem from '../components/AddItem/AddItem';
import Navbar from '../components/Navbar/Navbar';
import SearchResultComponent from '../components/SearchResultsComponent/SearchResultsComponent';

interface Task {
    title: string;
    description: string;
    dueDate: Date;
    priority: string;
    status: string;
}

const DashboardView = () => {
    const [showdb, setShowdb] = useState(false);
    const [dataBox, setDataBox] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);

    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [updatedTask, setUpdatedTask] = useState<Task | null>(null);

    const [completedTasks, setCompletedTasks] = useState<number[]>([]);
    const [clickedButton, setClickedButton] = useState('All');

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Task[]>([]);

    const handleButtonClick = (buttonName: string) => {
        console.log(clickedButton);
        setClickedButton(buttonName);
    };

    const currentDate = new Date();

    const handleSearch = (event: { target: { value: any } }) => {
        const query = event.target.value;
        setSearchQuery(query);

        const storedData = localStorage.getItem('tasks');
        if (storedData) {
            const parsedData: Task[] = JSON.parse(storedData);
            const filteredResults = parsedData.filter((item: Task) =>
                item.title.toLowerCase().includes(query.toLowerCase())
            ).map((filteredTask: Task) => ({
                ...filteredTask,
                dueDate: new Date(filteredTask.dueDate)
            }));
            setSearchResults([...filteredResults]);
        } else {
            setSearchResults([]);
        }
    };

    const toggleDashboard = () => {
        setShowdb(!showdb);
    }

    const toggleDataBox = () => {
        setDataBox(!dataBox);
    }

    const toggleSearchBar = () => {
        setShowSearch(!showSearch);
    }

    const handleFormSubmit = (e: any) => {
        e.preventDefault();

        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
        const dueDate = new Date(e.target.elements.dueDate.value);
        const priority = e.target.elements.priority.value;
        const status = e.target.elements.status.value;

        const newTask = {
            title,
            description,
            dueDate,
            priority,
            status,
        };

        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setDataBox(!dataBox);

        localStorage.setItem('tasks', JSON.stringify(updatedTasks.map(task => ({
            ...task,
            dueDate: task.dueDate.toISOString()
        }))));

        e.target.reset();
    };

    const handleEditClick = (index: number) => {
        setEditIndex(index);
        setUpdatedTask(tasks[index]);
    };

    const handleEditSubmit = () => {
        if (editIndex !== null && updatedTask !== null) {
            const updatedTasks = tasks.map((task, index) =>
                index === editIndex ? updatedTask : task
            );
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));

            setEditIndex(null);
            setUpdatedTask(null);
        }
    };

    useEffect(() => {
        const storedTasksString = localStorage.getItem('tasks');

        const storedTasks = storedTasksString ? JSON.parse(storedTasksString) : [];
        if (storedTasks) {
            const tasksWithDateObjects = storedTasks.map((task: Task) => ({
                ...task,
                dueDate: new Date(task.dueDate),
            }));
            setTasks(tasksWithDateObjects);
        }
    }, []);

    // For Deleting Data
    const handleDelete = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    // For Updating Data
    const handleUpdate = (index: number, updatedTask: any) => {
        const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const getUpcomingTasks = () => {
        return tasks.filter((task) => task.dueDate > currentDate && !completedTasks.includes(tasks.indexOf(task)));
    };

    const getOverdueTasks = () => {
        return tasks.filter((task) => task.dueDate < currentDate && !completedTasks.includes(tasks.indexOf(task)));
    };

    const getCompletedTasks = () => {
        return tasks.filter((task) => task.status === 'true');
    };

    return (
        <div className='flex flex-row w-full h-full justify-center items-start bg-white pb-8'>

            <div className={`w-full h-full`}>

                {/* Form For Adding Data */}
                <AddTask
                    showdb={showdb}
                    toggleDataBox={toggleDataBox}
                    dataBox={dataBox}
                    handleFormSubmit={handleFormSubmit}
                />

                {/* Form For Editing Data */}
                <EditTask
                    showdb={showdb}
                    editIndex={editIndex}
                    updatedTask={updatedTask}
                    handleEditSubmit={handleEditSubmit}
                    setUpdatedTask={setUpdatedTask}
                />

                <Navbar />

                <DashboardSidebar clickedButton={clickedButton} handleButtonClick={handleButtonClick} />

                <div className={`flex flex-col items-start justify-start w-full h-12 mb-10 mt-8 px-24`}>
                    <input type="text" className='md:w-80 h-full rounded-lg outline-none p-4 innerShadow' value={searchQuery}
                        onChange={handleSearch} />
                </div>

                {clickedButton === "All" && searchQuery !== '' && (
                    <SearchResultComponent searchResults={searchResults} currentDate={currentDate} handleDelete={handleDelete} handleEditClick={handleEditClick} />
                )}

                {clickedButton === "Upcoming" ? (
                    <>
                        {/* For Showing Upcoming Tasks Only */}
                        <div className='px-4 mb-10 mt-10'>
                            <div className='flex flex-row flex-wrap items-center justify-center gap-4 w-auto h-auto'>

                                <AddItem toggleDataBox={toggleDataBox} />

                                {getUpcomingTasks().map((task, index) => (
                                    <TaskItem
                                        key={index}
                                        task={task}
                                        index={index}
                                        currentDate={currentDate}
                                        handleDelete={handleDelete}
                                        handleEditClick={handleEditClick}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                ) : clickedButton === "Overdue" ? (
                    <>
                        {/* For Showing OverDue Tasks Only */}
                        <div className='px-4 mb-10 mt-10'>
                            <div className='flex flex-row flex-wrap items-center justify-center gap-4 w-auto h-auto'>

                                <AddItem toggleDataBox={toggleDataBox} />

                                {getOverdueTasks().map((task, index) => (
                                    <TaskItem
                                        key={index}
                                        task={task}
                                        index={index}
                                        currentDate={currentDate}
                                        handleDelete={handleDelete}
                                        handleEditClick={handleEditClick}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                ) : clickedButton === "Completed" ? (
                    <>
                        {/* For Showing Completed Tasks Only */}
                        <div className='px-4 mb-10 mt-10'>
                            <div className='flex flex-row flex-wrap items-center justify-center gap-4 w-auto h-auto'>

                                <AddItem toggleDataBox={toggleDataBox} />

                                {getCompletedTasks().map((task, index) => (
                                    <TaskItem
                                        key={index}
                                        task={task}
                                        index={index}
                                        currentDate={currentDate}
                                        handleDelete={handleDelete}
                                        handleEditClick={handleEditClick}
                                    />
                                ))}

                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* For Showing All Data */}
                        <div className='px-4 mb-10 mt-10'>
                            <div className='flex flex-row flex-wrap items-center justify-center gap-4 w-auto h-auto'>

                                <AddItem toggleDataBox={toggleDataBox} />

                                {tasks.map((task, index) => (
                                    <TaskItem
                                        key={index}
                                        task={task}
                                        index={index}
                                        currentDate={currentDate}
                                        handleDelete={handleDelete}
                                        handleEditClick={handleEditClick}
                                    />
                                ))}

                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default DashboardView