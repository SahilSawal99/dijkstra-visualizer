import ThemeToggle from './theme-toggle'

const Header = () => {
    return (
        <header className="flex justify-between items-start">
            <div className="flex-1">
                <h1 className="mt-[4vh] mb-4 text-center text-3xl font-semibold text-gray-800 dark:text-gray-100 italic text-black dark:text-gray-100">
                    Dijkstra&apos;s Algorithm Visualizer
                </h1>
                <p className="mt-1 mb-6 text-gray-500 dark:text-gray-400 text-center text-[13px] text-black dark:text-gray-400">
                    A graph visualization tool that can simulate Dijkstra&apos;s shortest path algorithm.
                </p>
            </div>
            <div className="mt-[4vh] mr-4">
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header;
