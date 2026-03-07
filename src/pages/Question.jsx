import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
const questions=[
    "Where are you located?",
    "What platforms do you work with?",
    "What size businesses do you usually work with?",
    "What is your project management process?",
    "Do you offer website maintenance services?"
]
const Question = () => {
  return (
    <section className='py-15 flex flex-col justify-center items-center'>
    
        <h1 className='text-[28px]'><span className='font-semibold'>Got Questions?</span> We’ve Got Answers.</h1>
        <h1 className='text-[30px] font-bold mt-4'>FAQs</h1>


      <div className='flex flex-col w-[80%] '>
        {questions.map((ques,index)=>(
            <div className={`flex justify-between ${index < questions.length-1?"border-b-1":""} border-gray-400 py-5 `}>
                <p>{ques}</p>
                <button className='text-gray-400'><AiOutlinePlus size={26} /></button>
            </div>

        ))}
      </div>
    </section>
  )
}

export default Question
