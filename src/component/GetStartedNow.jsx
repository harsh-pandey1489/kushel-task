import React from 'react'
import { FaArrowRight} from "react-icons/fa6";
const GetStartedNow = () => {
    return (
        <div>
            <section className='w-full py-10 flex justify-center items-center bg-[#6E53E2] '>
                <div className='w-full flex flex-col justify-center items-center gap-6 '>
                    <h1 className='md:text-[29px] text-[20px] font-[600] text-white max-w-[600px] text-center'>Ready to take your <span className='font-[800]'> e-commerce</span> business to the next level?</h1>
                    <p className='text-[20px]  text-white '>
                        Let’s build your dream BigCommerce store today!"
                    </p>
                    <button className='text-[#3464FD] font-[600] bg-white items-center justify-center w-[200px] p-4 flex rounded-full gap-3 cursor-pointer '>
                     Get Started Now <FaArrowRight size={14} />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default GetStartedNow
