import React from 'react'
import banner from '../assets/Banner.png';
import Banner from '../shared/Banner.jsx';
const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24 ' id='home'>
      <Banner banner={banner} heading={"Develop your skills without dilligence"} subheading={"Our digital running shoes provide a running gait analysis on every run. With Intel inside these AI shoes help improve running and reduce the risk of injury."} btn1={'Get Started'} btn2={'Discounts'} />
        
        </div>
  )
}

export default Home