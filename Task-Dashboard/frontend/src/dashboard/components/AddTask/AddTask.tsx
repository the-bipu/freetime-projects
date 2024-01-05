import React from 'react'

interface Task {
    title: string;
    description: string;
    dueDate: Date;
    priority: string;
    status: string;
}

interface AddTaskProps {
    showdb: boolean;
    toggleDataBox: () => void;
    dataBox: boolean;
    handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ showdb, toggleDataBox, dataBox, handleFormSubmit }) => {
  return (
    <>

        <div className={`absolute w-full h-full flex flex-col justify-center items-center z-10 bg-[#1414146e] ${dataBox ? 'flex' : 'hidden'}`}>
                <button onClick={toggleDataBox} className='bg-zinc-300 px-4 py-1 rounded-t-sm shodowBox'>X</button>

                <form onSubmit={handleFormSubmit} className='relative w-96 h-auto flex flex-col gap-4 p-8 bg-zinc-300 rounded-xl shodowBox'>
                    <div className='flex flex-col'>
                        <label htmlFor="title">Title</label>
                        <input type="text" name='title' className='bg-white p-2 w-full rounded-lg mt-1 outline-none' required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="description">Description</label>
                        <input type="text" name='description' className='bg-white p-2 w-full rounded-lg mt-1 outline-none' required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="date">Due Date</label>
                        <input type="date" name='dueDate' className='bg-white p-2 w-full rounded-lg mt-1 outline-none' required />
                    </div>
                    <div className='flex flex-row w-full gap-2'>
                        <div className='flex flex-col w-1/3'>
                            <label htmlFor="priority">Priority Level</label>
                            <select name='priority' className='bg-white p-2 w-full rounded-lg mt-1 outline-none' required>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                        <div className='flex flex-col w-2/3'>
                            <label htmlFor="status">Completed</label>
                            <select name='status' className='bg-white p-2 w-full rounded-lg mt-1 outline-none' required>
                                <option value="false">Not Completed</option>
                                <option value="true">Completed</option>
                            </select>
                        </div>
                    </div>
                    <button id='buttonV' className='flex items-center justify-center w-full h-auto p-2 rounded-xl mt-2'>
                        Add
                    </button>
                </form>
            </div>

    </>
  )
}

export default AddTask