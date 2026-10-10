import { FaPlus } from "react-icons/fa";

export default function Button({ text }) {
    return (
        <button className="flex items-center gap-2 text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800 cursor-pointer">
            <FaPlus />
            {text}
        </button>
    );
}