import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const data = [
    {
        logo: "logo1",
        head: "Store Development & Setup",
        para: "we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers. Whether you're launching a new store or upgrading an existing one, we ensure a seamless, high-performing eCommerce experience."
    },
    {
        logo: "logo1",
        head: "Custom Theme Development",
        para: "we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers. Whether you're launching a new store or upgrading an existing one, we ensure a seamless, high-performing eCommerce experience."
    },
    {
        logo: "logo1",
        head: "Custom Development & Integrationst",
        para: "We design and develop custom BigCommerce themes tailored to your brand, ensuring a seamless, high-performance shopping experience that drives conversions and engagement."
    },
    {
        logo: "logo1",
        head: "BigCommerce B2B Development",
        para: "we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers. Whether you're launching a new store or upgrading an existing one, we ensure a seamless."
    },
    {
        logo: "logo1",
        head: "BigCommerce Platform Migration",
        para: "We design and develop custom BigCommerce themes tailored to your brand, ensuring a seamless, high-performance shopping experience that drives conversions and engagement."
    },
    {
        logo: "logo1",
        head: "Multi-Storefront & Internationalization",
        para: "We design and develop custom BigCommerce themes tailored to your brand, ensuring a seamless, high-performance shopping experience that drives conversions and engagement."
    },
    {
        logo: "logo1",
        head: "App & Plugin Development",
        para: "We design and develop custom BigCommerce themes tailored to your brand, ensuring a seamless, high-performance shopping experience that drives conversions and engagement."
    },
    {
        logo: "logo1",
        head: "Headless Commerce & API Development",
        para: "we specialize in designing, developing, and setting up BigCommerce stores that drive engagement, conversions, and repeat customers. Whether you're launching a new store or upgrading an existing one, we ensure a seamless."
    },
    {
        logo: "logo1",
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

            <div className='flex flex-wrap gap-4 items-center justify-center mt-10'>
                {
                    data.map((item, index) => (
                        <div className='w-[380px] p-5 flex flex-col  h-[350px] rounded-[6px] bg-[#55507F] text-white' key={index} >
                            <div className='flex flex-row  justify-between items-center'>
                                <div className='w-[70px] h-[70px] border-2 border-[#6da6ff] rounded-xl
                                      shadow-[inset_0_0_15px_rgba(120,170,255,0.5),inset_0_0_30px_rgba(120,170,255,0.4)] flex items-center justify-center'>
                                    <img className='object-contain' src={item.logo} />
                                </div>

                                <div className='w-[30px] h-[30px]'><span>0</span>{index}</div>
                            </div>

                            <h1 className='text-[21px] font-[600] text-gray-200  py-4'>{item.head}</h1>
                            <p className='text-gray-300'>{item.para}</p>
                        </div>
                    ))
                }

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
