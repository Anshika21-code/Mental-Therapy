import React, { useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import gsap from "gsap";
import Reel from "../components/Reel";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowTurnDown } from "react-icons/fa6";
import { IoReturnDownForwardSharp } from "react-icons/io5";
import VideoOverlay from "../components/VideoOverlay";
import Slider from "../components/Slider";
import video from "../assets/video.mp4";


const Homepage = () => {
  const parentRef = useRef();
  const paragraphRef = useRef();
  const videoRef = useRef();
  const [reelPlay, setReelPlay] = useState(false);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(".hero-span", {
      y: "100%",
      delay: 5,
      stagger: 0.1,
    });
    gsap.from(".lines", {
      y: "100%",
      opacity: 0,
      duration: 0.4,
   
     scrollTrigger:{
      trigger:'.about',
      
      start: "10% 25%",
       
      toggleActions: "play reverse play reverse",
     }
    });



    gsap.from(".models-h1", {
      y: "100%",
      opacity: 0,
      duration: 0.4,
     scrollTrigger:{
      trigger:'.models',
     
      start: "top 30%",
    
      toggleActions: "play reverse play reverse",
     }
    });

   
    gsap.from(".philosophy-lines", {
      y: "100%",
      opacity: 0,
      duration: 0.4,
     scrollTrigger:{
      trigger:'.philosophy',
     
      start: "10% 25%",
    
      toggleActions: "play reverse play reverse",
     }
    });

    gsap.to(".seats-progress .cir2", {
      duration: 2.5, 
      strokeDashoffset: 102.15,  
      ease: "power2.inOut",  
      scrollTrigger: {
        trigger: ".seats-progress",  
       
        start: "top 60%",  
       
        toggleActions: "play none none reverse",  
     
      }
    });
    gsap.fromTo(".dot-cir svg", 
      { rotate: 0 }, 
      {
        duration: 2.5,
        rotate: 240,  
        ease: "power2.inOut",  
        transformOrigin: "center",  
        scrollTrigger: {
          trigger: ".seats-progress",  
  
          start: "top 60%",  
          toggleActions: "play none none reverse",  
        }
      }
    );
    gsap.from(".left-seats h1,.left-seats h4", 
     
      {
        opacity:0,
        duration: 2.5,
       
        ease: "power2.inOut",  
         
        scrollTrigger: {
          trigger: ".seats-progress",  
          start: "top 60%",  
          toggleActions: "play none none reverse",  
        }
      }
    );
    

    gsap.from(".strategy-lines", {
      y: "100%",
      opacity: 0,
      duration: 0.4,
     scrollTrigger:{
      trigger:'.strategy',
     
      start: "10% 25%",
    
      toggleActions: "play reverse play reverse",
     }
    });

  }, []);

  ///cursor animation
  useEffect(() => {
    const parent = parentRef.current;
    const handleCrsr = (e) => {
      
      const parentRect = parent.getBoundingClientRect();
      const cursorSize = 64;

      const maxX = parentRect.width - cursorSize;
      const maxY = parentRect.height - cursorSize;

      const Xpos = Math.min(
        Math.max(e.clientX - parentRect.left, cursorSize),
        maxX
      );
      const Ypost = Math.min(
        Math.max(e.clientY - parentRect.top, cursorSize),
        maxY
      );

      gsap.to("#crsr", {
        x: Xpos,
        y: Ypost,
        ease: "power3.out",
        duration: 1,
      });
    };

    parent.addEventListener("mouseenter", ()=>{
      parent.addEventListener("mousemove", handleCrsr)
    });
    return () => {
      parent.removeEventListener("mouseleave", ()=>{
        gsap.to("#crsr", {
          x: 0,
          y: 0,
          ease: "power3.out",
          duration: 1,
        });
      });
    };
  });




  return (
    <div className="home">
      <Loader />
      <Reel playReel={reelPlay} setReelPlay={setReelPlay} />
      <div className="w-full h-screen bg-red-300/20 relative">
        <video src={video} autoPlay muted loop className="h-screen w-full absolute object-cover object-center top-0 left-0 z-[8]"></video>
        <div
          ref={parentRef}
          className="relative top-0 left-0  z-[15]  h-screen w-full flex items-center lg:items-end justify-center"
        >
          <div
            id="crsr"
            onClick={() => setReelPlay(true)}
            className=" absolute top-0 left-0  -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#EAE4D5]  invisible lg:visible  flexCenter select-none"
          >
            Play reel
          </div>

          <h1 className="  overflow-hidden    h-[29vw] lg:h-[26vw] ">
            {"tranquil".split("").map((letter, idx) => (
              <span
                className="hero-span inline-block text-[25vw] lg:text-[27vw] font-medium font-Rejoice text-white leading-[27vw]"
                key={idx}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>
      </div>

      <div className="about w-full lg:h-screen px-3 lg:px-9 pt-4 my-10 ">
        <div className="justifyBetween border-b-[1px] my-6 border-black overflow-hidden py-2 lg:py-5">
          <h4 className=" lines text-sm lg:text-2xl flexCenter text-[#0e0e0e]">
            Immerse, Restore, Empower.
            <sup className="text-xs lg:text-sm font-extralight align-top">
              TQ
            </sup>
          </h4>
          <h4 className="lines text-sm lg:text-2xl font-thin text-[#0e0e0e]">
            Virtual Healing
          </h4>
        </div>

        <div className=" py-4  flex flex-wrap">
          {`Your journey to mental wellness starts here. Through immersive VR environments, we guide you safely through therapeutic experiences that heal trauma, reduce anxiety, and build resilience. Step into your transformation.`
            .split(" ")
            .map((word, idx) => (
              <p key={idx} className="para1  mb-1 mr-3  overflow-hidden">
                <span className="lines inline-block   text-2xl lg:text-6xl   ">
                  {word}
                </span>
              </p>
            ))}

          <div className="   mb-2  lg:h-16 overflow-hidden"></div>
        </div>
      </div>

      <div className="models w-full min-h-screen px-3 lg:px-9 pt-4 ">
        <p className="w-full flexCenter gap-2  lg:text-lg">
          Immersive & Healing{" "}
          <span className="rounded-full bg-black text-white px-3 py-1  text-xs lg:text-sm">
            Technologies
          </span>{" "}
          <FaArrowTurnDown className="text-sm lg:text-base" />{" "}
        </p>

        <div className="mt-5 group">
          <h1 className="overflow-hidden w-full text-center  lg:h-20">
            <span className="models-h1 inline-block text-3xl lg:text-7xl font-medium group-hover:underline decoration-black underline-offset-1 decoration-4">
              Explore our services
            </span>
          </h1>
          <h1 className="overflow-hidden w-full text-center lg:h-20">
            <span className="models-h1 inline-block text-3xl lg:text-7xl font-medium group-hover:underline decoration-black underline-offset-1 decoration-4 ">
              And engagement therapies
            </span>
          </h1>
        </div>

        <div className="mt-28   overflow-hidden">
          <div className="justifyBetween border-b-2 border-black py-2 lg:py-5">
            <h5 className="text-sm lg:text-2xl">
              Transforming mental care through virtual reality.
            </h5>
            <h5 className=" underline-hover-effect-black text-black  flex items-center gap-2 text-sm lg:text-2xl">
              {" "}
              <IoReturnDownForwardSharp /> See the Therapy Sessions
            </h5>
          </div>

          <div className="w-full h-[50vh] lg:h-auto  flex justify-between  overflow-x-scroll   mt-12 lg:mt-40 ">
            <VideoOverlay
              videoSrc="https://videos.pexels.com/video-files/6875571/6875571-hd_1080_1920_25fps.mp4"
              imageSrc="/assets/imgs/seasonal.jpg "
              logoSrc="/assets/imgs/seasonal.svg "
            />
            <VideoOverlay
              videoSrc="https://videos.pexels.com/video-files/6499155/6499155-uhd_2160_3840_25fps.mp4" 
              imageSrc="/assets/imgs/vr.jpg  "
              logoSrc="/assets/imgs/vr.svg"
            />
            <VideoOverlay
              videoSrc="https://videos.pexels.com/video-files/30775907/13164211_2160_3840_30fps.mp4"
              imageSrc="/assets/imgs/nature.jpg"
              logoSrc="/assets/imgs/nature-svg.svg"
            />
          </div>
        </div>
      </div>
      <div className="philosophy w-full min-h-screen px-3 lg:px-9 pt-4  my-10 ">
        <div className="justifyBetween  mt-6 overflow-hidden">
          <h4 className=" philosophy-lines text-lg lg:text-3xl flexCenter text-[#0e0e0e]">
            We operate on a simple philosophy:
          </h4>
        </div>
        <div className="justifyBetween border-b-[1px] pb-4 mb-6 border-black overflow-hidden">
          <h4 className=" philosophy-lines  text-lg lg:text-3xl flexCenter text-[#0e0e0e]">
            Healing over hurrying.
          </h4>
        </div>

        <div className=" py-4  flex flex-wrap">
          {` We work with a focused group of clients each session. This ensures personalized attention for your healing journey and growth through our innovative VR therapy experiences, supported by our caring professional team. We help people ready to embrace new paths to mental wellness.`
            .split(" ")
            .map((word, idx) => (
              <p className="    mb-1 mr-3  overflow-hidden">
                <span
                  key={idx}
                  className="philosophy-lines inline-block   text-2xl lg:text-6xl   "
                >
                  {word}
                </span>
              </p>
            ))}
        </div>

        <div className="seats w-full h-[100vh] my-10 relative">
          <video
            autoPlay
            loop
            muted
            src="https://raw.githubusercontent.com/peyush-nuwal/rejoice/main/public/RJ-BALL-BLUE-ORANGE-scaled.webm"
            type="video/webm"
            className="w-full h-full object-contain"
          ></video>

          <div className="absolute  top-0 left-0 w-full h-full flexCenter  ">
            <div className="seats-progress w-9/12 lg:w-1/3 ">
              <svg className="" viewBox="0 0 100 100" transform="rotate(-90)">
                <circle
                  cx="50"
                  cy="50"
                  r="49"
                  stroke="#D4D4D4"
                  strokeWidth="0.25"
                  fill="none"
                  className="o:0.3 $$2$$ $$3$$ $$4$$ (.in-view):tween:all,2.8s,easeOutSlow"
                  strokeDasharray="308"
                  strokeDashoffset="0"
                ></circle>

                <circle
                  cx="50"
                  cy="50"
                  r="49"
                  stroke="#fff"
                  strokeWidth="0.25"
                  fill="none"
                  className="cir2"
                  strokeDasharray="308"
                  strokeDashoffset="307.88"
                ></circle>
              </svg>
            </div>
            <div className="absolute dot-cir w-9/12 lg:w-1/3  ">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="1" r="1" fill="#fff"></circle>
              </svg>
            </div>
            <div className="absolute left-seats">
              <h1 className="text-4xl lg:text-6xl font-medium text-white ">
                Nature.exe 
              </h1>
              <h4 className="text-base lg:text-xl font-medium text-center text-white">
                Discover inner peace
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="strategy w-full min-h-screen px-3 lg:px-9 pt-4 my-10 ">
        <div className="justifyBetween  mt-6 overflow-hidden">
          <h4 className=" strategy-lines text-xl lg:text-3xl flexCenter text-[#0e0e0e]">
            Supports mindfulness and meditation practices
          </h4>
        </div>
        <div className="justifyBetween border-b-[1px] pb-4 mb-6 border-black overflow-hidden">
          <h4 className=" strategy-lines text-xl lg:text-3xl flexCenter text-[#0e0e0e]">
            You need both.
          </h4>
        </div>

        <div className=" py-4  flex flex-wrap pb-10">
          {`Our carefully curated virtual environments are designed to provide therapeutic benefits while creating deeply immersive healing experiences. Each environment has been selected based on scientific research about nature's impact on mental health.`
            .split(" ")
            .map((word, idx) => (
              <p key={idx} className="mb-1  mr-3  overflow-hidden">
                <span className="strategy-lines inline-block   text-2xl lg:text-6xl   ">
                  {word}
                </span>
              </p>
            ))}
        </div>

        <h1 className="mt-[3vw] font-Rejoice text-3xl lg:text-[7vw] border-[1px] border-b-black border-transparent justifyBetween ">
          Get in touch.{" "}
          <span className="font-Rejoice  text-xl lg: self-end flex  items-center py-2 lg:py-5">
            <IoReturnDownForwardSharp /> contact
          </span>
        </h1>
        <Slider />
      </div>
    </div>
  );
};

export default Homepage;
