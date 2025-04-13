import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import axiosClient from "@/lib/axiosClient";
import useAxiosCached from "../hooks/CachedAxios";
import { BlurFade } from "../components/magicui/blur-fade";

type EducationData = {
  title: string;
  school: string;
  year: string;
  description: string;
  image: string;
};

export default function Education() {
  const [Education, setEducation] = useState<EducationData[] | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { data, isLoading, isError, error } = useAxiosCached(
    'education-data',
    '/b/67fba8868561e97a50fe8b2d'
  );

  useEffect(() => {
    if (data?.record) {
      console.log(data.record)
      setEducation(data.record);
    }
  }, [data]);

  const handleClick = (src: string) => {
    setSelectedImage(src);
    setIsFullScreen(true);
  };

  const closeModal = () => {
    setIsFullScreen(false);
  };

  return (
    <BlurFade
      className="flex flex-col gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <h2 className="text-blue-300 font-bold text-2xl">Education</h2>

      {!isLoading ? Education?.map((item, i) => (
        <Accordion type="single" collapsible className="w-full" key={i}>
          <AccordionItem value={`item-${i}`}>
            <div className="flex items-center gap-3">
              <motion.img
                src={item.image}
                className="w-10 h-10 rounded-full cursor-pointer border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                onClick={() => handleClick(item.image)}
              />
              <AccordionTrigger className="w-full">
                <div className="flex flex-col text-left">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-gray-400 text-sm">
                    {item.school} — {item.year}
                  </span>
                </div>
              </AccordionTrigger>
            </div>
            <AccordionContent className="text-sm text-muted-foreground mt-2 pl-12">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )):<>Loading ...</>}

      {isFullScreen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeModal}
        >
          <motion.div
            className="absolute top-5 right-5 w-8 h-8 rotate-45 text-white cursor-pointer"
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
          >
            <Plus onClick={closeModal} />
          </motion.div>
          <motion.img
            src={selectedImage || ""}
            className="max-w-[80%] max-h-[80%] object-contain"
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </BlurFade>
  );
}
