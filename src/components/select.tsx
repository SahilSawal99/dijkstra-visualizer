import Refs from "@/interfaces/refs"

const Select = ({
    refs
} : {
    refs: Refs
}) => {
    return (
        <div className="text-center">
            <div className="inline-block">
                <button 
                    ref={refs.selectModeRef} 
                    className="py-1 px-6 mt-5 float-left text-gray-700 dark:text-gray-300 italic border border-gray-800 dark:border-gray-700 text-center text-[13px] rounded hover:bg-amber-400 dark:hover:bg-amber-600 dark:bg-gray-800 text-black dark:text-gray-300">
                        Select Start Vertex
                </button>
                <span 
                    ref={refs.startPromptRef} 
                    className="p-1 mt-5 float-left text-gray-700 dark:text-gray-300 text-[13px] text-black dark:text-gray-300" 
                    hidden={true}>
                        Select a vertex to <span className="text-green-600 dark:text-green-400">start</span> with.
                </span>
                <span 
                    ref={refs.retryPromptRef} 
                    className="p-1 ml-8 mt-5 float-left text-gray-700 dark:text-gray-300 text-[13px] text-black dark:text-gray-300" 
                    hidden={true}>
                        Please make sure all vertices have a label and all edges have a weight.
                </span>
                <span 
                    ref={refs.emptyPromptRef} 
                    className="p-1 ml-8 mt-5 float-left text-gray-700 dark:text-gray-300 text-[13px] text-black dark:text-gray-300" 
                    hidden={true}>
                        Please add a few vertices first.
                </span>
                <button 
                    ref={refs.startVisRef} 
                    className="py-1 px-6 mt-5 ml-4 float-left text-gray-100 dark:text-gray-900 italic border border-gray-800 dark:border-gray-700 bg-sky-800 dark:bg-sky-600 text-center text-[13px] rounded hover:bg-sky-700 dark:hover:bg-sky-500" 
                    hidden={true}>
                        Visualize Dijkstra&apos;s Algorithm
                </button>
                <span 
                    ref={refs.visPromptRef} 
                    className="p-1 mt-5 float-left text-gray-700 dark:text-gray-300 text-[13px] text-black dark:text-gray-300" 
                    hidden={true}>
                        Visualizing Dijkstra&apos;s Algorithm...
                </span>
                <button
                    ref={refs.restartRef} 
                    className="py-1 px-6 mt-5 ml-4 float-left text-gray-700 dark:text-gray-300 italic border border-gray-800 dark:border-gray-700 text-center text-[13px] rounded hover:bg-amber-400 dark:hover:bg-amber-600 dark:bg-gray-800 text-black dark:text-gray-300" 
                    hidden={true}>
                        Restart Visualization
                </button>
            </div>
        </div>    
    )
}

export default Select;
