import React, { useState } from "react";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
import topbrass from "../assets/Slider-logo/topbrass.png";
import siteAndscope from "../assets/Slider-logo/siteAndscope.svg";
import KickEzz from "../assets/Slider-logo/KicEzz.svg";
import madFish from "../assets/Slider-logo/madFish.svg";
import laptop from "../assets/sliderImage/mackbook.png";
import AAz from "../assets/Slider-logo/2AA.png"
import arrow from "../assets/logo/Mask group.svg"
import laptop2 from "../assets/sliderImage/macbook2.svg";
import laptop3 from "../assets/sliderImage/Macbook3.svg";
import laptop4 from "../assets/sliderImage/Macbook4.svg";
import laptop5 from "../assets/sliderImage/macbookMobile.svg";
import active1 from "../assets/Ecommerce-image/topbrass (2).svg"

const sliderData = [
  {
    logo: topbrass,
    color:"black",
    content:" Magento to BigCommerce Migration, Data Migration, BigCommerce store Design, Custom Theme Development, SEO, Integration.",
    title: "Top Brass Tactical",
    industry: "Military & tactical industry",
    image: laptop,
    conversions: "+85%",
    revenue: "+58%",
    aov: "+6%",
  },

  {
    logo: siteAndscope,
     color:"black",
    title: "2nd Amendment Armory",
    content:"Magento to BigCommerce Migration, Data Migration, BigCommerce store Design, Custom Theme Development, SEO, Integration.",
    industry: "Optics industry",
    image: laptop2,
    conversions: "+103%",
    revenue: "+40%",
    aov: "+5%",
  },

  {
    logo: KickEzz,
    title: "Black Rhino Concealment",
      color:"black",
    content:"  Magento to BigCommerce Migration, Data Migration, BigCommerce store Design, Custom Theme Development, SEO, Integration.",
    industry: "Shooting accessories",
    image: laptop3,
    conversions: "+60%",
    revenue: "+38%",
    aov: "+4%",
  },

  {
    logo: madFish,
     color:"black",
    title: "MadFish",
    content:"What We Did: Magento to BigCommerce Migration, Data Migration, BigCommerce store Design, Custom Theme Development, SEO, Integration.",
    industry: "Fishing industry",
    image: laptop4,
    conversions: "+105%",
    revenue: "+60%",
    aov: "+3%",
  },
  {
    logo: AAz,
    content:"What We Did: Magento to BigCommerce Migration, Data Migration, BigCommerce store Design, Custom Theme Development, SEO, Integration.",
    title: "MadFish",
    industry: "Fishing industry",
    image: laptop5,
    conversions: "+55%",
    revenue: "+30%",
    aov: "+3%",
  },
];

const BigCommerceSlider = ({ activeIndex, setActiveIndex }) => {


  return (
    <section className="w-full bg-[#EEF4EC] py-20">

      <div className="max-w-[1200px] mx-auto">

    

        <div className="flex flex-wrap gap-6 md:gap-16 border-b pb-4 mb-12 justify-center">

          {sliderData.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer   relative pb-2"
            >
              <img src={item.logo} className={`w-[180px] h-[100px]   bg-${item.color}`} />

              {activeIndex === index && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600"></div>
              )}
            </div>
          ))}

        </div>

       
        <div className="flex items-center justify-between ">

          
          <div className="w-[45%]">
         <div className="w-full max-w-[520px] h-[320px] flex items-center justify-center overflow-hidden">
  <img
    key={activeIndex}
    src={sliderData[activeIndex].image}
    className="max-h-full object-contain transition-all duration-500 ease-in-out translate-x-0"
    alt="laptop"
  />
</div>
          </div>
    <div className="flex mr-5 ">
  <button className="bg-gray-100 w-[70px] h-[60px] text-[20px]">View</button>
  <button className="bg-[#444951] w-[70px] h-[60px] flex justify-center items-center text-white ">
    <img src={arrow}/>
  </button>
    </div>
         
          <div className="w-[45%]">
     
            <h2 className="text-[36px] font-sem0ibold mb-4">
              {sliderData[activeIndex].title}
            </h2>

            <div className="flex gap-3 mb-6">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                B2B
              </span>

              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {sliderData[activeIndex].industry}
              </span>
            </div>

            <p className="text-black- mb-6">
            <span className="font-[500]">  What We Did:</span> 
            <span>{sliderData[activeIndex].content}</span>
            </p>

            <div className="space-y-3">

              <div className="flex justify-between border-b pb-2">
                <span>Increased Conversions</span>
                <span>{sliderData[activeIndex].conversions}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Increased Revenue</span>
                <span>{sliderData[activeIndex].revenue}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Increased AOV</span>
                <span>{sliderData[activeIndex].aov}</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BigCommerceSlider;