const Instructions = () => {
    return (
        <div className="mx-8 text-gray-500 dark:text-gray-400 w-[200px] text-[13px] text-black dark:text-gray-400">
            <h1 className="mb-4 text-black dark:text-gray-400">Use the canvas to build your graph.</h1>
            <div className="mb-2">
                <p className="float-left text-gray-700 dark:text-gray-300 mr-2 font-bold text-black dark:text-gray-300">To add a vertex:</p>
                <p className="text-black dark:text-gray-400"> double-click, then add a label by typing a unique 
                    <span className="italic"> alphabetic character </span>
                </p>
            </div>
            <div className="mb-2">
                <p className="float-left text-gray-700 dark:text-gray-300 mr-2 font-bold text-black dark:text-gray-300">To add an edge: </p>
                <p className="text-black dark:text-gray-400">shift+drag from one vertex to another, then add a weight by typing a
                    <span className="italic"> number</span>
                </p>
            </div>
            <div className="mb-2">
                <p className="float-left text-gray-700 dark:text-gray-300 mr-2 font-bold text-black dark:text-gray-300">To move a vertex: </p>
                <p className="text-black dark:text-gray-400">drag it</p>
            </div>
            <div className="mb-2">
                <p className="float-left text-gray-700 dark:text-gray-300 mr-2 font-bold text-black dark:text-gray-300">To edit an element: </p>
                <p className="text-black dark:text-gray-400">click it</p>
            </div>
            <div className="mb-8">
                <p className="float-left text-gray-700 dark:text-gray-300 mr-2 font-bold text-black dark:text-gray-300">To delete an element: </p>
                <p className="text-black dark:text-gray-400">press the 
                    <span className="italic"> delete </span>
                     key (fn + delete on mac)</p>
            </div>
        </div>
    )
}

export default Instructions;
