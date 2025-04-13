import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import FloatingBar from "../components/FloatingBar";

const Header = () => {
  
    return (
        <header className="w-full border-b pb-4 mt-0 sm:mt-4 bg-white dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-5xl mx-auto px-4">
                <div className='flex sm:flex-row-reverse sm:items-center justify-between gap-4 flex-col items-start'>
                    <motion.img
                        className="rounded-full w-32 h-32 object-cover self-end sm:self-auto"
                        src='./profil-img.jpeg'
                        alt="Profile"
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: 1,
                            transition: { duration: 0.5 }
                        }}
                    />
                    <div className='flex flex-col gap-6 w-full'>
                        <motion.h1 
                            initial={{ opacity: 0, bottom: -100 }}
                            animate={{
                                opacity: 1,
                                transition: { duration: 0.3 }
                            }}
                            className="font-bold text-5xl flex gap-2.5"
                        >
                            <motion.span>
                                Hi, I&apos;M 
                            </motion.span>
                            <motion.span className='text-blue-300 font-bold'>
                                Amine
                            </motion.span>
                        </motion.h1>

                        <motion.span
                            initial={{ opacity: 0, bottom: -100 }}
                            animate={{
                                opacity: 1,
                                transition: { duration: 0.3 }
                            }}
                        >
                            Software Engineer, Building and Sharing My Knowledge
                        </motion.span>

                        <motion.ul 
                            initial={{ opacity: 0, bottom: -100 }}
                            animate={{ 
                                opacity: 1,
                                bottom : 0 ,
                                transition: { duration: 0.3 }
                            }} 
                            className='flex items-center gap-4 w-30'
                        >
                            <li>
                                <Linkedin className="cursor-pointer hover:text-blue-300" />
                            </li>
                            <li>
                                <Github className="cursor-pointer hover:text-blue-300" />
                            </li>
                        </motion.ul>
                    </div>
                </div>

                <nav className="mt-6 border-t pt-4 flex gap-6 text-sm sm:text-base font-medium">
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) =>
                            isActive 
                                ? "text-blue-400 underline underline-offset-4" 
                                : "hover:text-blue-300 transition"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/education" 
                        className={({ isActive }) =>
                            isActive 
                                ? "text-blue-400 underline underline-offset-4" 
                                : "hover:text-blue-300 transition"
                        }
                    >
                        Education
                    </NavLink>
                    <NavLink 
                        to="/experience" 
                        className={({ isActive }) =>
                            isActive 
                                ? "text-blue-400 underline underline-offset-4" 
                                : "hover:text-blue-300 transition"
                        }
                    >
                        Experience
                    </NavLink>
                </nav>
            </div>
            <FloatingBar />

        </header>
    );
};

export default Header;
