import React, { useRef } from "react";
import mountainImg from "../../assets/parallax/mountains.png";
import planetsImg from "../../assets/parallax/planets.png";
import starsImg from "../../assets/parallax/stars.png";
import sunImg from "../../assets/parallax/sun.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const style = {
    width: "100%",
    height: "100vh",
    background: type === "skills" || type === "portfolio" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)",
  };

  return (
    <div>
      <div style={style} ref={ref} className="relative overflow-hidden flex justify-center items-center">
        {type == "about" && (
          <motion.h1 style={{ y: yText }} className="text-headline1 font-bold  ">
            About Me
          </motion.h1>
        )}
        {type == "skills" && (
          <motion.h1 style={{ y: yText }} className="text-headline1 font-bold  ">
            My Skills
          </motion.h1>
        )}
        {type == "services" && (
          <motion.h1 style={{ y: yText }} className="text-headline1 font-bold  ">
            What I Do?
          </motion.h1>
        )}
        {type == "portfolio" && (
          <motion.h1 style={{ y: yText }} className="text-headline1 font-bold  ">
            What I did?
          </motion.h1>
        )}
        <motion.div className="mountain bg-cover w-full h-full absolute bg-bottom z-30" style={{ backgroundImage: `url(${mountainImg})` }}></motion.div>
        <motion.div className="planets bg-cover w-full h-full absolute bg-bottom z-20" style={{ ...{ y: yBg }, backgroundImage: `url(${type === "skills" || type === "portfolio" ? planetsImg : sunImg})` }}></motion.div>
        <motion.div className="stars bg-cover w-full h-full absolute bg-bottom z-10" style={{ ...{ x: yBg }, backgroundImage: `url(${starsImg})` }}></motion.div>
      </div>
    </div>
  );
};

export default Parallax;
