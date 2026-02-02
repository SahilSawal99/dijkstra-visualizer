import Refs from "@/interfaces/refs"

const Slider = ({ 
    refs
} : {
    refs: Refs
}) => {
    return (
        <div className="mx-8 mt-4 select-none">
            <h1 className="text-[12px] font-bold text-black dark:text-gray-300">Speed</h1>
            <div ref={refs.sliderRef} className="w-[180px] h-2 bg-black dark:bg-gray-300 rounded inline-block hover:cursor-pointer">
                <div ref={refs.thumbRef} className="-top-1 -ml-[6px] left-[50%] w-3 h-4 rounded-xl relative bg-black dark:bg-slate-400"></div>
            </div>
            <table className="w-[180px]">
                <tbody>
                <tr className="text-[11px] text-black dark:text-gray-300">
                    <td className="w-[24%]">.25x</td>
                    <td className="w-[23%]">.5x</td>
                    <td className="w-[22%]">1x</td>
                    <td className="w-[22%]">2x</td>
                    <td className="w-[20%]">4x</td>
                </tr>
                </tbody>
                
            </table>
        </div>
    )
}

export default Slider;
