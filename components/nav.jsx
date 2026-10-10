"use client";

import Link from "next/link";
import Image from "next/image";
import { RiDashboardFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;

    return (
        <div className="flex justify-between items-center bg-gray-100 px-4 mb-10 text-xl">
            <div className="flex items-center gap-5">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={150} height={150} />
                </Link>
                    <div className={`flex items-center gap-2 ${isActive("/") ? "text-blue-500 border-b-2 border-blue-500" : "text-black"} py-2 px-4`}>
                        <RiDashboardFill />
                        <span>Dashboard</span>
                    </div>
            </div>

            <div>
                <Link href="https://github.com/howp-dev" className="flex items-center gap-2 text-gray-400 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 py-2 px-4 transition-all duration-300">
                    <FaGithub />
                    <span>Github</span>
                </Link>
            </div>
        </div>
  );
};

export default Navbar;