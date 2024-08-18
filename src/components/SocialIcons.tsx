import Link from "next/link";
import React from "react";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    { name: "Github",
       icon: <FiGithub />, link: "https://github.com/ShreyaGoyal228" },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/shreya-goyal-407a0721a/",
    },
    {
      name: "Leetcode",
      icon: <SiLeetcode />,
      link: "https://leetcode.com/u/shree_goyal_28/",
    },
    {
      name: "Email",
      icon: <FiMail/>,
      link: "mailto:goyalshreya228@gmail.com",
    },
  ];
  return (
    <motion.div
      className="hidden lg:block fixed bottom-0 lg:left-[3.125rem] xl:left-[5rem] 2xl:left-[6.25rem] w-auto"  
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="flex flex-col items-start justify-center gap-3 after:content-[''] after:bg-[#a8b2d1] after:w-[2px] after:h-[120px] after:mx-auto">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="p-5 text-[22px] transition duration-500 ease-in-out hover:-translate-y-1 ">
            <Link
              href={link}
              className="text-[#a8b2d1] hover:text-primary "
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
