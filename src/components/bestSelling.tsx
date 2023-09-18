import React from 'react'
import BestSellingCard from './shared/bestSellingCard';

const BestSelling = () => {
  const bestSell = [
    {
      src:"/public/women-gray-button-shirt.webp" ,
      alt:"women gray button shirt",
      title:"Gray  Button Shirt",
      description:"Decent Shirt to Sleek Your Looks",
      price:150,
    },
    {
      src:"/public/brown-silk-top0.jpeg" ,
      alt:"women brown silk top",
      title:"Brown Silk Top",
      description:"Elegant Tops For Women",
      price:170,
    },
    {
      src:"/public/white-glittered-peep-toe-heeled-shoes.avif" ,
      alt:"White Glittered Peep Toe Heels",
      title:"White Glittered Peep Toe Heels",
      description:"Top Notch Shoes For Women",
      price:170,
    },
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

{
  bestSell.map((items)=>(
    <BestSellingCard 
    src={items.src}
    alt={items.alt} 
    title={items.title}
    description={items.description} 
    price={items.price}/>
  ))
}
</div>
      </section>
  )
}

export default BestSelling;

