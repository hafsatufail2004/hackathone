import Image from 'next/image';
import React from 'react'
import payback from "../public/payback.webp"
import service from "../public/service1.webp"
import van from "../public/vans.webp"

const Services = () => {
  return (
    <section className="body-font mb-[50px] md:mb-[100px]">
    <div className="container px-5 mx-auto">
      {/* heading */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-myBlackHead">
        Our Services
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
{/* free delivery */}
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
         <Image src={van} alt='delivery' width={100} height={100} className='w-20 h-20'/>
          </div>
          <div className="flex-grow">
            <h2 className="capitalize scroll-m-20 text-lg group-hover:text-myOrange duration-300 font-bold tracking-tight lg:text-xl text-myBlackHead mb-1 md:mb-3">
             Free Delivery
            </h2>
            <p className="line-clamp-2 scroll-m-20 text-md font-semibold tracking-tight transition-colors text-myBlackPara group-hover:text-myBlackPara/70 duration-300 ">
           Free Delivery on Order Above $1000
            </p>
          </div>
        </div>
      
    
      {/* 24/7 services*/}
        <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
         <Image src={service} alt='delivery' width={100} height={100} className='w-20 h-20'/>
          </div>
          <div className="flex-grow">
            <h2 className="capitalize scroll-m-20 text-lg group-hover:text-myOrange duration-300 font-bold tracking-tight lg:text-xl text-myBlackHead mb-1 md:mb-3">
          24/7 Customer Services
            </h2>
            <p className="line-clamp-2 scroll-m-20 text-md font-semibold tracking-tight transition-colors text-myBlackPara group-hover:text-myBlackPara/70 duration-300 ">
            For Queries and Questions Feel Free to Contact
            </p>
          </div>
        </div>
   
      {/* money payback*/}
    <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
         <Image src={payback} alt='delivery' width={100} height={100} className='w-20 h-20'/>
          </div>
          <div className="flex-grow">
            <h2 className="capitalize scroll-m-20 text-lg group-hover:text-myOrange duration-300 font-bold tracking-tight lg:text-xl text-myBlackHead mb-1 md:mb-3">
            Money Back Guarantee
            </h2>
            <p className="line-clamp-2 scroll-m-20 text-md font-semibold tracking-tight transition-colors text-myBlackPara group-hover:text-myBlackPara/70 duration-300 ">
            Get Money Back Guarantee on Damage Products
            </p>
          </div>
        </div>
    


</div>
    </div>
  </section>
  
  )
}

export default Services;


