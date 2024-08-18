
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
function Navbar() {
    const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  const sectionLinks = [
    {name:"Home",link:"/"},
    { name: "About", link: "/about" },
    { name: "Experience", link: "/experience" },
    { name: "Projects", link: "/projects" },
  ];



  return (
    <nav className="bg-black container mx-auto max-w-full flex items-center justify-between py-4 sticky top-0 left-0 z-10">
   
        <motion.div
          className="flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Link href="/" className="text-primary font-stylish text-3xl">
          Shreya Goyal
          </Link>
        </motion.div>
       
       <div className="lg:flex hidden items-center gap-[48px] font-medium">
          <ul className="flex items-center lg:gap-[30px] gap-[48px] font-medium ">
            {sectionLinks.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="py-3 px-4 "
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.3 + index * 0.1,
                }}
              >
                <Link href={link} className="text-white transition duration-300 ease-in-out hover:text-primary">
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
           initial={{ opacity: 0, y: -25 }}
           animate={{ opacity: 1, y: 0 }}
           className=" text-primary py-2 px-3 border border-primary rounded-md"
           transition={{
             duration: 0.3,
             ease: "easeInOut",
             delay: 0.6,
           }}>
        <Link href="/shreya-resume.pdf">Resume</Link>

          </motion.div>
          </div>

       
            <motion.div 
             className="text-primary text-2xl flex lg:hidden"
             initial={{ opacity: 0, y: 5 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{
               duration: 0.3,
               ease: "easeInOut",
             }}>
                  <Sheet open={responsiveNavVisible} >
      <SheetTrigger asChild>
      <GiHamburgerMenu onClick={()=>setResponsiveNavVisible(true)}/>
      </SheetTrigger>
      <SheetContent className="bg-gray-900">
       
      <div className="flex flex-col items-center gap-[30px] font-medium mt-10">
          <ul className="flex flex-col items-center gap-[25px] font-medium ">
            {sectionLinks.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="py-3 px-4 "
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.3 + index * 0.1,
                }}
              >
                <Link href={link} className="text-white">
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
           initial={{ opacity: 0, y: -25 }}
           animate={{ opacity: 1, y: 0 }}
           className=" text-primary py-2 px-3 border border-primary rounded-md"
           transition={{
             duration: 0.3,
             ease: "easeInOut",
             delay: 0.6,
           }}>
        <button>Resume</button>

          </motion.div>
          </div>
       
          <SheetClose asChild onClick={()=>setResponsiveNavVisible(false)} className="absolute top-4 md:right-[24px] right-4 text-2xl text-primary">
          <CgClose/>
          </SheetClose>
       
      </SheetContent>
    </Sheet>
                     
               

            </motion.div>
      
  
        </nav>
  );
}

export default Navbar;
