import React from 'react'

const recycle = () => {
  return (
    <div>

      {/* All route */}

      {/* <div id='bgBlue' key={index} className='flex flex-row md:w-80 w-full py-6 px-8 rounded-lg'>
        <div className='relative flex flex-col w-full gap-4'>
          <div className='flex flex-row justify-between'>
            <div
              className={`w-auto px-4 py-1 flex items-center justify-center rounded-md text-white font-bold text-sm 
                                                    ${task.priority === 'Hard' ? 'bg-red-500' :
                  task.priority === 'Medium' ? 'bg-orange-500' :
                    'bg-green-500'}`}
            >
              {task.priority}
            </div>
            <div className='w-auto bg-[#3638b8] px-4 py-1 flex items-center justify-center rounded-md text-white font-bold text-sm'>
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
                {task.dueDate.toDateString() === currentDate.toDateString() ? (
                  <div>Today</div>
                ) : task.dueDate > currentDate ? (
                  <div>Upcoming</div>
                ) : (
                  <div>Gone</div>
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
      </div> */}

      {/* Completed Route */}
      {/* <div id='bgBlue' key={index} className='flex flex-row md:w-80 w-full py-6 px-8 rounded-lg'>

        <div className='relative flex flex-col w-full gap-4'>
          <div className='flex flex-row justify-between'>
            <div
              className={`w-auto px-4 py-1 flex items-center justify-center rounded-md text-white font-bold text-sm 
                                                    ${task.priority === 'Hard' ? 'bg-red-500' :
                  task.priority === 'Medium' ? 'bg-orange-500' :
                    'bg-green-500'}`}
            >
              {task.priority}
            </div>
            <div className='w-auto bg-[#3638b8] px-4 py-1 flex items-center justify-center rounded-md text-white font-bold text-sm'>
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
                {task.dueDate.toDateString() === currentDate.toDateString() ? (
                  <div>Today</div>
                ) : task.dueDate > currentDate ? (
                  <div>Upcoming</div>
                ) : (
                  <div>Gone</div>
                )}
              </div>
              <div className='text-lg flex items-center justify-center'>
                <button>
                  <BiTask className='text-green-700' />
                </button>
              </div>
            </div>
            <div className='w-full flex flex-row justify-end gap-4 text-2xl'>
              <button className='text-[red]' onClick={() => handleDelete(index)}><MdDelete /></button>
              <button className='text-[blue] text-xl' onClick={() => handleEditClick(index)}><FaEdit /></button>
            </div>
          </div>
        </div>
      </div> */}


      {/* OverDue Route */}
      {/* <div id='bgBlue' key={index} className='flex flex-row md:w-80 w-full py-6 px-8 rounded-lg'>

        <div className='relative flex flex-col w-full gap-4'>
          <div className='flex flex-row justify-between'>
            <div
              className={`w-auto px-4 py-1 flex items-center justify-center rounded-md text-white font-bold text-sm 
                                                    ${task.priority === 'Hard' ? 'bg-red-500' :
                  task.priority === 'Medium' ? 'bg-orange-500' :
                    'bg-green-500'}`}
            >
              {task.priority}
            </div>
            <div className='w-auto bg-[#3638b8] px-4 py-1 flex items-center justify-center rounded-md text-white font-bold text-sm'>
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
                {task.dueDate.toDateString() === currentDate.toDateString() ? (
                  <div>Today</div>
                ) : task.dueDate > currentDate ? (
                  <div>Upcoming</div>
                ) : (
                  <div>Gone</div>
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
      </div> */}


      {/* Upcoming Route */}
      {/* <div id='bgBlue' key={index} className='flex flex-row md:w-80 w-full py-6 px-8 rounded-lg'>

        <div className='relative flex flex-col w-full gap-4'>
          <div className='flex flex-row justify-between'>
            <div
              className={`w-auto px-4 py-1 flex items-center justify-center rounded-md text-white font-bold text-sm 
                                                    ${task.priority === 'Hard' ? 'bg-red-500' :
                  task.priority === 'Medium' ? 'bg-orange-500' :
                    'bg-green-500'}`}
            >
              {task.priority}
            </div>
            <div className='w-auto bg-[#3638b8] px-4 py-1 flex items-center justify-center rounded-md text-white font-bold text-sm'>
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
                {task.dueDate.toDateString() === currentDate.toDateString() ? (
                  <div>Today</div>
                ) : task.dueDate > currentDate ? (
                  <div>Upcoming</div>
                ) : (
                  <div>Gone</div>
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
      </div> */}


      {/* Dashboard Slider */}
      {/* <div className={`flex flex-col items-center justify-between ${showdb ? 'flex' : 'hidden'} w-1/5 h-[44.8rem] bg-[#0d0c22] py-12 px-6`}>
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
      </div> */}


      {/* Form For Editing Data */}
      {/* {editIndex !== null && updatedTask && (
        <div className='absolute w-auto h-auto flex justify-center items-center z-10 left-1/2 top-1/4'>
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
            <div className='flex flex-row w-full'>
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
      )} */}

    </div>
  )
}

export default recycle