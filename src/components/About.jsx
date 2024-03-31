import about from '../assets/about.png';
import about2 from '../assets/about2.png';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants';
const About = () => {
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto space-y-10' id='about'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        <motion.div
          variants={fadeIn("right", 0.2)} // Use the fadeIn function here
          initial="hidden"
          animate="show" // Use "animate" instead of "whileInView"
          exit="hidden"
          transition={{ duration: 1.2, delay: 0 }}
        
        className='md:w-1/2'>
            <img src={about} alt="" />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.5)} // Use the fadeIn function here
          initial="hidden"
          animate="show" // Use "animate" instead of "whileInView"
          exit="hidden"
          transition={{ duration: 1.2, delay: 0 }}
         className='md:w-2/5'>
            <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                We have been improving our product <span className='text-secondary'> for many years.</span>
            </h2>
            <p className='text-tertiary text-lg mb-7  '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus tenetur mollitia, molestias illum delectus perferendis unde blanditiis laborum dolore magni quibusdam odio sit, consectetur ut. Alias fugit et doloremque 
            </p>
            <button className='btnprimary'>
Get Started
            </button>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("left", 0.7)} // Use the fadeIn function here
        initial="hidden"
        whileInView="show" // Use "animate" instead of "whileInView"
        viewport={{once:false,amount:0.7}}
       className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
        <div className='md:w-1/2'>
            <img src={about2} alt="" />
        </div>

        <motion.div
          variants={fadeIn("right", 0.9)} // Use the fadeIn function here
          initial="hidden"
        whileInView="show" // Use "animate" instead of "whileInView"
        viewport={{once:false,amount:0.7}}
       className='md:w-2/5'>
            <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                You can Practice at any <span className='text-secondary'> time for you</span>
            </h2>
            <p className='text-tertiary text-lg mb-7  '>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus tenetur mollitia, molestias illum delectus perferendis unde blanditiis laborum dolore magni quibusdam odio sit, consectetur ut. Alias fugit et doloremque 
            </p>
            <button className='btnprimary'>
Get Started
            </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About