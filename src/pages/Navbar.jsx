import React from 'react'
import kushellogo from '../assets/logo/Kds logo 1.png'
import { IoIosCall } from "react-icons/io";
const Navbar = () => {
    return (
        <nav className='w-full h-[140px] flex justify-between items-center'>
            <img src={kushellogo} className='w-[260.1728515625px]  h-[82px] ml-[135px] ' />
            <div className='flex justify-between items-center gap-4 mr-[135px]'>
                <button className='w-[194px] h-[50px] cursor-pointer bg-[#3C83CB] text-[#FFFFFF] font-[700] text-[18px]  rounded-full flex items-center gap-2 p-5 '>
                    <IoIosCall size={25} />CALL NOW</button>

                <button className='w-[310px] h-[50px] cursor-pointer font-semibold text-[24px] border-2 rounded-full border-[#3C83CB] text-[#3C83CB] '>Book Free Consulation</button>
            </div>

        </nav>
    )
}

export default Navbar
