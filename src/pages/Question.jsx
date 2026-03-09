import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const questions = [
  "Where are you located?",
  "What platforms do you work with?",
  "What size businesses do you usually work with?",
  "What is your project management process?",
  "Do you offer website maintenance services?"
];

const Question = () => {

  const [openindex, setOpenindex] = useState([]);

  const toggleQuestion = (index) => {
     if(openindex.includes(index)){
      setOpenindex(openindex.filter((i)=> i!==index))
     }
     else{
      setOpenindex([...openindex,index])
     }
  };

  return (
    <section className="py-15 flex flex-col justify-center items-center">

      <h1 className="md:text-[28px] text-[20px] text-center">
        <span className="font-semibold">Got Questions?</span> We’ve Got Answers.
      </h1>

      <h1 className="text-[30px] font-bold mt-4">FAQs</h1>

      <div className="flex flex-col w-[80%] mt-10">

        {questions.map((ques, index) => (

          <div
            key={index}
            className={`border-gray-400 py-5 ${index < questions.length - 1 ? "border-b" : ""}`}
          >

            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
             <p className="font-medium">{ques}</p>
              <AiOutlinePlus
                size={26}
               
              />

            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openindex.includes(index) ? "max-h-[200px] mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                dolorem aut nemo, repudiandae dolor ab.
              </p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Question;