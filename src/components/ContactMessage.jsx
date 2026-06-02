import React from 'react'
import { services } from '../assets/DesignHaven-Assets/contactData'

const ContactMessage = () => {
  return (
    
    <div className=' p-8 rounded-2xl bg-accent-light  flex flex-col gap-4 sm:w-full md:w-1/2 shadow-xl'>
       
        <h2 className='font-bold font-heading text-2xl mb-6'>Send Us a Message</h2>

        {/* name.email */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5  '>
          <div>
            <p className='text-gray-500'>Name</p>
            <input type="text"  className='border-2 border-accent py-2 w-full px-4 mt-2' placeholder='Enter Your Name' />
            </div>
            <div>
            <p className='text-gray-500'>Email</p>

            <input type="Email" className='border-2 border-accent  py-2 w-full px-4 mt-2'placeholder='Enter Your Email ' />
            </div>
        </div>
        {/* other data */}

        <div>
          <p className='text-gray-500'>Phone</p>
          <input type="text" className='border-2 border-accent  py-2 w-full px-4' placeholder='+91 1243885975 '  />

        </div>
        <div>
          <p className='text-gray-500'>Services</p>
        <select  className="border-2 border-accent py-2 w-full px-4 mt-2 "
        >
          {
            services.map((item,id)=>(
              <option key={id}>
                {item}

              </option>
            ))
          }
        </select>
        </div>
        <p className='text-gray-500'>Message</p>
         <textarea rows={5} className='border-2 border-accent  p-3 w-full   ' placeholder='Enter Your Email' >
          </textarea>

           {/*button  */}
           <div className='rounded-full bg-accent px-4 py-3 cursor-pointer w-fit'>
            <button className='text-white flex justify-center items-center'>
              Send Message

            </button>

           </div>


        </div>
        

   
  )
}

export default ContactMessage