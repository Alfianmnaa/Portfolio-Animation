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
    <div className="h-full flex justify-center items-start  ">
      <div className="md:px-26 px-12 mt-28 max-w-[1336px] ">
        <div className="flex gap-16 cursor-pointer">
          <div className="flex justify-center items-center gap-4 " onClick={() => setSkillsCondition(false)}>
            {skillsCondition ? <img src={internetIcon} alt="internetIcon" className="w-12 " /> : <img src={internetIconActive} alt="internetIcon" className="w-12 " />}
            <p className={`font-bold text-subheadline ${skillsCondition ? "text-inherit" : "text-[#F99D1B]"}`}>Skills</p>
          </div>
          <div className="flex justify-center items-center gap-4 " onClick={() => setSkillsCondition(true)}>
            {skillsCondition ? <img src={licenseIconActive} alt="internetIcon" className="w-12 " /> : <img src={licenseIcon} alt="licenseIcon" className="w-12 " />}
            <p className={`font-bold text-subheadline ${skillsCondition ? "text-[#F99D1B]" : "text-inherit"}`}>License</p>
          </div>
        </div>
        {skillsCondition ? <License /> : <Skills />}
      </div>
    </div>
  );
};

export default SkillsLicense;
