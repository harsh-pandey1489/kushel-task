import React from "react";
import checkmark from "../assets/logo/checkmark 1.png"
import { FaArrowRight} from "react-icons/fa6";
const packages = [
  {
    title: "Essential Plan",
    para:"Get a fully customized store setup with seamless Flxpoint integration and built on the power of BigCommerce.",
    price: "$3,500",
    deposit: "$1,750",
    features: [
      "Our custom designed theme optimized for conversion",
      "Optimized policy pages (privacy, cookie, terms of use, shipping, and returns)",
      "Customized to match your unique brand and company",
      "Three content pages optimized with AI to communicate your message while engaging your customers",
      "All shipping rules setup for you",
      "All tax rules setup for you",
    ],
  },
  {
    title: "Growth Plan",
    para:"Take advantage of our best design and user experience. Full of the features that have proven to convert more shoppers into buyers.",
    price: "$4,500",
    deposit: "$2,250",
    features: [
      "Our top of the line design theme",
      "Optimized policy pages (privacy, cookie, terms of use, shipping, and returns)",
      "Customized to match your unique brand and company",
      "Three content pages optimized with AI to communicate your message while engaging your customers",
      "All shipping rules setup for you",
      "All tax rules setup for you",
    ],
  },
  {
    title: "Pro Plan",
    para:"Take our best theme to the next level by adding integrations to third party apps like Flxpooint, Judge.me, Smile.io and more.",
    price: "$6500",
    deposit: "$3,250",
    recommended: true,
    features: [
      "Our top of the line design theme",
      "Optimized policy pages (privacy, cookie, terms of use, shipping, and returns)",
      "Customized to match your unique brand and company",
      "Three content pages optimized with AI to communicate your message while engaging your customers",
      "All shipping rules setup for you",
      "All tax rules setup for you",
    ],
  },
];

const Packages = () => {
  return (
    <section className="w-full bg-[#f6f6f6] py-20">
      <div className="max-w-[1200px] m-auto px-4">

        <h2 className="text-center text-[40px] font-semibold mb-14">
          Our Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {packages.map((item, index) => (
            <div
              key={index}
              className="bg-white relative rounded-lg  p-8 flex flex-col gap-4"
            >
              
              {item.recommended && (
                <div className="absolute top-0 left-0 w-full bg-blue-600 text-white text-center text-sm py-2 rounded-t-lg font-semibold">
                   RECOMMENDED
                </div>
              )}

              <h3 className="text-xl font-semibold  mt-3">
                {item.title}
              </h3>
             
                <p className="text-[15px]">{item.para}</p>
             
             {/* price */}
              <div className="mb-2 flex flex-row gap-4 items-center">
               <div>
                 <p className="text-[28px] font-bold flex items-center gap-8">
             {item.price}
                  
                </p>

                <p className="text-[28px] font-bold mt-2 flex items-center gap-8">
                  {item.deposit}
                  
                </p>
               </div>

                <div className="flex  flex-col gap-6">
                    <span className="text-sm font-normal ml-2">
                    Total Project Cost
                  </span>
                  <span className="text-sm font-normal ml-2">
                    Deposit Due at Sign Up
                  </span>
                </div>
              </div>

              

              <h4 className="font-semibold mb-4 border-t-1 pt-8">Features :</h4>

              <ul className="space-y-3 flex-1">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex gap-3 text-sm">
                      
                    <img src={checkmark} className=" w-[30px] h-[30px] "/>
                
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-7 p-4 flex w-[250px] justify-center items-center gap-3 bg-blue-600 cursor-pointer text-white  rounded-full font-medium">
                GET STARTED TODAY <FaArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
