'use client'

import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import { MdEdit, MdDelete } from "react-icons/md";
import NewNoteForm from "./newNoteForm";

const NoteItem = ({ note }) => {
    return (
        <div className="flex items-start gap-2 border border-gray-200 rounded p-3">
            <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg break-words">{note.title}</h3>
                <p className="text-md text-gray-400 break-words">{note.description}</p>
            </div>
            <div className="flex flex-col items-center self-stretch justify-between gap-2 shrink-0">
                <button className="cursor-pointer text-gray-500 hover:text-blue-600">
                    <MdEdit />
                </button>
                <button className="cursor-pointer text-gray-500 hover:text-red-600">
                    <MdDelete />
                </button>
            </div>
        </div>
    )
}

function AddNoteButton({ text }) {

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
                open && <NewNoteForm onClose={toggleForm} />
            }
        </>
    );
}

const NoteList = ({ notes }) => {
    return (
        <div className="bg-white p-4 rounded-lg w-1/2 mr-5">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Notes</h2>
                <AddNoteButton />
            </div>
            <div className="flex flex-col gap-3 mt-5">
                {notes.map(note => (
                    <NoteItem key={note.id} note={note} />
                ))}
            </div>
        </div>
    )
}

export default NoteList