import React, { useEffect, useRef, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import gsap from 'gsap'
import video from '../assets/video.mp4'

const Reel = ({playReel,setReelPlay}) => {
    const videoRef=useRef(null)
   
    useEffect(() => {
       if(playReel||false){
        gsap.to(videoRef.current,{
             width:"100%",
             duration:0.6,
        })
        if (videoRef.current && typeof videoRef.current.play === 'function') {
            videoRef.current.play();  
        }
       }else{
        gsap.to(videoRef.current,{
            width:"0%",
            duration:0.6,
        })
        if (videoRef.current && typeof videoRef.current.play === 'function') {
            videoRef.current.pause(); 
        }
       }
    }, [playReel])
    
    return (
        <div ref={videoRef} className='fixed top-0 left-0 h-screen w-0 overflow-hidden  z-[9999999] bg-black '>
            
            <video src={video} autoPlay muted loop className='w-full h-full object-contain object-center'></video>

            <div className=' absolute right-10 top-10 w-16 h-16   text-white  flexCenter cursor-pointer' onClick={()=>setReelPlay(false)}>
                <RxCross2 style={{ color: 'white' }} className=' text-white text-4xl'/>
            </div>
        </div>
    )
}

export default Reel