import React from 'react'
import { FaArrowRight} from "react-icons/fa6";
const GetStartedNow = () => {
    return (
        <div>
            <section className='w-full py-10  bg-[#6E53E2] '>
                <div className=' flex flex-col items-center md:gap-6  gap-2'>
                    <h1 className='md:text-[29px] text-[19px] font-[600] text-white max-w-[600px] text-center'>Ready to take your <span className='font-[800]'> e-commerce</span> business to the next level?</h1>
                    <p className='md:text-[20px] text-[15px]  text-white '>
                        Let’s build your dream BigCommerce store today!"
                    </p>
                    <button className='text-[#3464FD] font-[600] bg-white items-center justify-center md:w-[200px] p-4 flex rounded-full gap-3 cursor-pointer '>
                     Get Started Now <FaArrowRight size={14} />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default GetStartedNow
