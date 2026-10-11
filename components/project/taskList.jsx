'use client'

import { useState } from "react";
import { MdEdit, MdDelete, MdCancel } from "react-icons/md";
import { CiSaveUp1 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

const TaskItem = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editTask, setEditTask] = useState(task.name)


    return (
        <div key={task.id} className="flex items-center w-full">
            {
                isEditing ?
                    <input type="text" value={editTask} onChange={(e) => setEditTask(e.target.value)} className="flex-1 border-b border-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300 ease-in-out" />
                    :
                    <label className="flex flex-1 items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="peer sr-only" checked={task.status === "completed"} onChange={() => {}} />
                        <span className="w-5 h-5 border border-gray-400 rounded flex items-center justify-center text-transparent peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-checked:text-white">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </span>
                        <span className="text-black peer-checked:text-gray-500 peer-checked:line-through transition-all duration-300 ease-in-out">{task.name}</span>
                    </label>
            }
            <div className="flex items-center gap-3">
                {isEditing ? 
                    <>
                        <button>
                            <CiSaveUp1 className="cursor-pointed hover:bg-green-500 hover:text-white rounded-full p-1 size-6 transition duration-300 easy-in-out" />
                        </button>
                        <button>
                            <MdCancel className="cursor-pointed hover:bg-red-500 hover:text-white rounded-full p-1 size-6 transition duration-300 easy-in-out" onClick={() => setIsEditing(false)}/>
                        </button>
                    </>
                :
                    <>
                        <button>
                            <MdEdit className="cursor-pointed hover:bg-green-500 hover:text-white rounded-full p-1 size-6 transition duration-300 easy-in-out" onClick={() => setIsEditing(true)} />
                        </button>
                        <button>
                            <MdDelete className="cursor-pointed hover:bg-red-500 hover:text-white rounded-full p-1 size-6 transition duration-300 easy-in-out" />
                        </button>
                    </>
                }
            </div>
        </div>
    )
}


const TaskList = ({ pendingTasks, completedTasks, tasks }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 w-1/2 mx-5">
            <div className="flex w-full items-center justify-between">
                <h2 className="text-xl font-bold">Tasks</h2>
                <p className="text-md text-gray-400">{pendingTasks}/{pendingTasks + completedTasks} completed</p>
            </div>
            <div className="flex items-center justify-center w-full mt-5">
                <div className="w-full flex flex-col gap-3">
                    {tasks.map(task => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                    <div className="flex bg-blue-50/50 border-2 border-dashed border-blue-500/50 rounded-lg text-blue-500 p-2 items-center gap-2 w-full justify-center hover:border-blue-500/50 hover:bg-blue-500/20 cursor-pointer">
                        <FaPlus />
                        <span>Add Task</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskList