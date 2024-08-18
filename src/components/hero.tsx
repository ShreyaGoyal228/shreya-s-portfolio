'use client'
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import Image from "next/image";
const Hero = () => {
    return (
        <>
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-[108px] xl:gap-40 2xl:gap-80 items-center mt-20 lg:mt-36 xl:mt-28 2xl:mt-24">
        <motion.div className="relative aspect-square rounded-full w-[300px] h-[280px] lg:w-[320px] lg:h-[300px] xl:w-[400px] xl:h-[380px] 2xl:w-[500px] 2xl:h-[480px] "
         initial={{ opacity: 0, y: 5 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           duration: 0.3,
           ease: "easeInOut",
           delay: 0.6,
         }}>
     <Image src="/profile2.jpeg" 
    fill={true}
    className="rounded-full "
     alt="portfolio-image" />
        </motion.div>

                <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-2 ">
                    <motion.div className="text-white text-[37px] lg:text-[27px] xl:text-[37px] 2xl:text-[50px] font-semibold"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.75,
                    }}>Hi<span className="waving-hand">👋</span> </motion.div>

                    <motion.div className="text-white text-[35px] lg:text-[25px] xl:text-[35px] 2xl:text-[48px] font-semibold"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 1.05,
                    }}>{`I'M`} <span className="text-primary mb-3">Shreya Goyal</span></motion.div>
                    <motion.div className="text-primary text-[35px] lg:text-[25px] xl:text-[35px] 2xl:text-[48px] font-semibold mb-5 lg:mb-0"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 1.35,
                    }}>
                    <Typewriter
                    
  options={{
    
    strings: ['Software Engineer', 'Full Stack Developer'],
    autoStart: true,
    loop: true,
  }}
/>
</motion.div>
                </div>
            </div>     
            </>
    )
}

export default Hero;