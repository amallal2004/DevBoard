import Button from "@/components/button"
import { FaRegClock } from "react-icons/fa6";
import { FaRegFolder } from "react-icons/fa6";
import { MdOutlineTaskAlt } from "react-icons/md";


const Card = ({icon, title, amount, color}) => {

    const bgColor = {
        blue: "bg-blue-500/20 text-blue-300",
        green: "bg-green-500/20 text-green-400",
        purple: "bg-purple-500/20 text-purple-400",
    }

    return (
        <div className="flex items-center gap-5 bg-white px-5 py-3 w-70 rounded-lg hover:shadow-lg hover:bg-gray-50 transition duration-300">
            <div className={`${bgColor[color]} p-2 rounded-lg text-blue-500`}>
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-lg text-gray-800">{title}</span>
                <span className="text-2xl font-bold">{amount}</span>
            </div>
        </div>
    )
}

const Statastics = () => {
    return (
        <main className="flex flex-col gap-5 border-b pb-10 border-gray-300 mx-10">
            <div className="flex items-center justify-between px-5">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold">My Projects</h1>
                    <p className="text-sm text-gray-400">Manage your development projects and track their progress...</p>
                </div>
                <Button text={"New Project"} />
            </div>
            <div className="flex items-center justify-around">
                <Card icon={<FaRegFolder size={25}/>} title={"Total Projects"} amount={"6"} color="blue" />
                <Card icon={<FaRegClock size={25}/>} title={"Active Projects"} amount={"4"} color="green" />
                <Card icon={<MdOutlineTaskAlt size={25}/>} title={"Completed Projects"} amount={"2"} color="purple" />
             </div>
        </main>
    )
}

export default Statastics
