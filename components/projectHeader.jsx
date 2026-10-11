
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const BackButton = () => {
    return (
        <Link href={"/"} className="flex gap-2 items-center text-blue-600 hover:text-blue-700">
            <FaArrowLeftLong />
            <p>Back to Dashboard</p>
        </Link>
    )
}

const ProgressBar = ({taskPending, taskCompleted, percent}) => {
    return (
        <div className="flex flex-col gap-2 bg-white rounded-lg px-4 py-3 mt-5">
            <div className="flex justify-between text-xl font-bold">
                <p>Progress</p>
                <span>{percent}%</span>
            </div>
            <div className="h-2.5 w-full bg-gray-200 rounded-full">
                <div style={{width: `${percent}%`}} className="h-2.5 w-full bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-500">{taskPending} of {taskCompleted} task completed</p>
        </div>
    )
}

const ProjectHeader = ({title, description}) => {
    const taskPending = 5;
    const taskCompleted = 10;
    const percent = Math.round((taskCompleted / (taskPending + taskCompleted)) * 100);
    
    return (
        <div className="flex flex-col py-4 max-w-7xl mx-auto w-full">
            <BackButton />
            <h1 className="text-4xl font-bold text-gray-900 py-2">{title}</h1>
            <p className="text-gray-500">{description}</p>
            <ProgressBar taskPending={taskPending} taskCompleted={taskCompleted} percent={percent}/>
        </div>
    )
}

export default ProjectHeader