import Sidebar from "../Sidebar/Sidebar";
import { motion } from "framer-motion";
import logoPutih from "../../assets/navbar/logoPutih.png";
import Linkedin from "../../assets/navbar/Linkedin.svg";
import IGLogo from "../../assets/navbar/IGLogo.svg";
import TiktokLogo from "../../assets/navbar/TiktokLogo.svg";

const Navbar = () => {
  return (
    <div>
      <Sidebar />
      <div className="wrapper md:px-26 px-20 py-4 flex justify-between mx-auto max-w-[1336px]">
        <motion.img src={logoPutih} alt="logo-versi-putih" className="md:w-20 w-16" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} />
        <div className="sm:flex hidden items-center gap-2  ">
          <img src={Linkedin} alt="Linkedinlogo" className="md:w-9 w-6" />
          <img src={IGLogo} alt="Instagramlogo" className="md:w-9 w-6" />
          <img src={TiktokLogo} alt="Tiktoklogo" className="md:w-9 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
