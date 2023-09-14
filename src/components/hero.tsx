import React from 'react'
import { Button } from './ui/button';
import { GiShoppingBag } from "react-icons/gi";

const Hero = () => {
  return ( 
    <section className='mb-[50px] md:mb-[100px]'>
      <div className="hero min-h-[80vh] min-w-[90vw] custom-img bg-fixed bg-center bg-no-repeat">
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">Futuristic <span className='text-myOrange'>Clothes</span></h1>
      <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">Upgrade your Wardrobe with Sleek & Stylish Apparels and Top-Notch Shoes.</p>
     
      <Button className='outline outline-offset-2 outline-1 text-myWhite group hover:rounded-xl hover:text-myOrange duration-300 hover:outline-myOrange  '>
      <GiShoppingBag className="mr-2 h-4 w-4 md:h-6 md:w-6 group-hover:text-myOrange duration-300 group-hover:animate-bounce" /> Shop Now
    </Button>

    </div>
  </div>
</div>
    </section>
  
  )
  }

export default Hero;

