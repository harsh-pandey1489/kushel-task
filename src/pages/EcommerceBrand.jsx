import React from "react";

import logo1 from "../assets/Ecommerce-image/kickezz.svg";
import logo2 from "../assets/Ecommerce-image/madfish (2).svg";
import logo3 from "../assets/Ecommerce-image/Slide365 Logo 1.svg";
import logo4 from "../assets/Ecommerce-image/CodePXL_Web_Logo 1.svg";
import logo5 from "../assets/Ecommerce-image/2AA Logo Black 2.svg";
import logo6 from "../assets/Ecommerce-image/sideandscope.svg";
import logo7 from "../assets/Ecommerce-image/topbrass (2).svg";
import logo9 from "../assets/Ecommerce-image/Logo 1.svg";
import logo8 from "../assets/Ecommerce-image/MadFishOnboardingDesignQuestions-4 1 (1).svg";
import logo10 from "../assets/Ecommerce-image/typhoon.svg";

const logos = [logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10];

const EcommerceBrand = () => {
  return (
    <section className="bg-white max-w-[1720px] mx-auto flex flex-col justify-center items-center py-10 overflow-hidden">

      <h1 className="md:text-[29px] text-[24px] text-center mb-12">
        Trusted by Leading <span className="font-[600]">E-Commerce</span>{" "}
        <span className="font-[500]">Brands</span>
      </h1>

      {/* firstrow */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-7 animate-scroll-left w-max">
          {[...logos,...logos].map((item, index) => (
  <div
                key={index}
              className="w-[120px] md:w-[220px] lg:w-[250px] h-[70px] md:h-[160px] lg:h-[200px] bg-[#F5F5F5] flex justify-center items-center"
            >
        <img src={item} className="object-contain max-h-[80px]" />
            </div>
          ))}

        </div>
      </div>

      {/* secondrow */}
      <div className="w-full overflow-hidden mt-7">
        <div className="flex gap-7 animate-scroll-right w-max">

          {[...logos,...logos].map((item, index) => (
            <div
                key={index}
              className="w-[120px] md:w-[220px] lg:w-[250px] h-[70px] md:h-[160px] lg:h-[200px] bg-[#F5F5F5] flex justify-center items-center"
            >
              <img src={item} className="object-contain max-h-[60px] md:max-h-[80px] " />
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default EcommerceBrand;