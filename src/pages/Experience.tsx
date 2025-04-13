import { motion } from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import axiosClient from "@/lib/axiosClient";

const Experience = () => {
  const [Experience, setExperience] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClick = (src: string) => {
    setSelectedImage(src);
    setIsFullScreen(true);
  };

  const closeModal = () => {
    setIsFullScreen(false);
  };

  useEffect(() => {
        const getAboutData = async () => {
          try {
            const response = await axiosClient.get('/b/67fbaa1b8a456b796688586e');
            setExperience(response.data.record);
          } catch (error) {
            console.error(error);
          }
        };
        getAboutData();
      }, []);

  return (
    <motion.section className="flex flex-col gap-3">
      <h2 className="text-blue-400 font-bold text-3xl">Experience</h2>
      {Experience ? Experience.map((exp, i) => (
        <Accordion type="single" collapsible key={i}>
          <AccordionItem value={`item-${i}`}>
            <div className="flex items-center gap-3">
              <img
                src={exp.logo}
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => handleClick(exp.logo)}
              />
              <AccordionTrigger>{exp.company}</AccordionTrigger>
            </div>
            <AccordionContent>{exp.description}</AccordionContent>
          </AccordionItem>
        </Accordion>
      )) : <>loading ...</>}

      {isFullScreen && selectedImage && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-50"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute top-5 right-5 cursor-pointer rotate-45">
            <Plus onClick={closeModal} />
          </div>
          <img
            src={selectedImage}
            className="max-w-[80%] max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </motion.section>
  );
};

export default Experience;
