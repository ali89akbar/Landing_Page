import React from 'react'
import banner from '../assets/Newslider-preview.png'
import Banner from '../shared/Banner'

const NewSlider = () => {
  return (
    <div className='md:px-14 p-4 max-w-screen-2xl mx-auto my-12'>
<Banner banner={banner} heading={"Each User can share discount code for friends"} subheading={"AI shoe Analyzer provide efficient way to detect your shoe condition through your mobile camera"} btn1={"Get Code"} btn2={"Invite"}/>

    </div>
  )
}

export default NewSlider