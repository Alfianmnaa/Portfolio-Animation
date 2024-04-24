import React from "react";
import meeting from "../../assets/services/meeting.png";
import bracketsIcon from "../../assets/services/bracketsIcon.svg";
import networkIcon from "../../assets/services/networkIcon.svg";
import swatchbookIcon from "../../assets/services/swatchbookIcon.svg";

const Services = () => {
  const services = [
    {
      icon: bracketsIcon,
      title: "Frontend Developer",
      offers: ["User Interface (UI) Development.", "Web Page Development.", "UX Element Integration.", "Brand Integration."],
    },
    {
      icon: networkIcon,
      title: "Backend Developer",
      offers: ["API Development.", "WDatabase Integration.", "Server-side Logic.", "Performance Optimization."],
    },
    {
      icon: swatchbookIcon,
      title: "Frontend Developer",
      offers: ["I develop the user interface.", "The best SEO for your website.", "I create ux elements interactions.", "I position your company brand."],
    },
  ];
  return (
    <div className="md:px-26 px-12 lg:pt-8 pt-10 mb-10">
      <div className="text-[#808080] flex gap-4 items-center justify-end translate-x-12 mb-8">
        <p className="max-w-96 lg:text-body sm:text-normal text-smallText">Let's unlock your brand's full potential and thrive together with my tailored services.</p>
        <hr className="w-96 border-[#808080]" />
      </div>
      <div className="mt-4">
        <div className="mx-auto  flex items-center justify-center flex-wrap gap-6">
          <img src={meeting} alt="meeting" className="max-h-20 min-w-64 object-cover rounded-full" />
          <h1 className="lg:text-7xl sm:text-6xl text-5xl text-center leading-tight">
            <strong className="hover:text-orange-400 duration-75">Innovative</strong> <span className="font-thin">Strategies</span>
          </h1>
        </div>
        <div className="mx-auto  flex items-center justify-center flex-wrap gap-6 mt-4">
          <h1 className="lg:text-7xl sm:text-6xl text-5xl text-center leading-tight">
            <span className="font-thin">for Your</span> <strong className="hover:text-orange-400 duration-75">Business.</strong>
          </h1>
          <div className="sm:block hidden py-5 px-14 bg-orange-400 rounded-full text-subheadline text-gray-800 font-normal tracking-wider">WHAT I DO?</div>
        </div>
      </div>
      <div className="max-w-[1336px] mx-auto flex justify-center sm:flex-wrap sm:mt-8 mt-4">
        {services.map((service) => {
          return (
            <div className="cardServices sm:py-16 py-8 px-8 bg-transparent border-[1px] border-[#808080">
              <img src={service.icon} alt="bracketIcon" className="w-12 mx-auto" />
              <br />
              <h3 className="text-3xl font-bold text-center mt-4"> {service.title}</h3>
              <br />
              <button className=" px-8 py-3 bg-orange-400 text-normal text-gray-800 rounded-md sm:mt-8 mt-1 font-bold">
                <span>View More</span>{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
