import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { Plus } from 'lucide-react';

function Experience() {
  const [isFullScreen, setIsFullScreen] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(null); 

  const handleClick = (src: string) => {
    setSelectedImage(src);
    setIsFullScreen(true);
  };

  const closeModal = () => {
    setIsFullScreen(false);
  };

  return (
    <motion.div className="flex flex-col gap-3">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="text-blue-300 font-bold text-2xl"
      >
        Experience
      </motion.h2>
      
      {Array.from({ length: 5 }).map((_, i) => (
        <Accordion type="single" collapsible className="w-full" key={i}>
          <AccordionItem value="item-1">
            <div className="flex items-center gap-2">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => handleClick("https://cdn-icons-png.flaticon.com/512/732/732200.png")} 
              />
              <AccordionTrigger>Youcode</AccordionTrigger>
            </div>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      {isFullScreen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full backdrop-blur-xs bg-opacity-80 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={closeModal}
        >
            <motion.div
              className="fixed top-5 right-5 w-7 h-7 rotate-45 cursor-pointer"
              initial={{ scale: 0.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
                <Plus 
                onClick={closeModal}
                />
            </motion.div>
            <motion.img
                src={selectedImage}
                className="max-w-[80%] max-h-full object-contain cursor-pointer"
                initial={{ scale: 0.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                onClick={(e) => e.stopPropagation()} 
            />
        </motion.div>
      )}
    </motion.div>
  );
}

export default Experience;
