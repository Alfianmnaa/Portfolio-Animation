import React from "react";
import medalIcon from "../../assets/skills/medalIcon.svg";
import arrowRight from "../../assets/skills/arrowRight.svg";
import dicoding from "../../assets/skills/dicoding.jpeg";
import myskill from "../../assets/skills/myskill.png";
import skilvul from "../../assets/skills/skilvul.jpg";
import alibaba from "../../assets/skills/alibaba.jpeg";
import { motion } from "framer-motion";

const License = () => {
  const Sertifications = [
    {
      img: dicoding,
      title: "Javascript Programming Basic",
      from: "Dicoding Indonesia",
      desc: "Introduction to JavaScript, fundamentals, data structures, functions, OOP, functional programming, environment setup, modules, error handling, concurrency, NPM, testing.",
      url: "https://dicoding.com/certificates/4EXG9KJWQZRL",
    },
    {
      img: dicoding,
      title: "Cloud Practitioner Essentials",
      from: "Dicoding Indonesia",
      desc: "Cloud computing, global infrastructure, networking, storage & databases, security, monitoring & analytics, pricing & support, migration & innovation, cloud journey, AWS Certified Cloud Practitioner basics.",
      url: "https://www.dicoding.com/certificates/1RXYOL2RKPVM",
    },
    {
      img: myskill,
      title: "FRONTEND - HTML",
      from: "MySkill",
      desc: "Learn html syntax, html semantics with deep understanding and structured concepts.",
      url: "https://storage.googleapis.com/myskill-v2-certificates/topic-DQ4WDIr2jXa70FUI477S/Dq8vNDggeBnZBVsjJzpy-kBvYZLDefVj6QC6UU25m.pdf",
    },
    {
      img: myskill,
      title: "FRONTEND - CSS",
      from: "MySkill",
      desc: "Learn css syntax, css responsive with deep understanding and structured concepts.",
      url: "https://storage.googleapis.com/myskill-v2-certificates/topic-3YOVteyOsJgXG53NqXy9/Dq8vNDggeBnZBVsjJzpy-7iVaK7uX4Hxm6jZmid5e.pdf",
    },
    {
      img: myskill,
      title: "FRONTEND - Javascript",
      from: "MySkill",
      desc: "Learn Javascript from begginers to expert with deep understanding and structured concepts.",
      url: "https://storage.googleapis.com/myskill-v2-certificates/topic-pTLX6J38RGSQ4dfEO6yQ/Dq8vNDggeBnZBVsjJzpy-vRqyolAEr2cLU8KBhGVP.pdf",
    },
    {
      img: myskill,
      title: "FRONTEND - React",
      from: "MySkill",
      desc: "Building dynamic user interfaces with React library, mastering component-based architecture, state management, routing, and integration with backend APIs for modern web development.",
      url: "https://storage.googleapis.com/myskill-v2-certificates/topic-sTLaN1dknfdCpAbUm5O2/Dq8vNDggeBnZBVsjJzpy-kRnLcGzkGMt2twaStyVm.pdf",
    },
    {
      img: myskill,
      title: "USER EXPERIENCE DESIGN",
      from: "MySkill",
      desc: " Research, Design Thinking, Usability Principles, Prototyping, UI Design, Interaction Design, Accessibility, Testing, Iteration, Collaboration..",
      url: "https://storage.googleapis.com/myskill-v2-certificates/topic-IPmF2VBDDWbE5S0LtYlt/Dq8vNDggeBnZBVsjJzpy-50buXZ0nimy1RkhxeRR1.pdf",
    },
    {
      img: myskill,
      title: "SEARCH ENGINE OPTIMIZATION",
      from: "MySkill",
      desc: "Keyword Research, On-Page Optimization, Off-Page Optimization, Technical SEO, Content Optimization, Local SEO, Mobile Optimization, Analytics and Monitoring, Algorithm Updates, User Experience (UX).",
      url: "https://storage.googleapis.com/myskill-v2-certificates/topic-pz5NAnRFFcTTbACex2AN/Dq8vNDggeBnZBVsjJzpy-ODKlVxTXTJZOLQgYc5Mq.pdf",
    },
    {
      img: myskill,
      title: "UX WRITING",
      from: "MySkill",
      desc: "Clarity, Conciseness, Consistency, User-Centered, Microcopy, Accessibility, Testing and Iteration, Brand Voice, SEO Integration, Collaboration.",
      url: "https://storage.googleapis.com/myskill-v2-certificates/topic-0hP9ij6zJq9sMsdL4jXP/Dq8vNDggeBnZBVsjJzpy-uSOfly6obt7YK1Xu3kMD.pdf",
    },
    {
      img: dicoding,
      title: "Basic Software Engineering",
      from: "Dicoding Indonesia",
      desc: "Understanding Application Requirements, Application Modification Planning, Basic Programming Concepts (JavaScript ES6),Software Application Modification (HTML5, CSS3), Programming Documentation.",
      url: "https://www.dicoding.com/certificates/0LZ09EN5QZ65",
    },
    {
      img: dicoding,
      title: "Project Manajement",
      from: "Dicoding Indonesia",
      desc: "Introduction to Project Management Project Management Cycle and Methodologies Organizational Structure and Culture Project Management Career Pursuit Project Closure",
      url: "https://www.dicoding.com/certificates/RVZKOJ0QOPD5",
    },
    {
      img: dicoding,
      title: "Basic Structured Query Language (SQL)",
      from: "Dicoding Indonesia",
      desc: "Types, relational databases. Database Management Systems (DBMS): Selection, industrial use. Data Definition Language (DDL), Data Manipulation Language (DML), constraints, SQL diagram. Basic Query",
      url: "https://www.dicoding.com/certificates/1OP80EEN2XQK",
    },
    {
      img: dicoding,
      title: "Basic DevOps",
      from: "MySkill",
      desc: "Introduction to DevOps: Definition and benefits. DevOps Principles: The Three Ways. CALMS Framework: DevOps culture. DevOps Practices: DevOps Pipeline, Tools. DevOps Implementation Stories: Amazon case study.",
      url: "https://www.dicoding.com/certificates/1RXY099GKZVM",
    },
    {
      img: myskill,
      title: "TEST SCENARIO & TEST CASE",
      from: "MySkill",
      desc: " Testing Introduction, Scenario, Case, Structure, Functional & Non-functional Cases, Bug Handling, Testing Tools understanding.",
      url: "https://storage.googleapis.com/myskill-v2-certificates/topic-MYXCEfFnIyuqbc3GFd8v/Dq8vNDggeBnZBVsjJzpy-nCLXvB1f2efEZwGSMCQU.pdf",
    },
    {
      img: myskill,
      title: "QUALITY ASSURANCE",
      from: "MySkill",
      desc: "Ensuring product excellence through testing methods, bug handling, and tool comprehension for optimal performance and user satisfaction.",
      url: "https://storage.googleapis.com/myskill-v2-certificates/topic-mGdWfE7lCl73hEKbKvf5/Dq8vNDggeBnZBVsjJzpy-XFu2jdvZNWxzPociAcNW.pdf",
    },
    {
      img: myskill,
      title: "PEFORMANCE TESTING",
      from: "MySkill",
      desc: "Evaluating system speed, responsiveness, and stability to ensure optimal performance under various conditions for user satisfaction.",
      url: "https://storage.googleapis.com/myskill-v2-certificates/topic-52vifOB4NlCSYgudweQk/Dq8vNDggeBnZBVsjJzpy-gmb0uJRxyjx2Wsl0j8YL.pdf",
    },
    {
      img: myskill,
      title: "API AUTOMATION",
      from: "MySkill",
      desc: "Automating testing processes to validate API functionality, reliability, and performance, enhancing efficiency and ensuring quality.",
      url: "https://storage.googleapis.com/myskill-v2-certificates/topic-D52mmCCq296fFxeoPQsw/Dq8vNDggeBnZBVsjJzpy-XNmYXbiEOyiIwMTmXCk2.pdf",
    },
    {
      img: alibaba,
      title: "Alibaba Cloud Certified Developers",
      from: "Alibabab Cloud Global",
      desc: "introduces how to install MySQL on an ECS instance configured with CentOS, and perform common MySQL operations, and use basic SQL statements.",
      url: "https://alicloud-common.oss-ap-southeast-1.aliyuncs.com/2023/Developers/Certified-Developer.jpg",
    },
    {
      img: skilvul,
      title: "Python Advance (Gold)",
      from: "Skilvul",
      desc: "Learning Python from scratch with deepLearn python syntax and deep understanding with structured concepts.",
      url: "https://skilvul.com/courses/python-lanjutan/student/cls3aqvck0tnv01s4apypk6sw",
    },
    {
      img: skilvul,
      title: "Algorithm & Data Structures",
      from: "Skilvul",
      desc: " Fundamental concepts for efficient problem-solving and program optimization, including sorting, searching, graph algorithms, and data structure implementation.",
      url: "https://skilvul.com/courses/algorithm-and-data-structures-with-python/student/cls3aqvck0tnv01s4apypk6sw",
    },
  ];
  return (
    <div className="md:px-26 px-12 ">
      <div className="flex overflow-x-auto scrollbar-hide">
        {Sertifications.map((sertication, index) => {
          return (
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              style={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              key={index}
              className="cardSertif flex-shrink-0 border-2 md:max-w-[600px] max-w-[480px] mr-4 p-6 rounded-lg bg-white border-b-4 border-[#CBD5E1]"
            >
              <div className="flex items-center">
                <img src={sertication.img} alt="dicoding" className="rounded-full md:w-24 w-16 z-20" />
                <p className="bg-[#F1F5F9]  md:py-4 py-2 w-full px-10 text-body text-[#0C0C1D] font-bold rounded-3xl translate-x-[-26px] z-10">{sertication.title}</p>
              </div>
              <p className="text-[#27274e] my-2">{sertication.desc}</p>
              <div className="flex justify-end ">
                <a href={sertication.url} target="_blank">
                  <button className="bg-orange-400 hover:bg-orange-300 duration-75 flex  items-center gap-2 py-3 px-4 font-light rounded-md text-white">
                    <span>See Credentials</span>
                    <img src={medalIcon} alt="dicoding" className="md:w-9 w-7 " />
                  </button>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
      <span className="flex items-center gap-2 mt-6 ">
        <span className="text-white">Scroll Right</span>
        <motion.img src={arrowRight} alt="ScrollRight" animate={{ x: [0, 20], transition: { duration: 3, repeat: Infinity } }} className="w-4" />
      </span>
    </div>
  );
};

export default License;
