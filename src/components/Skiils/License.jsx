import React from "react";
import dicoding from "../../assets/skills/dicoding.jpeg";
import medalIcon from "../../assets/skills/medalIcon.svg";
import arrowRight from "../../assets/skills/arrowRight.svg";
import { motion } from "framer-motion";

const License = () => {
  const Sertifications = [1, 2, 3, 4, 5, 6, 8];
  return (
    <div className="md:px-26 px-12 ">
      <div className="flex overflow-x-auto scrollbar-hide">
        {Sertifications.map((sertication, index) => {
          return (
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              style={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              key={index}
              className="cardSertif flex-shrink-0 border-2 md:max-w-[600px] max-w-[480px] mr-4 p-6 rounded-lg bg-white border-b-4 border-[#CBD5E1]"
            >
              <div className="flex items-center">
                <img src={dicoding} alt="dicoding" className="rounded-full md:w-24 w-16 z-20" />
                <p className="bg-[#F1F5F9]  md:py-4 py-2 w-full px-10 text-body text-[#0C0C1D] font-bold rounded-3xl translate-x-[-26px] z-10">Basic Javascript</p>
              </div>
              <p className="text-[#27274e] my-2">Certification on deep understanding or concepts of Javascript from one of the best bootcamps in Indonesia. </p>
              <div className="flex justify-end">
                <button className="flex bg-orange-500 items-center  gap-2 py-3 px-4 bg-transparent  font-light rounded-md text-white">
                  <span>See Credentials</span>
                  <img src={medalIcon} alt="dicoding" className="md:w-9 w-7 " />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
      <span className="flex items-center gap-2 mt-6 ">
        <span className="text-white">Scroll Right</span>
        <motion.img src={arrowRight} alt="ScrollRight" animate={{ x: [0, 20], transition: { duration: 3, repeat: Infinity } }} className="w-4" />
      </span>
    </div>
  );
};

export default License;
