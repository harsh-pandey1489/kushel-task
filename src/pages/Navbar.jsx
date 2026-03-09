import React from "react";
import kushellogo from "../assets/logo/Kds logo 1.png";
import { IoIosCall } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="fixed  w-full bg-white z-50 h-[100px] md:h-[130px] bg-white flex items-center  ">
      
      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">

        <img
          src={kushellogo}
          className="w-[120px] md:w-[220px] lg:w-[260px]"
        />

        <div className="flex items-center gap-3 md:gap-4">

          <button className="flex items-center cursor-pointer gap-2 bg-[#3C83CB] text-white font-semibold text-[8px] md:text-[16px] px-3 md:px-6 py-2 md:py-3 rounded-full">
            <IoIosCall size={20} />
            CALL NOW
          </button>

          <button className="cursor-pointer font-semibold text-[8px] md:text-[16px] border-2 border-[#3C83CB] text-[#3C83CB] px-3 md:px-6 py-2 md:py-3 rounded-full">
            Book Free Consultation
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;