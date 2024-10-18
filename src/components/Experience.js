import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Software Developer - Intern"
              company="Mage Data"
              companyLink=""
              time="June 2024 - Dec 2024"
              address="New York, USA"
              work="At Mage Data, I served as a Software Developer Intern, implemented a GAN Model using TensorFlow and Keras to generate synthetic data, increasing data diversity by 30% and improving model performance by 17%. I enhanced data integrity for categorical and numerical variables through Label Encoding and Min-Max Scaling, boosting data accuracy and consistency. Additionally, I improved the Static Data Masking UI Page using AngularJS, leading to a 25% functionality improvement, and utilized RESTful APIs with PostgreSQL in Java to achieve a 20% increase in data handling efficiency."
            />
            <Details
              position="Senior Software Engineer"
              company="Aspire Systems"
              companyLink=""
              time="2020-2023"
              address="Chennai, India"
              work="As a Senior Software Engineer at Aspire Systems, I led the development of 10+ modules, achieving a 75% reduction in transaction search latency and earning the Role Star Award. I collaborated with stakeholders, increasing client satisfaction by 35%, and implemented agile methodologies for a 20% improvement in project efficiency. My strategic establishment of a CI/CD pipeline using Azure DevOps resulted in a 40% reduction in release time. Proactively resolving over 100 bugs, I improved application functionality by 30% and decreased transaction search access time from 20 seconds to less than 5 seconds. My impactful contributions showcase a commitment to successful outcomes and continuous improvement at Aspire Systems."
            />

            <Details
              position="Software Engineer"
              company="Temenos"
              companyLink=""
              time="2021-2022"
              address="Hyderabad, India"
              work="During my role as a Software Engineer at Temenos, I focused on optimizing the Settings page, achieving a 15% improvement in system performance, and enhancing critical UI functionalities, leading to a 25% increase in user engagement. Addressing and resolving over 10 issues in service middleware, I significantly enhanced the overall application stability. Collaborating across departments, I introduced continuous enhancement strategies, resulting in a 15% decrease in testing cycles. My contributions at Temenos underscore my commitment to refining user experiences, optimizing system functionality, and implementing strategic improvements in a collaborative and dynamic environment."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
