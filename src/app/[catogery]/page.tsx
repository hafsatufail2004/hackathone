import React from 'react'
import BestSellingCard from '../../../components/shared/bestSellingCard';

const Catogery = () => {
  const bestSell = [
    {
      src:"/women-gray-button-shirt.webp" ,
      alt:"women gray button shirt",
      title:"Gray  Button Shirt",
      description:"Best Quality Tops for Women",
      price:200,
      catogery:"tops",
      slug:"gray-button-shirt",
    },
    {
      src:"/brown-silk-top0.jpeg",
      alt:"women brown silk top",
      title:"Brown Silk Top",
      description:"Elegant Tops For Women",
      price:170,
      catogery:"tops",
      slug:"brown-silk-top",
    },
    {
      src:"/white-glittered-peep-toe-heeled-shoes.avif" ,
      alt:"White Glittered Peep Toe Heels",
      title:"White Glittered Peep Toe Heels",
      description:"Top Notch Shoes For Women",
      price:150,
      catogery:"shoes",
      slug:"white-glittered-peep-toe-heeled",
    },
  ]
  return (
  <section className='mb-[50px] md:mb-[100px]'>
      {/* heading */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold capitalize tracking-tight lg:text-4xl text-myBlackHead">
    Tops
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 mt-2 rounded-full bg-myOrange inline-flex" />
        </div>
   </div>
   {/* catogery start here */}
   <div className='flex flex-wrap justify-center gap-5'>

{
  bestSell.map((items,i)=>(
    <BestSellingCard
    key={i}
    src={items.src}
    alt={items.alt} 
    title={items.title}
    description={items.description} 
    price={items.price}
    catogery={items.catogery}
    slug={items.slug}
    />
  ))
}
</div>
  </section>
  )
}

export default Catogery;


