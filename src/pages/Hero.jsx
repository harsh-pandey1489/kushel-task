import React from "react";
import picture from "../assets/images/pexels-shoper.jpg";
import phoneLogo from "../assets/logo/telephone.png";
import whatsapp from "../assets/logo/whatsapp.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-140px)] flex items-center">

   
      <img
        src={picture}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#0f4c4c]/80"></div>

      <div className="relative mt-10 md:mt-0 max-w-7xl mx-auto w-full px-6 flex flex-col lg:flex-row items-center justify-between gap-12">

        <div className="text-white max-w-[600px] text-center lg:text-left">

          <h1 className="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.3] mb-3 md:mb-6">
            Custom{" "}
            <span className="bg-[#FFD339] text-black px-2 py-1 rounded-md">
              BigCommerce
            </span>{" "}
            Development | Scalable, Secure & Conversion-Driven
          </h1>

          <p className="text-[16px] md:text-[20px] lg:text-[22px] font-[500] leading-[30px] mb-8">
         From stunning store designs to seamless integrations, we help
            businesses like yours unlock the full potential of BigCommerce for
           faster growth and higher sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start">

            <div className=" flex  w-[210px] md:max-w-[300px] md:p-5 p-3 items-center gap-2 justify-center gap-2 bg-white rounded-full shadow">
              <img src={phoneLogo} className="w-8" />
              <span className="text-black font-medium text-[14px] md:text-[14px]">
                +1-585-566-2070
              </span>
            </div>

            <div className=" flex  w-[210px] md:max-w-[300px] md:p-5 p-3 items-center justify-center gap-3  bg-[#49C858] rounded-full text-white font-semibold text-[16px] md:text-[18px] shadow">
              <img src={whatsapp} className="w-8" />
              Whatsapp
            </div>

          </div>
        </div>


        <div className="relative md:mt-20 pb-7 w-full max-w-[540px]  ">

       
          <div className="absolute -top-3 md:-left-[10px] -left-[7px] md:w-full w-[104%]  h-[170px]  bg-[#FFD339] rounded-2xl"></div>

          <div className="relative bg-white rounded-2xl p-8 shadow-xl w-full max-w-[520px]">

            <h2 className="md:text-[24px] text-[18px] font-medium text-center mb-6">
              Looking for <span className="font-bold">E-Commerce</span> Development
              Services?
            </h2>

            <form className="space-y-4 ">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 p-3 rounded-md"
              />

              <input
                type="email"
                placeholder="Email*"
                className="w-full border border-gray-300 p-3 rounded-md"
              />

              <div className="flex gap-3">
                <select className="border border-gray-300 p-3 rounded-md w-[120px]">
                  <option>USA (+1)</option>
                </select>

                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="border border-gray-300 p-3 rounded-md flex-1"
                />

              </div>

              <select className="w-full border border-gray-300 p-3 rounded-md">
                <option>Services</option>
              </select>

              <textarea
                rows="4"
                placeholder="To help us understand better, enter a brief description about your project."
                className="w-full border border-gray-300 p-3 rounded-md"
              />

              <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold text-[18px]">
                SUBMIT
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;