import {motion} from "framer-motion";
import { Badge } from "@/components/ui/badge";

function About() {
  return (
    <motion.div
    className="flex flex-col gap-3">
        <motion.h2
         initial={{ opacity: 0 }}
         animate={{ 
             opacity: 1,
             transition: { duration: 0.5 }
         }}
        className="text-blue-300 font-bold text-2xl">About</motion.h2>
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: 1,
            transition: { duration: 0.5 }
        }}
        >
        Software Engineer passionate about building full stack Javascript / Typescript applications with Next.js, React.js / Node.js, Nest.js or Express. and SQL/NoSQL databases.
        </motion.p>
        <motion.span
        className="font-semibold"
         initial={{ opacity: 0 }}
         animate={{ 
             opacity: 1,
             transition: { duration: 0.5 }
         }}>
            Techs
        </motion.span>
        <motion.div
        className="flex flex-wrap gap-2 mt-2"
         initial={{ opacity: 0 }}
         animate={{ 
             opacity: 1,
             transition: { duration: 0.5 }
         }}>
             {Array.from({ length: 15 }, (_, i) => (
                <Badge className="px-2 py-1" key={i}>Python</Badge>
            ))}
        </motion.div>

    </motion.div>
  )
}

export default About