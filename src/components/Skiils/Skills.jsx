import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const programmingLanguages = ["HTML", "CSS", "Javascript", "PHP", "C++"];
  const Techologies = ["React", "TailwindCSS", "Bootstrap", "Framer Motion", "Express", "MongoDB", "MySQL"];
  const SoftwareTools = ["VsCode", "NodeJs", "Postman", "Git", "GitHub", "Docker"];

  return (
    <div className="md:px-26 px-12 flex flex-wrap justify-between ">
      <div>
        <motion.div whileInView={{ x: 0, opacity: 1 }} style={{ x: -100, opacity: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="border-b-[1px] border-[#CBD5E1]">
          <h2 className="md:text-4xl text-3xl leading-normal font-extrabold">Programming Languages</h2>
          <div className="mt-6 flex flex-wrap gap-2 max-w-[520px]">
            {programmingLanguages.map((language, index) => {
              return (
                <span key={index} className="bg-[#F1F5F9] font-semibold px-9 pt-3 pb-2 border-b-4 border-[#CBD5E1] rounded-md text-[#0C0C1D]">
                  {language}
                </span>
              );
            })}
          </div>
          <br />
        </motion.div>
        <br />
        <motion.div whileInView={{ x: 0, opacity: 1 }} style={{ x: -100, opacity: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
          <h2 className="md:text-4xl text-3xl leading-normal font-extrabold ">Technologies</h2>
          <div className="mt-6 flex flex-wrap gap-2 max-w-[520px] ">
            {Techologies.map((tecnology, index) => {
              return (
                <span key={index} className="bg-[#F1F5F9] font-semibold px-9 pt-3 pb-2 border-b-4 border-[#CBD5E1] rounded-md text-[#1b1b1e]">
                  {tecnology}
                </span>
              );
            })}
          </div>
          <br />
        </motion.div>
      </div>
      <motion.div whileInView={{ x: 0, opacity: 1 }} style={{ x: 100, opacity: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="border-t-[1px] border-[#CBD5E1]">
        <br />
        <h2 className="md:text-4xl text-3xl leading-normal font-extrabold ">Softaware & Tools</h2>
        <div className="mt-6 flex flex-wrap gap-2 max-w-[520px] ">
          {SoftwareTools.map((softwareTool, index) => {
            return (
              <span key={index} className="bg-[#F1F5F9] font-semibold px-9 pt-3 pb-2 border-b-4 border-[#CBD5E1] rounded-md text-[#1b1b1e]">
                {softwareTool}
              </span>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
