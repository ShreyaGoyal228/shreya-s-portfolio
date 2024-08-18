'use client'
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import Navbar from "./navbar";
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";
import Hero from "@/components/hero";

export default function Home() {
  const [showContent,setShowContent]=useState<boolean>(false);

  useEffect(()=>{
   setTimeout(()=>{
      setShowContent(true);
   },3000)
  })
  return (
 <>
 <div className=" bg-black min-h-[100vh]">
 
{showContent ? (
  <>
 <Navbar />
          <SocialIcons />
          <Email />
          <main className="md:mx-[180px] xl:mx-[240px] 2xl:mx-[270px]">
            <Hero />
          </main>
          {/* <Footer /> */}
  </>
):(
<div className="flex items-center justify-center h-screen">
  <RotatingLines
  visible={true}
  width="96"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
strokeColor="#3B82F6"
  />
  
  </div>
)}

  </div>
  </>
  )
}
