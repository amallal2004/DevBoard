'use client'
import { IoClose } from "react-icons/io5";


const Button = ({ type, title }) => {

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

const NewNoteForm = ({ onClose }) => {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-lg p-5">
                <div className="flex items-center justify-between gap-10 mb-5">
                    <div>
                        <h1 className="text-3xl font-bold">Add Note</h1>
                        <p className="text-sm text-gray-500">Add a note to remember important information about this project</p>
                    </div>
                    <div className="p-2 hover:bg-red-50/50 hover:text-red-500 rounded-full transition duration-300 easy-in-out cursor-pointer">
                        <IoClose size={20} onClick={onClose} />
                    </div>
                </div>
                <form action="">
                    <div className="flex flex-col gap-1 mb-3">
                        <label htmlFor="title" className="font-bold text-lg ">Title</label>
                        <input id="title" name="title" type="text" placeholder="Add a title for your note" className="border border-gray-300 rounded-lg px-2 py-1 focus:outline-none placeholder:text-gray-300 hover:border-blue-600 focus:border-blue-600 transition" />
                    </div>

                    <div className="flex flex-col gap-1 mb-4">
                        <label htmlFor="description" className="font-bold text-lg ">Note</label>
                        <textarea name="description" id="description" placeholder="Add a note to remember important information about this project" row={3} className="border border-gray-300 rounded-lg px-2 py-1 focus:outline-none placeholder:text-gray-300 hover:border-blue-600 focus:border-blue-600 transition"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <Button type="outline" title={"Cancel"} />
                        <Button type="normal" title={"Create Note"} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewNoteForm