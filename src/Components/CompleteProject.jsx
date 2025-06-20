import React from 'react';
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
import frontend from "../assets/fronend.png"

import facebook from "../assets/facebook.jpg"
import youtube from "../assets/youtube.jpg"
import linkedin from "../assets/linkedin.jfif"
import github from "../assets/gitgub.jpg"
import wev from "../assets/wev.PNG"
import developers3 from "../assets/developers3.PNG"
import cricket from "../assets/cricket.PNG"
import boipuka from "../assets/boipuka.PNG"
import peddy from "../assets/peddy.PNG"
import fitness from "../assets/fitness2.PNG"
import jobPortal from "../assets/JobPortal.PNG"
import loginSystem from "../assets/login system.PNG"


const CompleteProject = () => {
  return (
    <div className=' m- rounded-lg p-'>
                    <div className='my-8'>
                                <div className='my-4'>
                                       <h1>|| Awesome Portfolio</h1>
                                </div>
                                <div className='flex justify-center '>
                                       <h1 className='text-3xl font-bold'>My Complete Project </h1>
                                </div>
                             
                    </div>


{/* slide */}

<div className='grid grid-cols-1 items-center gap-10 mx-12  md:grid md:grid-cols-2  lg:grid-cols-3  '>
           <div className="card glass p-2">
  <figure>
    <img
      src={boipuka}
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">BoiPuka</h2>
    <p>Specially for Frontend</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><a href='https://venerable-praline-945892.netlify.app'>See Now!</a></button>
    </div>
  </div>
</div>
           <div className="card glass  p-2">
  <figure>
    <img
      src={cricket}
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Cricket Hiaring</h2>
    <p>Specially for Frontend</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><a href='https://subtle-froyo-77b8da.netlify.app'>See Now!</a></button>
    </div>
  </div>
</div>
           <div className="card glass  p-2">
  <figure>
    <img
      src={peddy}
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Peddy</h2>
    <p>Specially for Frontend</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">See now!</button>
    </div>
  </div>
</div>
           <div className="card glass  p-2">
  <figure>
    <img
      src={jobPortal}
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">JobPotal</h2>
    <p>Specially for Frontend</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">See now!</button>
    </div>
  </div>
</div>
           <div className="card glass  p-2">
  <figure>
    <img
      src={loginSystem}
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Login System</h2>
    <p>Specially for Frontend</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">See now!</button>
    </div>
  </div>
</div>
           
           <div className="card glass  p-2">
  <figure>
    <img
      src={developers3}
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Login System</h2>
    <p>Specially for Frontend</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><a href='https://cool-bonbon-1a611a.netlify.app/'>See Now!</a></button>
    </div>
  </div>
</div>
           
           <div className="card glass  p-2">
  <figure>
    <img
      src={fitness}
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Login System</h2>
    <p>Specially for Frontend</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><a href='https://superb-puffpuff-6aeec0.netlify.app/'>See Now!</a></button>
    </div>
  </div>
</div>
           




</div>


    </div>
  );
}

export default CompleteProject;
