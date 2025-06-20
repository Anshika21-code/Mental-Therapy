import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import gsap from "gsap";
import { motion } from "framer-motion";
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import Reel from "./Reel";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../assets/video.mp4";

const Navbar = () => {
  const navBoxRef = useRef();
  const navRef = useRef();
  const h2Ref = useRef();
 
  const [showNav, setShowNav] = useState(false);
  const [reelPlay, setReelPlay] = useState(false)

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (showNav) {
      gsap.to(navBoxRef.current, {
        height: "75vh",
        duration: 0.8,
        paddingTop: "40px",
        delay: 0.2,
        ease: "expo.inOut",
      });
    } else {
      gsap.to(navBoxRef.current, {
        height: 0,
        paddingTop: "0px",
        duration: 0.8,
        ease: "expo.inOut",
      });
    }
  }, [showNav]);

  useEffect(() => {
    //  gsap.from(navRef.current,{
    //    opacity:0,
    //    y:-100,
    //    duration:1,
    //    delay:5
    //  })

     gsap.to('.nav-h1',{
      color:"#000",
      scrollTrigger:{
        start:'100% top',
       
        toggleActions: "play none none reverse",  
      }
     })
     gsap.to('.nav-h1-left',{
    opacity:0,
      scrollTrigger:{
        start:'100% top',
       
        toggleActions: "play none none reverse",  
      }
     })
     gsap.to('.nav-logo',{
     opacity:1,
      scrollTrigger:{
        start:'100% top',
        
        toggleActions: "play none none reverse",  
      }
     })
  }, [])
  

  const navoption = [
    { id: 1, pageName: "Home", },
    { id: 2, pageName: "Services",  },
    { id: 3, pageName: "About",   },
    { id: 4, pageName: "Contact", },
  ];
  return (
    <>
     <Reel playReel={reelPlay} setReelPlay={setReelPlay}/>
      <div ref={navRef} className="w-full h-28  fixed top-0 left-0 z-[999] justifyBetween  px-9 py-1 overflow-x-hidden ">
        <a  className="relative flex items-center">
          <h1 className="nav-h1-left text-lg font-medium tracking-wide text-white">
            The Tranquil Agency.
          </h1>
          <img src="public/tranquil.svg" alt="" className="absolute nav-logo opacity-0 w-26 h-auto" />
        </a>
        <h1
          onClick={() => setShowNav(true)}
          className="nav-h1 underline-hover-effect text-lg font-medium tracking-wide cursor-pointer text-white "
        >
          Menu{" "}
        </h1>
      </div>

      <div
        ref={navBoxRef}
        className="fixed z-[9999] overflow-hidden px-3 md:px-9 top-0 left-0 h-[0] w-full bg-offwhite flex flex-col
         justify-end  md:justify-between   "
      >
        <h1
          onClick={() => setShowNav(false)}
          className="w-fit place-self-end  text-right underline-hover-effect text-lg font-medium tracking-wide cursor-pointer text-black "
        >
          Close
        </h1>

        <div className="w-full flex justify-start md:justifyBetween flex-col md:flex-row  gap-20 md:gap-40 ">
          <div className="flex-1 content-start h-full">
            {/* Resized logo to match reference */}
            <img src="tranquil.svg" className="mb-1 w-20 h-auto" alt="" />

            <div className="flex flex-col w-7/12 ">
              
              <video src={video} autoPlay muted loop className='w-full h-full object-contain object-center'></video>
              
              <div className="justifyBetween mt-1">
                <div className="flexCenter">
                  <FaCirclePlay className="text-white" />
                  <h4 onClick={()=>setReelPlay(true)} className="underline-hover-effect  text-white  cursor-pointer ml-1 font-medium">
                    Play reel
                  </h4>
                </div>
                <h4 className=" text-white  ml-1 font-medium"> —01:18</h4>
              </div>
            </div>
          </div>
          <div className=" flex-1 flex flex-col gap-1 ">
            {navoption.map((option, idx) => (
              <a  key={option.id}>
                <motion.h2
                  key={option.id}
                  whileHover="hover"
                  ref={h2Ref}
                  className={` relative text-3xl md:text-5xl overflow-hidden h-8 md:h-12 w-fit group `}
                >
                  <motion.span
                    variants={{
                      hover: { y: -50 },
                    }}
                    initial={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                    className=" text-black block"
                  >
                    {option.pageName}
                  </motion.span>

                  <motion.span
                    variants={{ hover: { y: -50 } }}
                    initial={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                    className=" inline-block text-black"
                  >
                    {option.pageName}
                  </motion.span>
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </motion.h2>
              </a>
            ))}
            <motion.button
              whileHover="hover"
              className="button-hover relative text-base px-4 py-2 border-[1px] border-black rounded-full overflow-hidden h-12 w-fit my-4 "
            >
              <motion.span
                variants={{
                  hover: { y: -20 },
                }}
                initial={{ y: 1 }}
                transition={{ duration: 0.3 }}
                className=" text-black block "
              >
                Stay calm
              </motion.span>

              <motion.span
                variants={{ hover: { y: -20 } }}
                initial={{ y: 20 }}
                transition={{ duration: 0.3 }}
                className=" inline-block text-white mix-blend-difference"
              >
                Stay calm
              </motion.span>
            </motion.button>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row items-start  md:justifyBetween border-t-[1px] py-2 border-black">
          <h4 className="text-base">
            Reclaim your Wellness.<sup className="text-xs font-thin">TQ</sup>
          </h4>
          <div className="flexCenter gap-2">
            <motion.div whileHover="hover" className="flexCenter  ">
              X
              <motion.span
                  variants={{ hover: { rotate: 0 } }}
                  initial={{ rotate: -45 }}
                  transition={{ duration: 0.3 }}
              >
                <IoIosArrowRoundForward className=" text-2xl" />
              </motion.span>
            </motion.div>
            <motion.div whileHover="hover" className="flexCenter  ">
              Instagram{" "}
              <motion.span
                   variants={{ hover: { rotate: 0 } }}
                   initial={{ rotate: -45 }}
                   transition={{ duration: 0.3 }}
              >
                <IoIosArrowRoundForward className="text-2xl" />
              </motion.span>
            </motion.div>
            <motion.div whileHover="hover" className="flexCenter  ">
              Linkedin{" "}
              <motion.span
               variants={{ hover: { rotate: 0 } }}
               initial={{ rotate: -45 }}
               transition={{ duration: 0.3 }}
            >
                <IoIosArrowRoundForward className="text-2xl" />
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;