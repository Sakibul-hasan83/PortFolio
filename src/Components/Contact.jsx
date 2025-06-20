import React from 'react';
import Form from './Form';

const Contact = () => {
  return (
    <div className='m-4 flex flex-col justify-evenly  gap-14 '>
                    <div className='flex flex-col justify-center items-center '>
                               <div>
                                      <h1 className='text-4xl'>Contact Me </h1>
                               </div>
                               <div className='p-4 bg-gray-500 rounded-full px-7 mt-6'>
                                        <button><a href="/">Home</a></button> || Contact 
                               </div>
                    </div>


                    {/* map */}

                    <div className='md:flex md:justify-center'>
                         
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8923230971664!2d90.68769357592758!3d23.751218888743878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375449004242b827%3A0xa78ba8d84e6f7f72!2sNarayanganj%20Araihazar%20ucitpura!5e0!3m2!1sen!2sbd!4v1747888197497!5m2!1sen!2sbd" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
                    </div>


                    <div>
                        
                               <h1>|| Get In Touch</h1>
                               <h1 className='text-3xl font-bold'>If you hove any project or need help .Contact me </h1>
                    </div>

                    <div className='md:w-3/6 mx-auto'>
                           <Form></Form>
                    </div>

                    <div className=' grid grid-cols-2 gap-2 md:grid md:grid-cols-4'>
                                 <div className='p-4 bg-gray-700 rounded font-bold'>
                                     
                                        <h1>Phone:</h1>
                                        <h1>01819270683</h1>

                                 </div>
                                 <div className='p-4 bg-gray-700 rounded font-bold'>
                                  <h1>Email:</h1>
                                  <h1>sa83kib@gmail.com</h1>
                                 </div>
                                 <div className='p-4 bg-gray-700 rounded font-bold'>
                                  <h1>Address: </h1>
                                  <h1>Araihazar , Narayanganj</h1>
                                 </div>
                                 <div className='p-4 bg-gray-700 rounded font-bold'>
                                    <h1>Website:: </h1>
                                 </div>
                    </div>


          
    </div>
  );
}

export default Contact;
