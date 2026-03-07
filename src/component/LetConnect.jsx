import React from 'react'
import { FaArrowRight} from "react-icons/fa6";
const LetConnect = () => {
  return (
    <section className='w-full py-10 flex justify-center items-center bg-[#6E53E2] '>
      <div className='w-full flex flex-col justify-center items-center gap-6 '>
        <h1 className='md:text-[30px] text-[20px] text-white'>Start Your BigCommerce Project Now!</h1>
        <button className='text-[#3464FD] font-[600] bg-white items-center justify-center w-[200px] p-4 flex rounded-full gap-3 cursor-pointer '>
             LET'S CONNECT <FaArrowRight size={14} />
        </button>
      </div>
    </section>
  )
}

export default LetConnect
