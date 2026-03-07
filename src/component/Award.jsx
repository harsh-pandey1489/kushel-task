import React from 'react'
import certified from '../assets/logo/certified.png'
import bigCommerce from '../assets/logo/BigCommerce.png'
const Award = () => {
  return (
    <section className='w-full h-[300px] bg-[#FFFFFF] flex justify-center  item-center' >
     <div className='w-[90%] h-[80%]  bg-[#FAFAFA] flex justify-between items-center px-10 mt-9'>
         <h1 className='font-[500] text-[40px] w-[450px] gap-10 '>Award-winning Agency Partner</h1>
      <div className=' flex gap-15 '>
        <img className='w-[280px] h-[120px] bg-white rounded-full p-7' src={certified}/>
         <img className='w-[280px] h-[120px] bg-white rounded-full p-7'  src={bigCommerce}/>
      </div>
     </div>
    </section>
  )
}

export default Award




 