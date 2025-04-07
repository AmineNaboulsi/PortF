import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';

const Header = () =>{
    
    return (
        <>
        I'M Naboulsi
        <motion.ul 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
                opacity: 1,
                scale: 1,
                transition: { duration: 0.3 }
            }} 
            className='flex w-20 items-center gap-4'
        >
            <li >
                <Linkedin />
            </li>
            <li>
                <Github />
            </li>
        </motion.ul>
        </>
    )
}

export default Header
