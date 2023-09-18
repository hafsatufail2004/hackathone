import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { Button } from '../ui/button';
import { FaHeart ,FaShoppingCart } from "react-icons/fa"

const BestSellingCard = (
    {src,alt,title,description,price}:
    {
        src:StaticImageData | string,
        alt:string,
        title:string,
        description:string,
        price:number,
    }) => {
  return (
    <div className="w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl group relative">
    {/* image div */}
  <div className='block h-[23rem] rounded-md overflow-hidden'>
    <Image
     src={src}
      alt={alt}
       width={400} 
       height={400}
        />
  </div>
  {/* heading */}
    <div className="mt-4 text-left">
      <h2 className="scroll-m-20 border-b pb-2 text-lg text-myBlackHead font-sans font-semibold tracking-tight transition-colors first:mt-0 line-clamp-1">{title}</h2>
      <p className="scroll-m-20 mt-2 text-sm text-myBlackPara font-sans font-semibold tracking-tight line-clamp-1">{description}</p>
      <p className="scroll-m-20 mt-2 tracking-tight text-base text-myBlackHead font-sans font-semibold line-clamp-1">${price}</p>
    </div>
    {/* button div*/}
   <div className='flex gap-3 justify-center'>
   <Button className='group bg-myBlackHead scroll-m-20 mt-2 rounded-xl shadow-xl tracking-tight text-xs font-semibold hover:bg-transparent text-myWhite hover:text-myOrange duration-300 bottom-2 right-2 absolute'>
      <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300"/>
      Add to Cart
      </Button>
  
      <Button className='group bg-myBlackHead scroll-m-20 mt-2 rounded-xl shadow-xl tracking-tight text-xs font-semibold hover:bg-transparent text-myWhite hover:text-myOrange duration-300 bottom-2 right-2 absolute'>
    <FaHeart  className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300 "/>
    Buy Now
    </Button>
   </div>
  </div>
  
  )
}

export default BestSellingCard;

