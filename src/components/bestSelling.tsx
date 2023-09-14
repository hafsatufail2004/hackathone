import React from 'react'
import BestSellingCard from './shared/bestSellingCard';

const BestSelling = () => {
  const bestSell = [
    {
      src:"../../../public/" ,
      alt:"women gray button shirt",
      title:"Gray  Button Shirt",
      description:"Gray  Button Shirt",
      price:150,
    }
  ]
  return (
    <section className='mb-[50px] md:mb-[100px]'>
    {/* heading */}
    <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl text-myBlackHead">
     Best Selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
   
{/* best selling products */}
<div className='flex flex-wrap justify-center gap-5'></div>



</div>
      </section>
  )
}

export default BestSelling;

