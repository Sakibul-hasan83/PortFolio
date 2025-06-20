import React from 'react';
import { SlSocialFacebook } from "react-icons/sl";
import { GiWorld } from "react-icons/gi";
import { LuLinkedin } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";

const Footer = () => {
  return (
   
     <div className='bg-[#252525] flex flex-col justify-center items-center   '>
       <div className='items-center mx-auto my-10 flex flex-col justify-center  md: md:flex-row md:justify-center md:items-center md:gap-10  '>
                 <div className='my-2 items-center mx-auto'><h1>||Get Latest Updates</h1></div>
                 <div className='my-2'><h1>Subscribe For Newsletter</h1></div>

                 <div className='my-2 items-center mx-auto'>
                         <button className='p-3 border-2 rounded-full'>Subscribe Now</button>
                 </div>

                 <div className='flex  flex-row gap-3 justify-center items-center mx-auto'>
                            <div className='my-2 flex flex-row justify-center items-center gap-2'>
                                      <button className=' flex items-center gap-2 p-2 rounded-full border-2 border-white '> <IoCallOutline />   <h1>  01819270683</h1></button>
                                                          
                            </div>
                            <div className='my-2 flex flex-row justify-center items-center gap-2'>
                                             <button className=' p-2 rounded-full border-2 border-white '>   <IoMailOpenOutline /> </button>          demo@example.com
                            </div>

                 </div>

                 <div className='flex flex-row gap-8 my-2 mb-10   md:mt-10'>

                        
                  <a href='https://www.facebook.com/SakibulHasan83'className=' p-2 rounded-full border-2 border-white ' ><SlSocialFacebook /></a>
                         <button className=' p-2 rounded-full border-2 border-white '><GiWorld /></button>
                   <a href='https://www.linkedin.com/in/sakibul-hasan-0897b7316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className=' p-2 rounded-full border-2 border-white'><LuLinkedin /></a>
                 </div>
              
       </div>
     </div>
  );
}

export default Footer;
