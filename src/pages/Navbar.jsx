import React, { useState } from "react";
import kushellogo from "../assets/logo/Kds logo 1.png";
import { IoIosCall } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed  w-full bg-white z-50 lg:py-4 py-10 bg-white flex items-center  ">

      <div className="max-w-[1720px] mx-auto w-full md:px-20 px-10  flex justify-between items-center">

        <img
          src={kushellogo}
          className="w-[140px] md:w-[220px] lg:w-[260px]"
        />

        <div className="hidden md:flex  items-center gap-3 md:gap-4">

           <a
             href="tel:+15855662070" className="flex items-center cursor-pointer gap-2 bg-[#3C83CB] text-white font-semibold text-[10px] lg:text-[16px] px-3 md:px-6 py-2 md:py-3 rounded-full">
            <IoIosCall size={20} />
            CALL NOW
          </a>

          <button className="cursor-pointer font-semibold text-[12px] lg:text-[16px] border-2 border-[#3C83CB] text-[#3C83CB] px-3 md:px-6 py-2 md:py-3 rounded-full">
            Book Free Consultation
          </button>
        </div>



        <button
          className="md:hidden cursor-pointer text-2xl "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>


        {menuOpen && (
          <div className="  absolute top-full left-0 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col justify-center items-center gap-4 p-9">

              <a
                href="tel:+15855662070"
                className="flex items-center  gap-2 bg-[#3C83CB] text-white px-12 py-3 font-semibold  rounded-full">
                <IoIosCall size={18} />
                CALL NOW
              </a>

              <button className="border-2 border-[#3C83CB] text-[#3C83CB] font-semibold px-4 py-3 rounded-full">
                Book Free Consultation
              </button>

            </div>
          </div>
        )}

      </div>

    </nav>
  );
};

export default Navbar;