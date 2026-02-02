import { RefObject } from "react"

const PriorityQueue = ({
    pqRef
} : {
    pqRef: RefObject<HTMLTableElement>
}) => {
    return (
        <div className="w-[200px] mx-8">
            <h1 className="mb-2 text-gray-750 dark:text-gray-300 text-[15px] text-center font-bold text-black dark:text-gray-300">Priority Queue</h1>
            <table ref={pqRef} className="w-full">
                <tbody>
                    <tr className="h-[30px] text-[14px]">
                        <th className="border border-gray-300 dark:border-gray-600 dark:text-gray-300 text-black">Vertex</th>
                        <th className="border border-gray-300 dark:border-gray-600 dark:text-gray-300 text-black">Distance</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PriorityQueue;
