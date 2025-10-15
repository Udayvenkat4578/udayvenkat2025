import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'


const FigmaSection = () => {
      useEffect(()=>{
        AOS.init({duration:1000})
         window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])
    
  return (
    <section className=" overflow-x-hidden w-full px-4 py-10">
      {/* Heading */}
      <h2         data-aos="zoom-in"
 className="mt-2 pb-3 text-[#5ce8cb] font-cyberpunk font-bold cursor-default text-center text-[24px] sm:text-[36px]">
        My Creative Playground
      </h2>

      {/* Grid for Figma embeds */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-6">
        {/* My Designs */}
        <div className="flex flex-col items-center">
          <h3 className="mb-3 text-[#5ce8cb] font-cyberpunk text-lg sm:text-xl"              data-aos="fade-right"
>
            Tools I Use
          </h3>
          <iframe
            className="w-full h-[300px] rounded-2xl shadow-lg"
            src="https://embed.figma.com/board/TaD5dWv15s8hCoucp0eczR/Untitled?node-id=0-1&embed-host=share"
            allowFullScreen
             data-aos="fade-right"
          ></iframe>
        </div>

        {/* Tools I Use */}
        <div className="flex flex-col items-center">
          <h3 className="mb-3 text-[#5ce8cb] font-cyberpunk text-lg sm:text-xl"              data-aos="fade-right"
>
            My Designs
          </h3>
          <iframe
            className="w-full h-[300px] rounded-2xl shadow-lg"
            src="https://embed.figma.com/design/pVOOx0ccNf0KWmDqL1Aqqs/Designs?node-id=0-1&embed-host=share"
            allowFullScreen
                         data-aos="fade-left"

          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FigmaSection;
