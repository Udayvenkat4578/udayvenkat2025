import React from "react";
import { Link, Outlet, } from "react-router-dom";
import brush from '../Assets/brush.png'
import code from '../Assets/code.png'
import research from '../Assets/research.png'
import exp from '../Assets/exp.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Navbar from "../Gcomponents/Navbar";
import comic4 from '../Assets/comic4.webp'
import Skill1 from '../Gcomponents/Skill1'
import Footer from "./Footer";

function Products() {
  
  useEffect(()=>{
    AOS.init({duration:1000})
     window.scrollTo({ top: 0, behavior: 'smooth' });
},[])
        return (
          <div>
                    <div className='fixed inset-0'>
                <img className="object-cover w-screen h-screen  opacity-10   " src={comic4} alt="background" />
                </div>

                <div className='z-10 relative'>
        <Navbar/>
        </div>
    <div className="pt-2 px-9 " data-aos="fade-up"  data-aos-offset="300"
    data-aos-easing="ease-in-out sm:h-full h-screen">
      <div><p className="text-center pt-8 font-semibold font-cyberpunk text-[36px] cursor-default sm:font-bold text-[#5ce8cb] ">Design. Code. Repeat</p>
      <p>        <p className="text-center font-cyberpunk text-[#aab7d7]"> An evolving journey through code, design, and everything in between</p>
</p>
      </div>
<div className=" ml-11 pl-1 text-[#aab7d7] font-bold text-xl font-cyberpunk"><p>#tags</p></div>
<div className="grid grid-cols-1 sm:grid-cols-4 px-11 pl-11 pr-11 gap-5 sm:gap-11 mt-2 "
     >
<div className="grid grid-cols-1 place-items-center border-2 py-4  border-[#5ce8cb] rounded-md cursor-pointer transition-all ease-in-out hover:scale-110">
    <div><img className="h-8 w-8" src={brush} alt=''/></div>
    <div> <p className="text-[#aab7d7] font-medium sm:font-medium text-lg">Frontend Developer</p></div>
  </div>
  <div className="grid grid-cols-1 place-items-center border-2 py-4  border-[#5ce8cb] rounded-md cursor-pointer transition-all ease-in-out hover:scale-110">
    <div><img className="h-8 w-8" src={code} alt=''/></div>
    <div> <p className="text-[#aab7d7] font-medium sm:font-medium text-lg">MERN Stack Developer</p></div>
  </div>
  <div className="grid grid-cols-1 place-items-center border-2 py-4  border-[#5ce8cb] rounded-md cursor-pointer transition-all ease-in-out hover:scale-110">
    <div><img className="h-8 w-8" src={research} alt=''/></div>
    <div> <p className="text-[#aab7d7] font-medium sm:font-medium text-lg">Web Designer</p></div>
  </div>
  <div className="grid grid-cols-1 place-items-center border-2 py-4  border-[#5ce8cb] rounded-md cursor-pointer transition-all ease-in-out hover:scale-110">
    <div><img className="h-8 w-8" src={exp} alt=''/></div>
    <div> <p className="text-[#aab7d7] font-medium sm:font-medium text-lg">User Experience Designer</p></div>
  </div>


  
</div>
<Skill1/>
    </div>
    <Footer/>
    </div>
  );
}

export default Products;
