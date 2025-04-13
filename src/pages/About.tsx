import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import useAxiosCached from "../hooks/CachedAxios";

type AboutData = {
  description: string;
  techs: string[] | null;
};

const About = () => {
  const [aboutData, setAboutData] = useState<AboutData>();
  
  const { data, isLoading, isError, error } = useAxiosCached(
    'about-data',
    '/b/67fba6458561e97a50fe8a39'
  );

  useEffect(() => {
    if (data?.record) {
      setAboutData(data.record);
    }
  }, [data]);

  return (
    <motion.section
      className="flex flex-col gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-blue-400 font-bold text-3xl">About</h2>

      <p>
        {isLoading
          ? "Loading..."
          : aboutData?.Description || "Invalid Data Type. Try Again."}
      </p>

      <span className="font-semibold mt-4">Tech Stack:</span>

      <div className="flex flex-wrap gap-2 mt-2">
        {aboutData?.techs
          ? aboutData.techs.map((tech, i) => (
              <Badge className="px-2 py-1" key={i}>
                {tech}
              </Badge>
            ))
          : isLoading
          ? "Loading..."
          : "No tech stack found."}
      </div>
    </motion.section>
  );
};

export default About;
