import builder from "../images/builder.png"
import tick from "../images/tick.png"
import fireball from "../images/fireball.gif"

import React from "../images/react.svg"
import TypeScript from "../images/ts.svg"
import Tailwind from "../images/tailwind.svg"
import Go from "../images/go.png"
import TRPC from "../images/trpc.svg"
import Postgres from "../images/postgre.svg"
import ReactNative from "../images/react.svg"
import Expo from "../images/expo.svg"
import Figma from "../images/Figma.png"
import Bash from "../images/bash.svg"

import { WebScreen, NativeScreen } from "./ui/Devices";

import BubbleMessage from "./bubbles";

//social-icons
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { IoMail } from "react-icons/io5";

const Home = () => {
    return (
        <div className="w-dvw transition-opacity duration-750 ease-in-out">
            <div className="sm:h-dvh h-[calc(100dvh-10rem)] flex flex-col items-center justify-between">
                <div className="gap-5 mt-32 sm:scale-100 scale-90">
                    <div className="flex flex-row items-center mt-10">
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
                <div className="relative bg-white mt-5 -z-10">
                    <img src={fireball} alt="Logo" className='h-40 ml-3 mix-blend-difference animate-moveDownFade '/>
                </div>
            </div>

            {/* SECOND-SCREEN*/}
            <div className="h-dvh flex flex-row justify-center items-center flex-wrap-reverse gap-x-14 sm:scale-100 scale-90 ">
                {/* TECH-STACK */}
                <div className="flex flex-row gap-x-10 sm:scale-100 scale-90 sm:-translate-y-0 -translate-y-28">
                    <div className="flex flex-col gap-7 items-center">
                        <p className="font-black text-orange-500">FRONTEND</p>
                        <img src={TypeScript} className="h-12 w-12"/>
                        <img src={React} className="h-12 w-12"/>
                        <img src={Tailwind} className="h-12 w-12"/>
                    </div>
                    <div className="flex flex-col gap-7 items-center">
                        <p className="font-black text-orange-500">BACKEND</p>
                        <img src={Go} className="h-12 w-12"/>
                        <img src={TRPC} className="h-12 w-12"/>
                        <img src={Postgres} className="h-12 w-12"/>
                    </div>
                    <div className="flex flex-col gap-7 items-center">
                        <p className="font-black text-orange-500">MOBILE</p>
                        <img src={ReactNative} className="h-12 w-12"/>
                        <img src={Expo} className="h-12 w-12"/>
                    </div>
                    <div className="flex flex-col gap-7 items-center">
                        <p className="font-black text-orange-500">OTHER</p>
                        <img src={Figma} className="h-12 w-12"/>
                        <img src={Bash} className="h-12 w-12"/>
                    </div>
                </div>

                {/*  screens  */}
                <div className="flex flex-col items-center justify-center px-5">
                    <div className="flex flex-col items-end relative top-5">
                        <p style={{fontSize: 'min(4.5rem, 12vw)'}} className="font-black">DEVELOPING</p>
                        <p style={{fontSize: 'min(4rem, 11vw)'}} className="text-[4rem] font-black -mt-5">APPS <span className="text-orange-600">&</span></p>
                        <p style={{fontSize: 'min(4rem, 11vw)'}} className="text-[4rem] font-black -mt-5">SITES</p>
                        <p style={{fontSize: 'min(1.3rem, 2.5vw)'}} className="absolute custom-rotation-two font-semibold text-gray-400 text-xl sm:-right-10 -right-6 sm:top-8 top-5">since-2021</p>
                    </div>
                    <div className="flex flex-row items-end sm:-translate-y-32 -translate-y-20 sm:translate-x-0 translate-x-5">
                        <NativeScreen/>
                        <div className="translate-y-6 sm:-translate-x-16 -translate-x-10">
                            <WebScreen/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
