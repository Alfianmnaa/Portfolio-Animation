import React, { useState } from "react";
import internetIcon from "../../assets/skills/internetIcon.svg";
import licenseIcon from "../../assets/skills/licenseIcon.svg";
import internetIconActive from "../../assets/skills/internetIconActive.svg";
import licenseIconActive from "../../assets/skills/licenseIconActive.svg";
import Skills from "./Skills";
import License from "./License";

const SkillsLicense = () => {
  const [skillsCondition, setSkillsCondition] = useState(false);
  return (
    <div className="h-full 2xl:overflow-hidden overflow-y-scroll  ">
      <div className="max-w-[1336px] mx-auto ">
        <div className="md:px-26 px-12 lg:pt-16 pt-24 mb-10 max-w-[400px] mx-auto ">
          <div className="flex gap-12 justify-between cursor-pointer ">
            <div className="flex justify-center items-center gap-4" onClick={() => setSkillsCondition(false)}>
              {skillsCondition ? <img src={internetIcon} alt="internetIcon" className="md:w-12 w-10 " /> : <img src={internetIconActive} alt="internetIcon" className="md:w-12 w-10 " />}
              <p className={`font-bold md:text-subheadline text-body ${skillsCondition ? "text-inherit" : "text-[#F99D1B]"}`}>Skills</p>
            </div>
            <div className="flex justify-center items-center gap-4 " onClick={() => setSkillsCondition(true)}>
              {skillsCondition ? <img src={licenseIconActive} alt="internetIcon" className="md:w-12 w-10 " /> : <img src={licenseIcon} alt="licenseIcon" className="md:w-12 w-10 " />}
              <p className={`font-bold md:text-subheadline text-body ${skillsCondition ? "text-[#F99D1B]" : "text-inherit"}`}>License</p>
            </div>
          </div>
        </div>
        {skillsCondition ? <License /> : <Skills />}
      </div>
    </div>
  );
};

export default SkillsLicense;
