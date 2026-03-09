import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import logo1 from '../assets/Services-logo/Mask1.png'
import logo2 from '../assets/Services-logo/Mask2.png'
import logo3 from '../assets/Services-logo/Mask3.png'
import logo4 from '../assets/Services-logo/Mask4.png'
import logo5 from '../assets/Services-logo/Mask5.png'
import logo6 from '../assets/Services-logo/Mask6.png'
import logo7 from '../assets/Services-logo/Mask7.png'
import logo8 from '../assets/Services-logo/Mask8.png'
import logo9 from '../assets/Services-logo/Mask9.png'

const data = [
    {
        logo: logo1,
        head: "Store Development & Setup",
        para: "we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers. Whether you're launching a new store or upgrading an existing one, we ensure a seamless, high-performing eCommerce experience."
    },
    {
        logo: logo2,
        head: "Custom Theme Development",
        para: "we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers. Whether you're launching a new store or upgrading an existing one, we ensure a seamless, high-performing eCommerce experience."
    },
    {
        logo: logo3,
        head: "Custom Development & Integrationst",
        para: "We design and develop custom BigCommerce themes tailored to your brand, ensuring a seamless, high-performance shopping experience that drives conversions and engagement."
    },
    {
        logo: logo4,
        head: "BigCommerce B2B Development",
        para: "we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers. Whether you're launching a new store or upgrading an existing one, we ensure a seamless."
    },
    {
        logo: logo5,
        head: "BigCommerce Platform Migration",
        para: "We design and develop custom BigCommerce themes tailored to your brand, ensuring a seamless, high-performance shopping experience that drives conversions and engagement."
    },
    {
        logo: logo6,
        head: "Multi-Storefront & Internationalization",
        para: "We design and develop custom BigCommerce themes tailored to your brand, ensuring a seamless, high-performance shopping experience that drives conversions and engagement."
    },
    {
        logo: logo7,
        head: "App & Plugin Development",
        para: "We design and develop custom BigCommerce themes tailored to your brand, ensuring a seamless, high-performance shopping experience that drives conversions and engagement."
    },
    {
        logo: logo8,
        head: "Headless Commerce & API Development",
        para: "we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers. Whether you're launching a new store or upgrading an existing one, we ensure a seamless."
    },
    {
        logo: logo9,
        head: "Headless eCommerce",
        para: "We design and develop custom BigCommerce themes tailored to your brand, ensuring a seamless, high-performance shopping experience that drives conversions and engagement."
    },
]
const Services = () => {
    return (
        <section className='w-full bg-white flex flex-col justify-center items-center'>
            <div className='max-w-[900px] flex  flex-col gap-2 text-center mt-10 '>
                <p className='text-[26px]'>Unlock Growth and Success with a</p>
                <h1 className='md:text-[33px] text-[22px] font-[500]'>Your full-service BigCommerce Development Partner</h1>
                <p className='md:text-[17px] text-[12px] md:w-[800px] '>We design, develop, and optimize BigCommerce websites to attract, engage, and convert loyal customers. Whether you need to migrate, build a custom store, integrate backend systems, or develop a custom app or headless solution, we’ve got you covered.</p>
            </div>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="w-full p-5 flex flex-col h-[350px] rounded-[6px] bg-[#55507F] text-white"
                        >
                            <div className='flex flex-row  justify-between items-center'>
                                <div className='w-[70px] h-[70px] border-2 border-[#6da6ff] rounded-xl
                                      shadow-[inset_0_0_15px_rgba(120,170,255,0.5),inset_0_0_5px_rgba(120,170,255,0.4)] flex items-center justify-center'>
                                    <img className='object-contain h-8 w-8' src={item.logo} />
                                </div>

                                <div className='w-[30px] h-[30px]'><span>0</span>{index + 1}</div>
                            </div>

                            <h1 className='text-[21px] font-[600] text-gray-200  py-4'>{item.head}</h1>
                            <p className='text-gray-300'>{item.para}</p>
                        </div>
                    ))
                    }


                </div>
            </div>
            <div>
                <button className='text-[#3464FD] border bg-[#e5edff] border-[#3464FD] font-[600]  items-center justify-center w-[200px] py-4 flex rounded-full gap-3 cursor-pointer my-9 '>
                    Discuss a project<FaArrowRight size={14} />
                </button>
            </div>
        </section>
    )
}

export default Services











