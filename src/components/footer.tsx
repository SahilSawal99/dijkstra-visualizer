import Link from "next/link";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="mt-6 p-6 text-gray-500 dark:text-gray-400 text-center text-[13px]">
            <div className="flex items-center justify-center gap-2">
                <span>Made by</span>
                <Link href="https://www.linkedin.com/in/sahil-sawal" target="_blank">
                    <div className="text-sky-600 dark:text-sky-400 inline-flex items-center gap-1 hover:underline"> <FaLinkedin className="w-4 h-4" /> Sahil Sawal </div>
                </Link>
                <span>in 2026</span>
                <span>•</span>
                <Link href='https://github.com/SahilSawal99' target="_blank">
                    <div className="text-sky-600 dark:text-sky-400 inline-flex items-center gap-1 hover:underline"> <FaGithub className="w-4 h-4" /> GitHub </div>
                </Link>
            </div>
        </div>
    )
}

export default Footer;