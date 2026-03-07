import React, { useState } from "react";
import BigCommerceSlider from "./BigCommerceSlider";
import WebsiteSlider from "./WebsiteSlider";

const ParentSlider = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === 4 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? 4 : prev - 1));
  };

  return (
    <>
      <WebsiteSlider nextSlide={nextSlide} prevSlide={prevSlide} />
      <BigCommerceSlider
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </>
  );
};

export default ParentSlider;