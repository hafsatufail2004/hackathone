import React from 'react'

const Promotion = () => {
  return (
   <section className='mb-[50px] md:mb-[100px]'>
    {/* heading */}
    <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-myBlackHead">
        Our Services
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
 {/* promotion start */}
 <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 min-w-[90vw]'>
{/* 1st child  */}
        <div className="hero h-[25rem] promos-1">
  <div className="hero-overlay bg-opacity-70 grid justify-center items-center">
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="scroll-m-20 text-5xl font-sans font-bold tracking-tight mb-2 text-myWhite">
        GET UPTO <span className='text-myOrange'>60%</span> OFF
        </h1>
      <p className="scroll-m-20 text-xl font-sans font-medium text-myWhite tracking-tight">Flash Sale,get upto 60% off on the Seasonal Variants.</p>
     </div>
  </div>
</div>
</div>
  {/* 2nd child */}
        <div className="hero h-[25rem] promos-2 ">
  <div className="hero-overlay bg-opacity-70 grid justify-center items-center">
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="scroll-m-20 text-5xl font-sans font-bold tracking-tight mb-2 text-myWhite">
        GET UPTO <span className='text-myOrange'>30%</span> OFF
        </h1>
      <p className="scroll-m-20 text-xl font-sans font-medium text-myWhite tracking-tight">Flash Sale,get upto 30% off on New Jewelry Arrival.</p>
     </div>
  </div>
</div>
</div>
{/* promotion end */}

      </div>
   </section>
  )
}

export default Promotion;


