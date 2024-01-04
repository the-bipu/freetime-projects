import React from 'react'

interface Task {
    title: string;
    description: string;
    dueDate: Date;
    priority: string;
    status: string;
}

interface EditTaskProps {
    showdb: boolean;
    editIndex: number | null;
    updatedTask: Task | null;
    handleEditSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    setUpdatedTask: React.Dispatch<React.SetStateAction<Task | null>>;
}

const EditTask: React.FC<EditTaskProps> = ({ showdb, editIndex, updatedTask, handleEditSubmit, setUpdatedTask }) => {
    return (
        <div>
            {editIndex !== null && updatedTask && (
                <div className={`absolute w-full h-full flex justify-center items-center z-10 bg-[#1414146e]`}>
                    <form onSubmit={handleEditSubmit} className='w-96 h-auto flex flex-col gap-4 p-8 bg-zinc-300 rounded-xl'>
                        <div className='flex flex-col'>
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name='title'
                                value={updatedTask.title}
                                onChange={(e) =>
                                    setUpdatedTask({
                                        ...updatedTask,
                                        title: e.target.value,
                                    })
                                }
                                className='bg-white p-2 w-full rounded-lg mt-1 outline-none'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                name='description'
                                value={updatedTask.description}
                                onChange={(e) =>
                                    setUpdatedTask({
                                        ...updatedTask,
                                        description: e.target.value,
                                    })
                                }
                                className='bg-white p-2 w-full rounded-lg mt-1 outline-none'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="date">Due Date</label>
                            <input
                                type="date"
                                name='date'
                                value={updatedTask.dueDate instanceof Date ? updatedTask.dueDate.toISOString().split('T')[0] : ''}
                                onChange={(e) =>
                                    setUpdatedTask({
                                        ...updatedTask,
                                        dueDate: new Date(e.target.value),
                                    })
                                }
                                className='bg-white p-2 w-full rounded-lg mt-1 outline-none'
                            />
                        </div>
                        <div className='flex flex-row w-full gap-2'>
                            <div className='flex flex-col w-1/3'>
                                <label htmlFor="priority">Priority Level</label>
                                <select
                                    name='priority'
                                    value={updatedTask.priority}
                                    onChange={(e) =>
                                        setUpdatedTask({
                                            ...updatedTask,
                                            priority: e.target.value,
                                        })
                                    }
                                    className='bg-white p-2 w-full rounded-lg mt-1 outline-none'
                                >
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                            </div>
                            <div className='flex flex-col w-2/3'>
                                <label htmlFor="status">Complete</label>
                                <select
                                    name='status'
                                    value={updatedTask.status}
                                    onChange={(e) =>
                                        setUpdatedTask({
                                            ...updatedTask,
                                            status: e.target.value,
                                        })
                                    }
                                    className='bg-white p-2 w-full rounded-lg mt-1 outline-none'
                                >
                                    <option value="false">Not Completed</option>
                                    <option value="true">Completed</option>
                                </select>
                            </div>
                        </div>
                        <button id='buttonV' type="submit" className='py-2 rounded-lg mt-2'>Save Changes</button>
                    </form>
                </div>
            )}
        </div >
    )
}

export default EditTask