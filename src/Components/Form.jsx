import React from 'react';

const Form = () => {
const controlForm =event=>{
    event.preventDefault()
    const fr = event.target;
    const name=fr.name.value;


    console.log(name)
}





  return (
    <div className=' bg-gray-700  rounded'>
          <form action="" className='flex flex-col justify-center gap-10 items-center p-4 '  onSubmit={controlForm} >

            <input type="text" placeholder='Name'name='name' className='p-2 w-full rounded text-black'/>
            <input type="email" placeholder='Email' name='email' className='p-2 w-full rounded text-black' />
            <input type="text"  placeholder='Phone' name='phone'  className='p-2 w-full rounded text-black' />
            <input type="text"  placeholder='Subject' name='subject'  className='p-2 w-full  rounded text-black'/>
            <input type="text"  placeholder='Comment' name='comment'  className='p-2 w-full rounded text-black'/>
            <button className='border-2 p-2 w-fit rounded-full'type='submit'>Submit Message</button>

          </form>
    </div>
  );
}

export default Form;
