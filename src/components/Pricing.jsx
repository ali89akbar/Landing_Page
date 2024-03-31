import React, { useState } from 'react'
import green from '../assets/Rectangle 18.png';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Pricing = () => {
    const[yearly,setyearly] =useState(false);
    const pack=[
        {name:"Start",monthly:'$10', yearly:'$100',description:"You can avail this at any time and also return it if not satisfied with the product.",green:"/src/assets/Rectangle 18.png",red:"/src/assets/Rectangle 20.png"},
        {name:"Advance",monthly:'$10', yearly:'$100',description:"You can avail this at any time and also return it if not satisfied with the product.",green:"/src/assets/Rectangle 18.png",red:"/src/assets/Rectangle 20.png"},
        {name:"Premium",monthly:'$10', yearly:'$100',description:"You can avail this at any time and also return it if not satisfied with the product.",green:"/src/assets/Rectangle 18.png",red:"/src/assets/Rectangle 20.png"}


    
    ]
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto py-10' id='price'>
        <motion.div
         variants={fadeIn("right", 0.2)} // Use the fadeIn function here
         initial="hidden"
         whileInView="show" // Use "animate" instead of "whileInView"
         viewport={{once:false,amount:0.3}}
        className='text-center'>
<h2 className='md:text-5xl text-3xl font-extrabold text-primary mb-2'>Here we all our plans</h2>
 <p className='text-tertiary md:w-1/3 mx-auto px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam possimus aut obcaecati distinctio, nulla nisi, laborum optio eius explicabo minima, laudantium placeat? Numquam, esse in sapiente cum explicabo vero similique.</p>     
      <div className='mt-16'>
        <label htmlFor="toggle" className='inline-flex items-center cursor-pointer'>
            <span className='mr-8 text-2xl font-semibold'>Monthly</span>
            <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out'>
                <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${yearly ? "bg-[#010851] ml-8": "bg-gray-500"}`}></div>
            </div>
            <span className='ml-8 text-2xl font-semibold'>
                Yearly
            </span>
              </label>
              <input type="checkbox" id="toggle" className='hidden' checked={yearly} onChange={()=>{
                setyearly(!yearly)
              }}  />

      </div>
     </motion.div>

     <motion.div
      variants={fadeIn("up", 0.5)} // Use the fadeIn function here
      initial="hidden"
      whileInView="show" // Use "animate" instead of "whileInView"
      viewport={{once:false,amount:0.3}}
     className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto'>
  {pack.map((pkg, ind) => (
    <div key={ind} className='border py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
      <h3 className='text-3xl font-bold text-center text-primary'>{pkg.name}</h3>
      <p className='text-tertiary text-center my-5'>{pkg.description}</p>
      <p className='mt-5 text-center text-secondary text-4xl font-bold '  >{yearly ? `${pkg.yearly}` : `${pkg.monthly}`} <span className='text-base text-tertiary font-medium '>{yearly ? "year" : "month" } </span></p>
      <ul className='mt-4 space-y-2 px-4'>
        <li className='flex gap-2 items-center' ><img src={pkg.green} alt="" className='w-4 h-4' />Video of Lessons</li>
        <li className='flex gap-2 items-center' ><img src={pkg.red} alt="" className='w-4 h-4' />Real time Detection</li>
        <li className='flex gap-2 items-center' ><img src={pkg.green} alt="" className='w-4 h-4' />Five Angle Condition</li>
        <li className='flex gap-2 items-center' ><img src={pkg.green} alt="" className='w-4 h-4' />Home Work</li>
        <li className='flex gap-2 items-center' ><img src={pkg.green} alt="" className='w-4 h-4' />Detection with Description</li>
    
     
      </ul>
      <div className='w-full mx-auto mt-8 flex items-center justify-center '>
        <button className='btnprimary'>
            Get Started
        </button>
      </div>
    </div>
  ))}
</motion.div>

    </div>
  )
}

export default Pricing