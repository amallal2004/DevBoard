import { IoIosArrowForward } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";

const ProjectCard = ({title, desc, pendingTask, completedTask, updated, color}) => {
    
    const totalTask = pendingTask + completedTask;
    const percentage = totalTask === 0 ? 0 : Math.round((completedTask / totalTask) * 100);

    console.log(`Title: ${title}, per: ${percentage}`)

    const colors = {
        blue: "bg-blue-500", 
        green: "bg-green-500",
        purple: "bg-purple-500",
        red: "bg-red-500",
        yellow: "bg-yellow-500",
        pink: "bg-pink-500",
        orange: "bg-orange-500",
    }

    return(
        <div className={`flex flex-col gap-3 bg-white p-5 max-w-100 rounded-xl  hover:cursor-pointer hover:border-violet-500 hover:shadow-lg transition duration-300`}>
            <div className="flex flex-row gap-3 items-start">
                <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-gray-500">{desc}</p>
                </div>
                <button className="border rounded-lg border-gray-300 p-2 hover:cursor-pointer hover:bg-gray-100">
                    <IoIosArrowForward size={20}/>
                </button>
            </div>
            <div>
                <div className="flex items-center gap-5">
                    <div className="h-2.5 w-full bg-slate-300 rounded-full">
                        <div style={{width: `${percentage}%`}} className={`h-full ${colors[color]} rounded-full text-white text-xs text-center`}></div>
                    </div>
                    <span>{percentage}%</span>
                </div>
                <p className="text-sm text-gray-500">{completedTask}/{totalTask} tasks</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaRegClock size={15}/>
                <p>{updated}</p>
            </div>
        </div>
    )
}

const ProjectDashboard = () => {
    return (
        <div className="mx-10 my-5">
            <div>
                <h2 className="text-2xl font-bold mb-5">Projects</h2>
                <div className="grid grid-cols-3 gap-x-5 gap-y-8">
                    <ProjectCard title="Portfolio Website" desc="Personal portfolio website to showcase my work and skills." pendingTask={2} completedTask={8} updated="5 days ago" color="blue"/>
                    <ProjectCard title="Task Management System" desc="A comprehensive task management system for tracking and managing daily tasks and projects." pendingTask={15} completedTask={5} updated="1 week ago" color="green"/>
                    <ProjectCard title="E-Commerce Platform" desc="Full-featured e-commerce platform with product catalog, shopping cart, and payment integration." pendingTask={13} completedTask={22} updated="2 weeks ago" color="purple"/>
                    <ProjectCard title="Social Networking Site" desc="Social networking platform connecting users with friends, family, and colleagues." pendingTask={10} completedTask={23} updated="3 weeks ago" color="red"/>
                    <ProjectCard title="Blog and Content Management System" desc="Content management system for creating, publishing, and managing blog posts and articles." pendingTask={4} completedTask={14} updated="1 month ago" color="yellow"/>
                    <ProjectCard title="Project Management Dashboard" desc="Dashboard for managing multiple projects with task tracking and team collaboration." pendingTask={5} completedTask={25} updated="2 weeks ago" color="pink"/>
                    <ProjectCard title="Mobile Banking Application" desc="Mobile banking application with secure login, fund transfers, and transaction history." pendingTask={10} completedTask={27} updated="3 weeks ago" color="orange"/>
                    <ProjectCard title="Online Learning Platform" desc="Online learning platform with course management, student progress tracking, and assessments." pendingTask={3} completedTask={21} updated="1 month ago" color="orange"/>
                </div>
            </div>
        </div>
    )
}

export default ProjectDashboard