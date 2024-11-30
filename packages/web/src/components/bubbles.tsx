import Pin from "../images/Pin.svg"

const BubbleMessage = () => {
    return (
        <div className="flex flex-row items-center fixed left-16 bottom-14 bg-white">
            <div className="h-10 aspect-square bg-blue-500 grid place-items-center rounded-full rounded-es mr-1">
                <p>👋🏻</p>
            </div>
            <div className="w-[15rem] flex flex-col items-center px-10 py-2 border-2 border-b-[5px] border-blue-500 rounded-xl">
                <p className="text-[1.15rem] font-black text-blue-700">I'M FROM NEPAL</p>
                <p className="text-[0.85rem] font-semibold text-gray-500">YES,from the country of temples and mountains.</p>

                <div className="flex flex-row items-center gap-x-1 mt-4 mb-4">
                    <img src={Pin} alt="Logo" className='h-3'/>
                    <p className="underline font-bold text-xs">Bhaktapur,Nepal</p>
                </div>
            </div>
        </div>
    )
}

export default BubbleMessage;
