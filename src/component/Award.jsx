import React from "react";
import certified from "../assets/logo/certified.png";
import bigCommerce from "../assets/logo/BigCommerce.png";

const Award = () => {
  return (
    <section className="w-full bg-white md:py-12">

      <div className="mx-auto max-w-7xl">

        <div className="bg-[#FAFAFA] flex flex-col md:flex-row md:justify-between items-center gap-8 p-12 rounded-xl">

          <h1 className="text-[28px] md:text-[36px] lg:text-[40px] font-[500]  md:w-[500px] md:text-left text-center">
            Award-winning Agency Partner
          </h1>

          <div className="flex flex-row  md:flex-row gap-4 justify-center sm:flex-row items-center gap-6">

            <img
              src={certified}
              className="w-[200px] md:w-[230px]  bg-white rounded-full p-6"
            />

            <img
              src={bigCommerce}
              className="w-[200px] md:w-[230px]  bg-white rounded-full p-6"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Award;