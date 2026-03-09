import React from 'react'
import mask1 from '../assets/mask-icon/Mask group (1).png'
import mask2 from '../assets/mask-icon/Mask group (2).png'
import mask3 from '../assets/mask-icon/Mask group (3).png'
import mask4 from '../assets/mask-icon/Mask group (4).png'
import mask5 from '../assets/mask-icon/Mask group (5).png'

const data=[
     {
        logo:mask1,
        head:"Custom BigCommerce Development",
        para:"Tailored solutions to match your brand and business goals."
    },
     {
        logo:mask2,
        head:"Seamless Integrations",
        para:"Connect your store with payment gateways, CRMs, and marketing tools effortlessly"
    },
     {
        logo:mask3,
        head:"Mobile-Optimized Designs",
        para:"Ensure a flawless shopping experience on all devices.  "
    },
     {
        logo:mask4,
        head:"Scalable Solutions",
        para:"Grow your store without worrying about performance bottlenecks. "
    },
     {
        logo:mask5,
        head:"Expert Support",
        para:"Ongoing maintenance and optimization to keep your store running smoothly. "
    },
]

const ChooseUs = () => {
  return (
    <section className=' bg-[#D9D9D9] w-full py-10'>
      <div className=' max-w-7xl  mx-auto flex flex-col gap-5 items-center'>
        <div className='mt-14 items-center text-center'>
             <p className='font-[600] text-[20px]'>Why choose us </p>
         <h1 className='text-[29px] font-[600]'>Whats make us better</h1>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-9  py-10'>
          {
            data.map((item,index)=>(
               <div className='max-w-[380px] h-[220px] p-6 bg-[#F9FAFF] ' key={index}>
                   <div className='w-[50px] h-[50px] bg-[#d4f2f4] border-blue-100 rounded-[8px]'>
                    <img className='object-cover p-2' src={item.logo}/>
                   </div>
                   <h1 className='font-[700] mt-4 mb-4'>{item.head}</h1>
                   <p>{item.para}</p>
               </div>

            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
