import { useEffect, useRef, useState } from "react";
import P1 from "../../assets/portfolio/P1.png";
import P2 from "../../assets/portfolio/P2.png";
import P3 from "../../assets/portfolio/P3.png";
import P4 from "../../assets/portfolio/P4.png";
import P5 from "../../assets/portfolio/P5.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "E-Commerce",
    img: P1,
    desc: "The website offers an attractive design and full sales features using Bootstrap Framework, HTML5, CSS, and JavaScript. The website is responsive and ensures a smooth and engaging online shopping experience.",
    url: "https://alfianmnaa.github.io/E-commerce/index.html",
  },
  {
    id: 2,
    title: "Kalijaga Screen",
    img: P2,
    desc: "Kalijaga Screen is a streaming platform for short films, dramas, or other performing arts from students of UIN Sunan Kalijaga Yogyakarta, this platform was created using MERN architecture with React technology, Tailwind CSS, Express Js, Node Js, MongoDB.",
    url: "https://kalijaga-screen.netlify.app/",
  },
  {
    id: 3,
    title: "NeroLearn",
    img: P3,
    desc: "NeroLearn is a platform for students to access information, schedules, and tools for easy learning. This platform is built using MERN stack architecture with attractive and responsive design and animation.",
    url: "https://nerolearn.netlify.app/",
  },
  {
    id: 4,
    title: "BangSampah",
    img: P4,
    desc: "Nero-Learn is a platform for students to access information, schedules, and tools for easy learning. This platform is built using MERN stack architecture with attractive and responsive design and animation.",
    url: "https://bangsampah.netlify.app/",
  },
  {
    id: 5,
    title: "Ecotection",
    img: P5,
    desc: "Ecotection is a platform established with the aim to care for and protect Indonesia's natural environment through the use of technology and active participation from various communities. The website won a national competition in Indonesia and was built using MERN architecture with excellent UI&UX.",
    url: "https://ecotection.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [window.innerWidth < 640 ? -80 : -300, 300]);

  return (
    <section>
      <div className="flex justify-center items-center w-full h-full overflow-hidden">
        <div className="max-w-[1336px] h-full m-auto flex sm:flex-row flex-col justify-center items-center sm:gap-12 gap-8 sm:p-0 p-6">
          <div className="flex-1 sm:h-1/2 h-full" ref={ref}>
            <img src={item.img} alt="" className="w-full h-full sm:object-cover object-contain" />
          </div>
          <motion.div className="flex-1 flex flex-col sm:gap-8 gap-2 " style={{ y }}>
            <h2 className="lg:text-[70px] sm:text-4xl text-subheadline font-extrabold ">{item.title}</h2>
            <p className="text-[#808080] sm:text-body text-normal">{item.desc}</p>
            <a href={item.url} target="_blank">
              <button className="bg-orange-400 border-none rounded-lg p-2 w-[200px] cursor-pointer sm:text-smallText text-black text-verySmallText mt-2">See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [styles, setStyles] = useState({});
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const handleResize = () => {
    const newStyles = {
      paddingTop: window.innerWidth < 640 ? "calc(100vh - 110px)" : "56px",
    };
    setStyles(newStyles);
  };

  useEffect(() => {
    // Set initial styles
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <div className="sticky top-0 left-0  text-center text-orange-400 text-4xl " style={styles}>
        <h1 className="md:text-[70px] text-[40px] font-extrabold sm:leading-none leading-snug"> Featured Works</h1>
        <motion.div style={{ scaleX }} className="h-[10px] sm:mt-5 mt-1 bg-white"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
