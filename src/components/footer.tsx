'use client'

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { SiLeetcode } from "react-icons/si"

const Footer=()=>{
    return(
        <>
        <div className="bg-gray-900">
        <div className="text-center text-sm md:text-base text-white py-3 ">Designed and Developed by <span className="text-primary">Shreya Goyal</span></div>
        <div className="flex justify-center items-center flex-wrap gap-8 pb-2">
            <FiGithub className="text-[#a8b2d1] hover:text-primary size-[20px]"/>
            <FiLinkedin className="text-[#a8b2d1] hover:text-primary size-[20px]"/>
            <FiMail className="text-[#a8b2d1] hover:text-primary size-[20px]"/>
            <SiLeetcode className="text-[#a8b2d1] hover:text-primary size-[20px]"/>
        </div></div>
        </>
    )
}

export default Footer;