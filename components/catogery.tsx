import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import sweater from "../public/aweater.jpeg"
import graypant from "../public/gray-pant.avif"
import leporedprintedsidezipboots from "../public/leporedprintedsidezipboots.avif"
import accessories from "../public/accessories.avif"

const Catogery = () => {
  return (
<section className='mb-[50px] md:mb-[100px]'>
         {/* heading */}
         <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-myBlackHead">
        Our Catogeries
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* catogries */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/*1st catogery tops*/}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={"/"}>
          <Image src={sweater}
           alt='tops' 
           height={350} 
           width={350}
           className='rounded-xl duration-500 group-hover:scale-125'
           />
           <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-myWhite text-center w-full'>
<h1  className='uppercase'>tops</h1>
</div>
<div className='block lg:hidden absolute bottom-10  scroll-m-20 text-5xl font-extrabold tracking-tight  bg-myBlackHead/70 text-myWhite text-center w-full'>
<h1  className='uppercase'>tops</h1>
           </div>
           </Link>
        </div>
  {/*2nd catogery pants*/}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={"/"}>
          <Image src={graypant}
           alt='pants' 
           height={350} 
           width={350}
           className='rounded-xl duration-500 group-hover:scale-125'
           />
           <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-myWhite text-center w-full'>
<h1  className='uppercase'>pants</h1></div>
<div className='block lg:hidden absolute bottom-10  scroll-m-20 text-5xl font-extrabold tracking-tight  bg-myBlackHead/70 text-myWhite text-center w-full'>
<h1  className='uppercase'>pants</h1>
           </div>
           </Link>
        </div>
  {/*3rd catogery shoes*/}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={"/"}>
          <Image src={leporedprintedsidezipboots}
           alt='shoes' 
           height={350} 
           width={350}
           className='rounded-xl duration-500 group-hover:scale-125'
           />
           <div className='hidden lg:block  absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-myWhite text-center w-full'>
<h1  className='uppercase'>shoes</h1>
           </div>
           <div className='block lg:hidden absolute bottom-10  scroll-m-20 text-5xl font-extrabold tracking-tight  bg-myBlackHead/70 text-myWhite text-center w-full'>
<h1  className='uppercase'>shoes</h1>
           </div>
           </Link>
        </div>
  {/*4th catogery accessories*/}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
        <Link href={"/"}>
          <Image src={accessories}
           alt='accessories' 
           height={350} 
           width={350}
           className='rounded-xl duration-500 group-hover:scale-125'
           />
           <div className='absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-myWhite text-center w-full'>
<h1  className='uppercase'>Accessories</h1>
           </div>
           <div className='block lg:hidden absolute bottom-10  scroll-m-20 text-5xl font-extrabold tracking-tight  bg-myBlackHead/70 text-myWhite text-center w-full'>
<h1  className='uppercase'>Accessories</h1>
           </div>
           </Link>
        </div>


      </div>
</section>
  )
}

export default Catogery;


