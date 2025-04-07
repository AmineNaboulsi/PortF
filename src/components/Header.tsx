import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
const Header = () =>{
    
    return (
        <header className="">
            <div className='flex sm:flex-row-reverse sm:items-center justify-between  gap-4 flex-col items-start'>
                <motion.img
                    className="rounded-full w-32 h-32 object-cover"
                    src='./profil-img.jpeg'
                    alt="Profile"
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        transition: { duration: 0.5 }
                    }}
                ></motion.img>
                <div className='flex flex-col gap-6 lg:*:w-1/2 w-full'>
                    <motion.h1 
                    initial={{ opacity: 0, bottom: -100 }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.3 }
                    }}
                    className="font-bold text-5xl flex gap-2.5">
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
       
        </header>
    )
}

export default Header
