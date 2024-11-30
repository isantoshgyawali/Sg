import { Link, useLocation } from "react-router-dom";
import { MdOutlineNightlight } from "react-icons/md";
import Logo from '../images/Logo.svg';
import Nepal from '../images/nepal.png';

import BubbleMessage from "./bubbles";
import { useState } from "react";
import { on } from "events";

export const NavBar = () => {
  return (
    <header className='w-full px-7 py-2 flex flex-row items-center justify-between h-32'>
        <img src={Logo} alt="Logo" className='img-custom ml-1 rotate-90'/>
    </header>
  )
}

export const MenuBar = () => {
    const location = useLocation();
    const activePageStyle = (path:string) =>
        location.pathname === path
        ? "text-orange-500 font-black"
        : "text-gray-400 font-bold";
    
    return (
        <div className="fixed h-full top-0 right-7 flex items-center">
            <div className="grid gap-y-5 place-items-center">
                <Link to="/" 
                    className={`text-xl custom-rotation ${activePageStyle("/")}`}
                >
                    HOME
                </Link>
                <p className="text-2xl text-gray-400">x</p>
                <Link to="/projects" 
                    className={`text-xl custom-rotation ${activePageStyle("/projects")}`}
                >
                    PROJECTS
                </Link>
                <p className="text-2xl text-gray-400">x</p>
                <Link to="/readLogs" 
                    className={`text-xl custom-rotation ${activePageStyle("/readLogs")}`}
                >
                    READLOGS
                </Link>
            </div>
            {/* <div className="h-full w-1 bg-orange-700"></div> */}
        </div>
    );
};

export const SideBar = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const onClickFlag = () => {
        setIsVisible(!isVisible)
    }
    
    return (
        <>
            <div className="fixed flex flex-col gap-y-5 items-center left-7 bottom-7">
                <div className="group">
                    <img src={Nepal} alt="Logo" className='h-10 ml-1 cursor-pointer' onClick={onClickFlag}/>
                    <div className="hidden group-hover:block">
                        <BubbleMessage/>
                    </div>
                </div>
                <MdOutlineNightlight className="-rotate-45 cursor-pointer" size={"24"}/>
            </div>

        </>
    )
}
