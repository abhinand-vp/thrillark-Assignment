import React from 'react'

const HeroImage = () => {
  return (
    <div className="bg-[url('/images/hero-image.png')] object-cover w-full h-[35vh] md:h-[35vh] lg:h-[70vh] relative">
      <h1 className='text-2xl text-white absolute bottom-[5vh] left-[5vw] font-semibold w-[80vw] md:text-4xl md:tracking-wide md:font-bold md:absolute bottom-[11vh] left-[5vw] md:w-1/2 md:leading-10' >
        Discover Incredible Experiences Worldwide</h1>
    </div>
  )
}

export default HeroImage