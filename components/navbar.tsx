import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemo } from "./navlinks";
import logo from "../public/logo.webp"
import Image from "next/image";

const Navbar = () => {
  return ( <section>
  <div className="navbar bg-myWhite">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="p-0 text-2xl lg:hidden">
    <GiHamburgerMenu/>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link href="/">Home</Link></li>
      <li tabIndex={0}>
        <details>
          <summary>Women</summary>
          <ul className="p-2 ">
            <li>
                <Link href="/tops">Tops</Link>
            </li>
            <li>
                <Link href="/pants">Pants</Link>
            </li>
            <li>
                <Link href="/shoes">Shoes</Link>
            </li>
            <li>
                <Link href="/accessories">Accessories/Jewelry</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="/contact">Contacts</Link>
        </li>
        <li>
        <Link href="/about">About</Link>
        </li>
    </ul>


    </div>
{/* image logo */}
<Link href="/"> <Image src={logo} alt="logo" width={100} height={100} className="hidden lg:block pl-4"/></Link>

  </div>
  <div className="navbar-center ">
    <Image src={logo} alt="logo" width={70} height={70} className="block lg:hidden"/>
   {/* option menu navbar */}
<div className="hidden lg:flex">
    <NavigationMenuDemo/> 
</div>

  </div>
  <div className="navbar-end">
    
{/* cart */}
 <div className="dropdown dropdown-end">
      <label tabIndex={0} className="pr-2 md:pr-4 cursor-pointer group group-hover:text-myOrange duration-300">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5 md:h-7 md:w-7 group-hover:text-myOrange duration-300"
           fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item text-myBlackHead font-semibold group-hover:text-myWhite group-hover:bg-myBlackPara duration-300">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-44 md:w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-md md:text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
      </div>

     </div>
</div>
</section>

  )}

export default Navbar;


