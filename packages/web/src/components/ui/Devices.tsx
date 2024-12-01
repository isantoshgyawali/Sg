import { useNavigate, useNavigation } from "react-router-dom";
import Android from "../../images/Android.png"
import IOS from "../../images/IOS.png"

import { RiGlobalLine, RiSearchLine } from "react-icons/ri";

export const NativeScreen = () => {
    return (
        <div className="flex flex-row">
            <div style={{height: 'min(24rem, 60vw)', width: 'min(13rem, 34vw)'}} className="bg-white flex flex-col items-center justify-between py-4 border-2 border-black border-b-[10px] border-l-[5px] rounded-3xl">
                <div className="flex flex-row gap-2">
                    <span className="h-1.5 w-2 bg-black rounded-3xl"></span>
                    <span className="h-1.5 w-16 bg-black rounded-3xl"></span>
                </div>
                <div className="grid place-items-center gap-0">
                    <img src={Android} style={{height: 'min(6rem, 14vw)'}}/>
                    <img src={IOS} style={{height: 'min(4rem, 11vw)'}}/>

                </div>
                <span className="h-[0.2rem] w-16 bg-black rounded-full"></span>
            </div>

            <div className="flex flex-col gap-y-3 ml-0.5 mt-12">
                <span className="h-12 w-1 bg-black rounded-full"></span>
                <span className="h-7 w-1 bg-black rounded-full"></span>
            </div>
        </div>
    )
}

export const WebScreen = () => {
    return (
        <div style={{height: 'min(16rem, 40vw)'}} className="sm:w-auto w-60 aspect-square border-2 border-black rounded-3xl bg-white py-5">
            <div className="flex flex-row gap-x-2 ml-7">
                <span className="h-2.5 aspect-square rounded-full bg-red-500"></span>
                <span className="h-2.5 aspect-square rounded-full bg-orange-300"></span>
                <span className="h-2.5 aspect-square rounded-full bg-green-500"></span>
            </div>
            <div className="flex flex-row justify-between items-center px-3 py-1 mt-5 border-2 border-black rounded-xl sm:mx-10 mx-3 sm:gap-x-5 gap-x-1">
                <RiGlobalLine style={{fontSize: 'min(20px, 3.5vw)'}}/>      
                <a href="https://youtube.com/watch?v=oHg5SJYRHA0" style={{fontSize: 'min(0.875rem, 3vw)'}} className="inline-block max-w-48 whitespace-nowrap overflow-hidden text-ellipsis text-orange-500 hover:text-orange-200">https://www.youtube.com/watch?v=oHg5SJYRHA0</a>
                <RiSearchLine style={{fontSize: 'min(20px, 3.5vw)'}} onClick={() => window.open("https://youtube.com/watch?v=oHg5SJYRHA0", "_blanck")}/>
            </div>
        </div>
    )
}
