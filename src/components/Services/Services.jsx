import React, { useState } from "react";
import meeting from "../../assets/services/meeting.png";
import bracketsIcon from "../../assets/services/bracketsIcon.svg";
import networkIcon from "../../assets/services/networkIcon.svg";
import swatchbookIcon from "../../assets/services/swatchbookIcon.svg";
import checkMarkIcon from "../../assets/services/checkMarkIcon.svg";
import arrowRight from "../../assets/skills/arrowRight.svg";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null); // State untuk menyimpan layanan yang dipilih
  const [isAnimating, setIsAnimating] = useState(false);
  const services = [
    {
      icon: bracketsIcon,
      title: "Frontend Developer",
      offers: ["User Interface (UI) Development.", "Web Page Development.", "UX Element Integration.", "Brand Integration."],
    },
    {
      icon: networkIcon,
      title: "Backend Developer",
      offers: ["API Development.", "Database Integration.", "Server-side Logic.", "Performance Optimization."],
    },
    {
      icon: swatchbookIcon,
      title: "SEO Specialist",
      offers: ["I develop the user interface.", "The best SEO for your website.", "I create UX elements interactions.", "I position your company brand."],
    },
  ];

  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setOpenModal(false);
      setIsAnimating(false);
    }, 300);
  };

  const handleViewMore = (service) => {
    setSelectedService(service); // Memperbarui layanan yang dipilih
    setOpenModal(true);
  };

  return (
    <div className="md:px-26 px-12 lg:pt-8 pt-10 mb-10">
      <div className="text-[#808080] flex gap-4 items-center justify-end translate-x-12 mb-8">
        <p className="max-w-96 lg:text-body sm:text-normal text-smallText">Let's unlock your brand's full potential and thrive together with my tailored services.</p>
        <hr className="w-96 border-[#808080]" />
      </div>
      <div className="mt-4">
        <div className="mx-auto  flex items-center justify-center flex-wrap gap-6">
          <img src={meeting} alt="meeting" className="max-h-20 min-w-64 object-cover rounded-full" />
          <h1 className="xl:text-7xl sm:text-6xl text-5xl text-center leading-tight">
            <strong className="hover:text-orange-400 duration-75">Innovative</strong> <span className="font-thin">Strategies</span>
          </h1>
        </div>
        <div className="mx-auto  flex items-center justify-center flex-wrap gap-6 mt-4">
          <h1 className="xl:text-7xl sm:text-6xl text-5xl lg:block hidden text-center leading-tight">
            <span className="font-thin">for Your</span> <strong className="hover:text-orange-400 duration-75">Business.</strong>
          </h1>
          <div className="lg:block hidden py-5 px-14 bg-orange-400 rounded-full text-subheadline text-gray-800 font-normal tracking-wider">WHAT I DO?</div>
        </div>
      </div>
      <div className="max-w-[1336px] mx-auto">
        <div className="  max-w-[1080px]  mx-auto flex  overflow-x-auto scrollbar-hide sm:mt-8 mt-4">
          {services.map((service) => {
            return (
              <div className="cardServices flex-shrink-0 lg:w-[360px] md:max-w-[400px] sm:w-[300px] w-[230px] lg:pt-16 pb-10 py-8 px-8 bg-transparent border-[1px] border-[#808080]" key={service.title}>
                <img src={service.icon} alt="bracketIcon" className="w-12 mx-auto" />
                <br />
                <h3 className="lg:text-3xl text-2xl font-bold text-center lg:mt-4"> {service.title}</h3>
                <br />
                <button className=" px-8 py-3  bg-orange-400 text-normal text-gray-800 rounded-md lg:mt-8 mt-1 font-bold" onClick={() => handleViewMore(service)}>
                  <span>View More</span>
                </button>
              </div>
            );
          })}
        </div>
        <span className="flex items-center gap-2 mt-6 ">
          <span className="text-white">Scroll Right</span>
          <motion.img src={arrowRight} alt="ScrollRight" animate={{ x: [0, 20], transition: { duration: 3, repeat: Infinity } }} className="w-4" />
        </span>
      </div>
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="max-w-screen-lg w-full mx-4">
            <AnimatePresence>
              {isAnimating || (
                <motion.div
                  className="rounded-lg max-w-[700px] bg-[#0F0F2A] h-auto object-cover mx-auto relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }} // Efek animasi saat modal ditutup
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <span className="absolute top-2 right-4   cursor-pointer md:text-5xl text-3xl" onClick={closeModal}>
                    &times;
                  </span>
                  <div className="py-16 px-12">
                    {/* Menampilkan penawaran yang sesuai dengan layanan yang dipilih */}
                    {selectedService &&
                      selectedService.offers.map((offer, index) => (
                        <div className="flex items-center gap-6 mb-6" key={index}>
                          <img src={checkMarkIcon} alt="checkMarkIcon" className="sm:w-8 w-6" />
                          <p className="sm:text-body text-normal">{offer}</p>
                        </div>
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
