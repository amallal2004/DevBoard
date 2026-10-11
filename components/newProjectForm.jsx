'use client'

import { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";


const AddButton = ({ type, title }) => {

    const types = {
        outline: "flex items-center justify-center border border-gray-300 rounded-lg text-sm bg-white px-4 py-2 hover:border-blue-500 hover:text-blue-500 cursor-pointer",
        normal: "flex items-center justify-center rounded-lg max-w-30 bg-blue-500 text-white px-4 py-2 hover:bg-blue-800 cursor-pointer",
    }

    return (
        <div className={`${types[type]}`}>
            <p>
                {title}
            </p>
        </div>
    )
}

const NewProjectForm = ({onClose}) => {

    const [tasks, setTasks] = useState([
        { id: 1, title: "" },
        { id: 2, title: "" },
        { id: 3, title: "" },
    ])

    const idRef = useRef(3)

    const handileTaskTitle = (id, title) => {
        setTasks(prevTasks => prevTasks.map(task => task.id === id ? { ...task, title } : task))
    }

    const handleDeleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    }

    const handleAddTask = (e) => {
        e.preventDefault()
        idRef.current += 1
        setTasks([...tasks, { id: idRef.current, title: "" }])
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-lg w-125 p-5">
                <div className="flex items-start justify-between mb-5">
                    <div>
                        <h2 className="text-2xl font-bold">Create New Project</h2>
                        <p className="text-lg text-gray-400">Add a project and start tracking your work.</p>
                    </div>
                    <button onClick={(e) => onClose(e)} className="cursor-pointer hover:text-red-500 transition hover:bg-gray-50 p-1 rounded-full">
                        <IoClose size={20} />
                    </button>
                </div>
                <div>
                    <form action="">
                        <div className="flex flex-col gap-1 mb-3">
                            <label htmlFor="title" className="font-bold text-lg ">Project Title</label>
                            <input id="title" name="title" type="text" placeholder="Developer Dashboard" className="border border-gray-300 rounded-lg px-2 py-1 focus:outline-none placeholder:text-gray-300 hover:border-blue-600 focus:border-blue-600 transition" />
                        </div>

                        <div className="flex flex-col gap-1 mb-4">
                            <label htmlFor="description" className="font-bold text-lg ">Description</label>
                            <textarea name="description" id="description" placeholder="A short description of your project" row={3} className="border border-gray-300 rounded-lg px-2 py-1 focus:outline-none placeholder:text-gray-300 hover:border-blue-600 focus:border-blue-600 transition"></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <AddButton type="outline" title={"Cancel"} />
                            <AddButton type="normal" title={"Create Project"} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewProjectForm