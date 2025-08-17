import React from 'react';
import profilepicture from '../assets/z-removebg-preview (1).png'
import { Link } from 'react-router-dom';
import { SlSocialFacebook } from "react-icons/sl";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { SlSocialYoutube } from "react-icons/sl";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import profilePicture2 from  "../assets/pc.png"
const Banner = () => {
  return (
<div className=' ml-2   flex flex-col  md:flex md:flex-row md:justify-center md:items-center md:gap-10'>
   <div className='flex flex-row justify-center '>
                  
                             <div className='m-10'>
                                            <img src={profilePicture2} alt=""  className=' mx-auto my-10 border-r-2 rounded-r-full ' />
                             </div>
                             
                             <div className='flex flex-col justify-center  gap-8 m-4  relative'>
                                    
                                     <a href='https://www.facebook.com/SakibulHasan83'className=' p-2 rounded-full border-2 border-white ' ><SlSocialFacebook /></a>
                                     <a href='https://www.linkedin.com/in/sakibul-hasan-0897b7316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className=' p-2 rounded-full border-2 border-white'><LuLinkedin /></a>
                                     <a href='https://github.com/Sakibul-hasan83'  className=' p-2 rounded-full border-2 border-white'><FiGithub /></a>
                                     <a href='https://youtube.com/@sakibmania?si=I8E3LQKSY9G23Pm-' className=' p-2 rounded-full border-2 border-white'><SlSocialYoutube /></a>
                             </div>                
   
       </div>



           <div className=' flex flex-col '>
   
                                        <div className='flex flex-col '>  
                                                 <h1 className='text-3xl font-bold'>Hello! I'm </h1>
                                         <h1 className='text-4xl font-bold my-2'>Sakibul Hasan</h1>
   
                                         <h1 className='text-1xl opacity-50 my-2'>Full Stack Developer/Frontend/Backend</h1>
                                        </div>
   
   
                                      <div>
<a href="cv.pdf" download="Sakibul_Hasan_cv.pdf">
  <button className='flex flex-row justify-start gap-2 items-center p-2 border-2 rounded-full'>
    Download CV <MdOutlineDownloadForOffline />
  </button>
</a>

</div>

   
                                        {/* <div >
                                              <button className=' my-2 p-2  rounded-full border-2 flex flex-row items-center gap-1'><GoVideo></GoVideo> Go Video </button>
                                        </div> */}
                              </div>

       </div>
  );
}

export default Banner;
