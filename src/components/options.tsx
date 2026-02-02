import Refs from "@/interfaces/refs"

const Options = ({ 
    refs
} : {
    refs: Refs
}) => {
    return (
        <div className="inline mx-8 text-gray-700 dark:text-gray-300 text-[13px]">
            <button ref={refs.resetRef} className="py-1 px-3 w-fit italic border border-gray-800 dark:border-gray-700 text-center text-[13px] rounded hover:bg-amber-400 dark:hover:bg-amber-600 dark:bg-gray-800 text-black dark:text-gray-300">
                Reset
            </button>
            <button ref={refs.editRef} className="ml-2 py-1 px-3 w-fit italic border border-gray-800 dark:border-gray-700 text-center text-[13px] rounded hover:bg-amber-400 dark:hover:bg-amber-600 dark:bg-gray-800 text-black dark:text-gray-300" hidden={true}>
                Edit
            </button>
            <button ref={refs.buildRef} className="ml-2 py-1 px-3 w-fit italic border border-gray-800 dark:border-gray-700 text-center text-[13px] rounded hover:bg-amber-400 dark:hover:bg-amber-600 dark:bg-gray-800 text-black dark:text-gray-300">
                Pre-Built
            </button>
        </div>
    )
        
        
}

export default Options;
