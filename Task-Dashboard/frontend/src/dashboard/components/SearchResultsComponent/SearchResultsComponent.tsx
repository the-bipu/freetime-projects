// SearchResultComponent.tsx

import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

interface Task {
    title: string;
    description: string;
    dueDate: Date;
    priority: string;
    status: string;
}

interface SearchResultProps {
    searchResults: Task[];
    currentDate: Date;
    handleDelete: (index: number) => void;
    handleEditClick: (index: number) => void;
}

const SearchResultComponent: React.FC<SearchResultProps> = ({
    searchResults,
    currentDate,
    handleDelete,
    handleEditClick,
}) => {
    return (
        <div className='px-4 mb-20 mt-10'>
            <p className='px-20 mb-4'>Search Results:</p>

            <div className='flex flex-row flex-wrap items-center justify-center gap-4 w-auto h-auto mb-8'>

                {searchResults.length > 0 ? (
                    <>
                        {searchResults.map((task, index) => (
                            <TaskItem
                                key={index}
                                task={task}
                                index={index}
                                currentDate={currentDate}
                                handleDelete={handleDelete}
                                handleEditClick={handleEditClick}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <p>No Matching Data</p>
                    </>
                )}


            </div>

            <hr className='w-auto mt-4 mx-20 border-1' />
        </div>
    );
};

export default SearchResultComponent;
