import React from 'react'
import { SearchBar } from './search'

const HeroImage = () => {
  return (
    <div className="bg-[url('/images/hero-image.png')] object-cover w-full h-[35vh] md:h-[35vh] lg:h-[50vh] xl:h-[65vh] relative">
      <h1 className='text-2xl text-white absolute font-semibold w-[80vw] md:text-4xl md:tracking-wide md:font-bold md:absolute bottom-[11vh] left-[5vw] md:w-1/2 md:leading-10' >
        Discover Incredible Experiences Worldwide</h1>
      <div className='absolute  bottom-[4vh] right-[40%] md:bottom-[-2vh] md:right-[40%] lg:bottom-[-3vh] lg:right-[35%] xl:bottom-[-4vh] xl:right-[40%]'>
        <SearchBar classname={"block w-full p-4 ps-14 text-sm text-gray-900 border tracking-wide border-gray-300 rounded-md bg-white focus:ring-blue-500"} placeHolder={"Search Activities and destinations"} />
      </div>
    </div>
  )
}

export default HeroImage