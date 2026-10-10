'use client'

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import NewProjectForm from "@/components/newProjectForm";

export default function Button({ text }) {

    const [open, setOpen] = useState(false)

    const toggleForm = (e) => {
        e.preventDefault()
        setOpen(!open)
    }

    return (
        <>
            <button onClick={(e) => toggleForm(e)} className="flex items-center gap-2 text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800 cursor-pointer">
                <FaPlus />
                {text}
            </button>
            {
                open && <NewProjectForm onClose={toggleForm} />
            }
        </>
    );
}