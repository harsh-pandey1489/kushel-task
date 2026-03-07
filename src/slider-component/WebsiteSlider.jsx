import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const WebsiteSlider = ({ nextSlide, prevSlide }) => {
    const  [active,setActive]=useState()
  return (
    <section className="w-full bg-[#FAFAFA] h-[250px] flex items-center">
      
      <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between px-6">
     
        <div>
          <h1 className="text-[58px] font-[500] text-[#111]">
            Our BigCommerce Work
          </h1>

          <p className="text-[28px] text-black">
            Recent Websites We've Launched
          </p>
        </div>

      
     <div className="flex gap-4">
          
   <button
    onClick={() => {
              prevSlide();
              setActive("left");
            }}
 className={`w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer 
            ${active === "left"
              ? "bg-[#0B56E4] text-white"
              : "border border-[#0B56E4] text-black"}`}
>
  <FaArrowLeft size={14} />
</button>

<button
onClick={() => {
              nextSlide();
              setActive("right");
            }}
            className={`w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer 
            ${active === "right"
              ? "bg-[#0B56E4] text-white"
              : "border border-[#0B56E4] text-black"}`}
>
  <FaArrowRight size={14} />
</button>
        </div>

      </div>

    </section>
  );
};

export default WebsiteSlider;