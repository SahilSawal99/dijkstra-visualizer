import { RefObject } from "react";

const Pause = ({
    pauseRef
} : {
    pauseRef: RefObject<HTMLButtonElement>
}) => {
    return (
        <div className="mx-8 w-[180px]">
            <button ref={pauseRef} className="mt-4 py-1 px-3 w-fit italic border border-gray-800 dark:border-gray-700 text-center text-gray-700 dark:text-gray-300 text-[13px] rounded hover:bg-amber-400 dark:hover:bg-amber-600 dark:bg-gray-800 text-black dark:text-gray-300" hidden={true}>
                Pause
            </button>
        </div>
    )
}

export default Pause;
