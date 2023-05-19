import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react';
import ExperienceIcon from './ExperienceIcon';

export const IndividualExperience = ({
  company = '',
  years,
  desc,
  role,
  univ = null,
}) => {
  const liRef = useRef();
  return (
    <li ref={liRef} className="mb-8 relative">
      <ExperienceIcon reference={liRef} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h4 className="font-bold text-4xl mb-1 capitalize dark:text-light">
          {role}
          {company && (
            <span class="text-primary dark:text-primaryDark">{` @ ${company}`}</span>
          )}
        </h4>
        <div className="text-dark/75 mb-6 dark:text-light/75">
          {years}
          {univ && ` | ${univ}`}
        </div>
        <p className="font-semibold dark:text-light">{desc}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'center start'],
  });

  return (
    <section className="place-self-center w-4/5">
      <h2 className="font-bold text-7xl mb-12 dark:text-light">Experience</h2>
      <ul className="relative" ref={scrollRef}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-12 top-0 h-full w-[4px] bg-dark origin-top dark:bg-primaryDark"
        />
        <IndividualExperience
          company="Zoho Corporation"
          years="04/2020 - Current"
          desc="I am a senior front-end developer at Zoho Analytics, specializing in building SPAs with JavaScript frameworks. Notably, I implemented webpack asset bundling, reducing home page load time to under 1.2 seconds. I optimized performance by employing on-demand and batched loading techniques, resulting in faster initial loading and fewer server hits. Additionally, I implemented permission-based reports and feature access, empowering administrators to assign custom roles to users. By re-engineering the sharing functionality, I achieved a 30% improvement in loading speed for public and user-specific sharing. I also developed entity relationship diagram generation and manipulation capabilities using the OGDF library. Other contributions include generating preview thumbnails for report previews, improving search functionality, and implementing dark mode across application modules. In a leadership role, I mentor a team of four, assigning tasks and conducting code reviews to maintain high-quality output."
          role="Member Technical Staff"
        />
        <IndividualExperience
          company="Robert Bosch"
          years="07/2019 - 04/2020"
          desc="I worked in the North American division of an ultrasonics-based assistive car parking team, where I assisted with sensor data measurement and conversion for the car's Control unit. I actively participated in implementing unit testing for the data conversion process and provided support for mainframe integration testing. One of my notable achievements was completely automating the sensor data conversion test flow, which proved invaluable during the pandemic as it enabled remote testing without any manual intervention. This automation streamlined the testing process and ensured consistent and reliable results. Throughout my tenure, I contributed to the development of robust sensor data conversion methodologies, enhancing the overall performance and functionality of the assistive car parking system."
          role="Associate Software Developer"
        />
        <IndividualExperience
          company="Ghost Vision Pvt Ltd"
          years="03/2019 - 06/2019"
          desc="I had the privilege of being part of an AR-based application development team focused on image processing and IMU sensor-based position detection. My responsibilities included implementing image processing and movement detection algorithms for real-time deployment of Unity-rendered models onto frames, enabling dynamic placement of augmented reality objects. I also integrated a movement measurement unit (IMU sensor-based) for accurate real-time position tracking of mobile phones or headsets. Additionally, I initiated a frames processing module that utilized object detection algorithms to detect surface-level features, enhancing the application's ability to interact seamlessly with the real world. Being part of this team allowed me to delve into various aspects of AR development, from image processing to sensor integration, and contribute to creating immersive augmented reality experiences."
          role="Software Developer Intern"
        />
      </ul>
    </section>
  );
};

export default Experience;
