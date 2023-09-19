import React from 'react'
import BestSellingCard from './shared/bestSellingCard';


const BestSelling = () => {
  const bestSell = [
    {
      src:"/women-gray-button-shirt" ,
      alt:"women gray button shirt",
      title:"Gray  Button Shirt",
      description:"Best Quality Tops for Women",
      price:200,
    },
    {
      src:"/brown-silk-top0" ,
      alt:"women brown silk top",
      title:"Brown Silk Top",
      description:"Elegant Tops For Women",
      price:170,
    },
    {
      src:"/white-glittered-peep-toe-heeled-shoes" ,
      alt:"White Glittered Peep Toe Heels",
      title:"White Glittered Peep Toe Heels",
      description:"Top Notch Shoes For Women",
      price:150,
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
        </div>
        
{/* best selling products */}
<div className='flex flex-wrap justify-center gap-5'>
{
  bestSell.map((items,i)=>(
    <BestSellingCard 
    key={i}
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

