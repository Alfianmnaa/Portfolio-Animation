import React from "react";
import myPic from "../../assets/hero/myPic.png";
import { motion } from "framer-motion";
import Linkedin from "../../assets/hero/Linkedin.svg";
import IGLogo from "../../assets/hero/IGLogo.svg";
import TiktokLogo from "../../assets/hero/TiktokLogo.svg";
import scrollIcon from "../../assets/hero/scroll.png";

const Hero = () => {
  const styles = {
    height: "calc(100vh - 112px)",
    background: "linear-gradient(180deg, #0c0c1d, #111132)",
    overflowX: "hidden",
  };

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-120%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 50,
      },
    },
  };
  const socialMediaVariants = {
    initial: {
      x: 100, // Start from right side (off-screen)
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div style={styles}>
      <div className="md:px-26 px-12 flex flex-wrap gap-4 justify-between items-center mx-auto max-w-[1336px] h-full relative">
        <motion.div variants={textVariants} initial="initial" animate="animate" className="">
          <motion.h3 className="text-2xl tracking-[10px] text-purple-800 font-bold leading-normal lg:mb-6 sm:mb-2 mb-0" variants={textVariants}>
            ALFIAN MAULANA
          </motion.h3>
          <motion.h6 className="text-6xl leading-normal font-extrabold mb-4" variants={textVariants}>
            Frontend Developer
          </motion.h6>
          <motion.button className="md:px-5 md:py-4 px-4 py-3 md:text-normal text-smallText rounded-lg bg-transparent border-[1px] border-white md:mr-6 mr-3 " variants={textVariants}>
            See the latest work
          </motion.button>
          <motion.button className="md:px-5 md:py-4 px-4 py-3 md:text-normal text-smallText rounded-lg bg-transparent border-[1px] border-white" variants={textVariants}>
            Contact me
          </motion.button>
          <motion.img src={scrollIcon} variants={textVariants} animate="scrollButton" alt="scroll" className="mt-6" />
        </motion.div>
        <>
          <img src={myPic} alt="mypic" className="z-40 max-w-full max-h-full object-cover" />
          <motion.div variants={socialMediaVariants} initial="initial" animate="animate" className="md:flex hidden flex-col gap-3 ">
            <motion.img variants={socialMediaVariants} src={Linkedin} alt="Linkedinlogo" className="md:w-9 w-6" />
            <motion.img variants={socialMediaVariants} src={IGLogo} alt="Instagramlogo" className="md:w-9 w-6" />
            <motion.img variants={socialMediaVariants} src={TiktokLogo} alt="Tiktoklogo" className="md:w-9 w-6" />
          </motion.div>
        </>
        <motion.div className="absolute z-20 bottom-0 whitespace-nowrap md:text-[40vh] text-[30vh]  text-[#ffffff09] font-bold overflow-y-hidden leading-none" variants={sliderVariants} initial="initial" animate="animate">
          Website Developer and Content Creator
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
