import React, { useState } from "react";
import clutch from "../assets/form-logos/clutch.png";
import google from "../assets/form-logos/google.png";
import trustpilot from "../assets/form-logos/trustpilot.png";
import usa from "../assets/form-logos/usa.png";

const Form = () => {
  const [country,setCountry]=useState('usa');
  const handlechange = (e) => {
  setCountry(e.target.value);
};
  return (
    <section className="w-full flex justify-center py-8 px-4">
      {/* container */}
      <div className=" md:w-[70%] flex md:flex-row flex-wrap rounded-2xl">

  
        <div className="p-10 flex flex-col items-center md:w-[35%] w-[100%] gap-6 bg-[#094AC6] md:rounded-l-2xl ">
          <div className="bg-[#6F8FFF]/80  p-6 rounded-xl text-white w-[90%]">
            <p className="text-sm opacity-90">Call Us</p>

            <h2 className="text-2xl font-bold mt-2">
              +1-585-566-2070
            </h2>

            <p className="text-sm mt-2 opacity-90">
              UNITED STATES
            </p>
          </div>

      
          <div className="bg-white rounded-lg py-4 flex justify-center items-center w-[90%]">
            <img src={google} alt="google review" className="h-9 object-contain" />
          </div>

          <div className="bg-white rounded-lg py-4 flex justify-center items-center w-[90%]">
            <img src={clutch} alt="clutch review" className="h-9 object-contain" />
          </div>

          <div className="bg-white rounded-lg py-4 flex justify-center items-center w-[90%]">
            <img src={trustpilot} alt="trustpilot review" className="h-9 " />
          </div>

        </div>

        {/* rightdiv */}
        <div className="p-7 text-white flex flex-col justify-center items-center md:rounded-r-2xl bg-[#0B56E4] flex-1 ">

          <h2 className="md:text-[22px] text-[17px] font-semibold mb-8 md:pr-9">
            Please fill in the form and let’s chat understand
            how we can help you better
          </h2>

          <form className="space-y-3">

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="First name*"
                className="bg-[#738FFF] h-[50px] px-3 rounded-lg outline-none placeholder-white/70"
              />

              <input
                type="text"
                placeholder="Last name*"
                className="bg-[#738FFF] h-[50px] px-3 rounded-lg outline-none placeholder-white/70"
              />
            </div>

            <div className="flex gap-3">

              <div className="flex items-center justify-center bg-[#738FFF] px-3 cursor-pointer rounded-lg">
                <img src={usa} alt="countries" className="w-5" />
                <select
                onChange={handlechange}
                className="w-[30px] cursor-pointer bg-[#738FFF] outline-none">
                <option></option>
              <option>india</option>
               </select>
              </div>
               
              <input
                type="text"
                 readOnly
                className="flex-1 bg-[#738FFF] h-[50px] px-4 rounded-lg outline-none placeholder-white/70"
                value={country}
                
              />

            </div>

      
            <input
              type="email"
              placeholder="Email*"
              className="w-full bg-[#738FFF] h-[50px] px-4 rounded-lg outline-none placeholder-white/70"
            />

            <select className="w-full bg-[#738FFF] h-[50px] px-4 rounded-lg outline-none text-white">
              <option>Select Services*</option>
              <option>Web Development</option>
              <option>Ecommerce Development</option>
              <option>UI/UX Design</option>
            </select>

            <textarea
              rows="3"
              placeholder="Message*"
              className="w-full bg-[#738FFF] p-4 rounded-lg outline-none placeholder-white/70"
            />

           
            <button
              type="submit"
              className="w-full bg-white text-[#0B56E4] h-[50px] rounded-full font-bold mt-2
              cursor-pointer "
            >
              let's connect →
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;