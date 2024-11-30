import builder from "../images/builder.png"
import tick from "../images/tick.png"
import fireball from "../images/fireball.gif"

import BubbleMessage from "./bubbles";

//social-icons
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { IoMail } from "react-icons/io5";
import { useState } from "react";

const LandingIntro = () => {
    return (
        <div className="flex flex-col">
            <div className="h-[calc(100dvh-20rem)] flex flex-col items-center justify-center gap-5">
                <div className="flex flex-row items-center">
                    <div className="">
                        <p className="underline text-4xl">I'm</p>
                        <p className="font-black text-4xl mt-2">Santosh<br/><span className="underline">Gyawali</span></p>
                    </div>
                    <img src={builder} alt="Logo" className='h-[9.5rem]'/>
                </div>
                <div className="flex flex-row items-center">
                    <div className="grid grid-cols-2 gap-7 w-14 mr-10">
                        <a href="https://github.com/isantoshgyawali" target="_blank">
                            <FiGithub size={"24"}/>
                        </a>
                        <a href="https://x.com/isantoshgyawali" target="_blank">
                            <FaXTwitter size={"24"}/>
                        </a>
                        <a href="https://linkedin.com/in/isantoshgyawali" target="_blank">
                            <LuLinkedin size={"24"}/>
                        </a>
                        <a href="mailto:isantoshgyawali@gmail.com" target="_blank">
                            <IoMail size={"24"}/>
                        </a>
                    </div>
                    <div className="flex flex-row items-center justify-center border-black p-3 border-2 rounded-xl border-b-[5px]">
                        <p className="font-bold">Full-Stack Software Dev</p>  
                        <img src={tick} alt="Logo" className='h-7 ml-3'/>
                    </div>
                </div>
            </div>

            {/* fireball */}
            <div className="absolute self-center bg-white bottom-5 -z-10">
                <img src={fireball} alt="Logo" className='h-40 ml-3 mix-blend-difference animate-moveDownFade '/>
            </div>
        </div>
    )
}

export default LandingIntro;
