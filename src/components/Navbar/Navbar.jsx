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
      <div className="wrapper md:px-26 sm:px-20 px-4 py-4 flex justify-between mx-auto max-w-[1336px]">
        <motion.img src={logoPutih} alt="logo-versi-putih" className="md:w-20 w-14 md:ml-14 ml-20" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} />
        <motion.div className="md:hidden flex items-center gap-2  " initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <a href="https://www.linkedin.com/in/alfian-maulana-76656b282/" target="_blank">
            <img src={Linkedin} alt="Linkedinlogo" className="md:w-9 w-7" />
          </a>
          <a href="https://www.instagram.com/alfianmnaa/" target="_blank">
            <img src={IGLogo} alt="Instagramlogo" className="md:w-9 w-7" />
          </a>
          <a href="https://www.tiktok.com/@webwizardrycode" target="_blank">
            <img src={TiktokLogo} alt="Tiktoklogo" className="md:w-9 w-7" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
