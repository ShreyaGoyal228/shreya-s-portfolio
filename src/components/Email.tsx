import React from "react";
import { motion } from "framer-motion";
function Email() {
  return (
    <motion.div
      className="hidden bottom-0 lg:flex flex-col gap-3 fixed lg:right-[3.125rem] xl:right-[5rem] 2xl:right-[6.25rem] after:content-[''] after:bg-[#a8b2d1] after:w-[2px] after:h-[120px] after:mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
   
    >
      <a href="mailto:goyalshreya228@gmail.com" className="text-[#a8b2d1] hover:text-primary p-2.5 email transition duration-300 ease-in-out ">
        goyalshreya228@gmail.com
      </a>
    </motion.div>
  );
}

export default Email;
