import React from 'react';
import { SiXdadevelopers } from "react-icons/si";
import frontend from "../assets/fronend.png"
import backend  from "../assets/backend.png"
import fullstack from "../assets/fullstack.png"
import customize from "../assets/customize.png"
const Services = () => {
  return (
    <div className='p-4'>
                    <div className='flex flex-col justify-evenly gap-4 my-4'>
                               <div>|| My Services</div>
                               <div className='text-3xl font-bold '> Service Provide For My Clients.</div>
                    </div>
                <div className='flex flex-col justify-center gap-10 md:grid md:grid-cols-3 md:justify-evenly mt-10'>

                     {/* 1st card */}
                    <div className='flex flex-col justify-start gap-4 p-8  bg-[#334155]  w-fit'>
                           <div className='p-4 border-2 rounded-lg  flex flex-row justify-center '>
                                 <img src={frontend} alt=""  className='w-2/4  items-center'/>
                           </div>
                           <div className='text-2xl font-bold'>
                                  Frontend 
                           </div>

                           <div>
                                 <li>Responsive Website Design (Mobile & Desktop Friendly)</li>
                                 <li>HTML, CSS, JavaScript, Tailwind CSS, React</li>
                                 <li>Modern UI/UX with Clean & Interactive Design</li>
                           </div>
                    </div>

                    {/* 2nd card */}
                    <div className='flex flex-col justify-start gap-4 p-8  bg-[#334155]  w-fit'>
                           <div className='p-4 border-2 rounded-lg  w-fit flex flex-row justify-center  '>
                                <img src={backend} alt="" className='w-2/4  items-center'/>
                           </div>
                           <div className='text-2xl font-bold'>
                                   Backend Development
                           </div>

                           <div>
                                 <li>RESTful API development with Node.js and Express.js</li>
                                 <li>Authentication and authorization (JWT, OAuth)</li>
                                 <li>Server-side logic and database operations</li>
                                 <li>MVC architecture and clean code structure</li>
                           </div>
                    </div>

                    {/* 3rd card */}
                    <div className='flex flex-col justify-start gap-4 p-8  bg-[#334155]  w-fit'>
                           <div className='p-4 border-2 rounded-lg  w-fit flex flex-row justify-center '>
                                  <img src={fullstack} alt=""  className='w-2/4  items-center'/>
                           </div>
                           <div className='text-2xl font-bold'>
                                   Full Stack Web Application
                           </div>

                           <div>
                                 <li>Complete MERN stack applications</li>
                                 <li>Admin dashboard and user panel</li>
                                 <li>Payment gateway integration (e.g., Stripe, SSLCommerz)</li>
                                 <li>Deployment and live hosting (Vercel, Render, Netlify, etc.)</li>
                           </div>
                    </div>
                    {/* 4th card */}
                    <div className='flex flex-col justify-start gap-4 p-8  bg-[#334155]  w-fit'>
                           <div className='p-4 border-2 rounded-lg  w-fit  flex flex-row justify-center '>
                               <img src={customize} alt=""  className='w-2/4  items-center'/>
                           </div>
                           <div className='text-2xl font-bold'>
                                  Custom Website Design
                           </div>

                           <div>
                                 <li>Business websites</li>
                                 <li>Portfolio and personal branding sites</li>
                                 <li>E-commerce sites</li>
                                 <li>Blog and content management</li>
                           </div>
                    </div>
                    {/* 5th card */}
                    <div className='flex flex-col justify-start gap-4 p-8  bg-[#334155]  w-fit'>
                           <div className='p-4 border-2 rounded-lg  w-fit  flex flex-row justify-center '>
                               <img src={customize} alt=""  className='w-2/4  items-center'/>
                           </div>
                           <div className='text-2xl font-bold'>
                                  Custom Website Design
                           </div>

                           <div>
                                 <li>Business websites</li>
                                 <li>Portfolio and personal branding sites</li>
                                 <li>E-commerce sites</li>
                                 <li>Blog and content management</li>
                           </div>
                    </div>
                    {/* 6th card */}
                    <div className='flex flex-col justify-start gap-4 p-8  bg-[#334155]  w-fit'>
                           <div className='p-4 border-2 rounded-lg  w-fit  flex flex-row justify-center '>
                               <img src={customize} alt=""  className='w-2/4  items-center'/>
                           </div>
                           <div className='text-2xl font-bold'>
                                  Custom Website Design
                           </div>

                           <div>
                                 <li>Business websites</li>
                                 <li>Portfolio and personal branding sites</li>
                                 <li>E-commerce sites</li>
                                 <li>Blog and content management</li>
                           </div>
                    </div>
                </div>
    </div>
  );
}

export default Services;
