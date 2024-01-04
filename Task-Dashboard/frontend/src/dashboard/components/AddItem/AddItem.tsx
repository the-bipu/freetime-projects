import React from 'react'

import { IoMdAdd } from "react-icons/io";

interface AddItemProps {
    toggleDataBox: () => void;
}

const AddItem : React.FC<AddItemProps> = ({ toggleDataBox }) => {
  return (
    <div id='bgBlue' onClick={toggleDataBox} className={`w-80 h-48 py-6 px-8 rounded-lg flex items-center justify-center shadowCard`}>
        <button className='w-16 h-16 rounded-full bg-[#cdcdcda1] flex items-center justify-center'>
            <IoMdAdd className='text-black font-bold text-2xl' />
        </button>
    </div>
  )
}

export default AddItem