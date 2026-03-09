import React from "react";
import rectangle1 from "../assets/experience-compo-icon/icon1.png";
import rectangle2 from "../assets/experience-compo-icon/icon2.png";
import rectangle3 from "../assets/experience-compo-icon/icon3.png";

const data = [
  {
    icon: rectangle1,
    text: " BigCommerce Projects Launch",
    num:"110+"
  },
  {
    icon: rectangle2,
    text: "Years Experience",
    num:"110+"
  },
  {
    icon: rectangle3,
    text: " BigCommerce Clients",
    num:"110+90+"
  },
];

const Experience = () => {
  return (
    <section className="w-full bg-[#fdfdfe] flex items-center justify-center">
      
      <div className=" w-full max-w-7xl mx-auto grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-3 py-10">

        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center md:gap-4 gap-1 text-center px-10
            ${index !== data.length - 1 ? "md:border-r border-[#1E7F9E80]" : ""}`}
          >
            <img src={item.icon} alt="icon" className="w-12 h-12" />
            <h1 className="text-black text-lg font-medium">
             <span className="font-[600]">{item.num}</span> {item.text}
            </h1>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Experience;