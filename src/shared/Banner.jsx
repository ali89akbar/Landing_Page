import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'; // Import the fadeIn function

const Banner = ({ banner, heading, subheading, btn1, btn2 }) => {
  return (
    <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
        <motion.div
          variants={fadeIn("down", 0.2)} // Use the fadeIn function here
          initial="hidden"
          animate="show" // Use "animate" instead of "whileInView"
          exit="hidden"
          transition={{ duration: 1.2, delay: 0 }}
        >
          <img src={banner} alt="banner" className='lg:h-[386px]' />
        </motion.div>

        <motion.div 
          variants={fadeIn("up", 0.2)} // Use the fadeIn function here
          initial="hidden"
          animate="show" // Use "animate" instead of "whileInView"
          exit="hidden"
          transition={{ duration: 1.2, delay: 0 }}
        
        className='md:w-3/5'>
          <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
          <p className='text-[#EBEBEB] text-2xl mb-8'>{subheading}</p>
          <div className='space-x-5 space-y-4'>
            <button className='btnprimary'>{btn1}</button>
            <button className='btnprimary'>{btn2}</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
