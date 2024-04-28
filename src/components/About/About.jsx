import React from "react";
import aboutImg from "../../assets/about/about.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="h-full overflow-hidden">
      <div className="md:px-26 px-12  flex-wrap mx-auto max-w-[1336px] h-full flex justify-between items-center ">
        <motion.img
          src={aboutImg}
          alt="aboutImg"
          className="sm:max-w-[500px] w-full object-cover rounded-md border-b-2 border-r-2 border-gray-400 md:mt-0 mt-10"
          whileInView={{ x: 0, opacity: 1 }}
          style={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
        <motion.div className="max-w-[600px]" whileInView={{ x: 0, opacity: 1 }} style={{ x: 100, opacity: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
          <h4 className="md:text-5xl text-[40px] font-bold mb-2">About Me</h4>
          <div className="border-[1px] border-white leading-none w-28"></div>
          <br />
          <p className="text-body">Web developer, with extensive knowledge and years of experience, working in web technologies and UI / UX design, delivering quality work.</p>
          <br />
          <div className="flex gap-4">
            <div className="text-center">
              <h3 className="md:text-5xl text-4xl text-[#F4AEA7] font-extrabold mb-2">2+</h3>
              <p className="tracking-widest md:text-normal text-smallText">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="md:text-5xl text-4xl text-[#F4AEA7] font-extrabold mb-2">10+</h3>
              <p className="tracking-widest md:text-normal text-smallText">Completed Projects</p>
            </div>
          </div>
          <br />
          <button className="px-5 py-4 text-normal rounded-lg bg-transparent border-[1px] border-white font-bold">Donwload CV</button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
