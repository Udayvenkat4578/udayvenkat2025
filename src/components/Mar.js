import React from 'react';
import Marquee from "react-fast-marquee";

const Mar = () => {
  return (
    <div className='pb-11'>
      {/* First Marquee */}
      <Marquee pauseOnHover speed={25}>
        <div>
          <div className='grid grid-cols-11 sm:gap-x-4 gap-x-5'>        
            <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ Adobe XD ✦</p></div>
            <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ User Experience Design ✦</p></div>
            <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ Figma ✦</p></div>
            <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ React Js ✦</p></div>
            <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ Express Js ✦</p></div>
            <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ Node Js ✦</p></div>
            <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ Prototyping ✦</p></div>
            <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ Next Js ✦</p></div>
            <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ MongoDB ✦</p></div>
            <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ Git ✦</p></div>
            <div className='mr-4 cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ Firebase ✦</p></div>
          </div>
        </div>
      </Marquee>

      {/* Second Marquee */}
      <div>
        <Marquee pauseOnHover speed={25}>
          <div className='pt-3 pb-5'>
            <div className='grid grid-cols-11 sm:gap-x-4 gap-x-5'>        
              <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ HTML5 ✦</p></div>
              <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ TailwindCSS ✦</p></div>
              <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ User Interface Design ✦</p></div>
              <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ JavaScript ✦</p></div>
              <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ REST API ✦</p></div>
              <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ GitHub ✦</p></div>
              <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ Context API ✦</p></div>
              <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ Redux ✦</p></div>
              <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ Browser Router ✦</p></div>
              <div className='cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ Axios ✦</p></div>
              <div className='mr-4 cursor-default transition-all ease-in-out text-[#a1aecc] font-regular text-[15px] border-2 px-2 text-center border-[#a1aecc] font-cyberpunk'><p>✦ UX Research ✦</p></div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Mar;
