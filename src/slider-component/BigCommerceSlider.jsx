import topbrass from "../assets/Slider-logo/topbrass.png";
import siteAndscope from "../assets/Slider-logo/siteAndscope.svg";
import KickEzz from "../assets/Slider-logo/KicEzz.svg";
import madFish from "../assets/Slider-logo/madFish.svg";
import laptop from "../assets/sliderImage/mackbook.png";
import AAz from "../assets/Slider-logo/2AA.png";
import arrow from "../assets/logo/Mask group.svg";
import laptop2 from "../assets/sliderImage/macbook2.svg";
import laptop3 from "../assets/sliderImage/MacBook3.svg";
import laptop4 from "../assets/sliderImage/MacBook4.svg";
import laptop5 from "../assets/sliderImage/macbookMobile.svg";
import active1 from "../assets/Ecommerce-image/topbrass (2).svg";
import active2 from "../assets/Ecommerce-image/sideandscope.svg";
import active3 from "../assets/Ecommerce-image/kickezz.svg";
import active4 from "../assets/Ecommerce-image/MadFishOnboardingDesignQuestions-4 1 (1).svg";
import active5 from "../assets/Ecommerce-image/2AA Logo Black 2.svg";

const sliderData = [
  {
    logo: topbrass,
    activeLogo: active1,
    title: "Top Brass Tactical",
    industry: "Military & tactical industry",
    image: laptop,
    conversions: "+85%",
    revenue: "+58%",
    aov: "+6%",
    content: " Magento to BigCommerce Migration, Data Migration, BigCommerce store Design, Custom Theme Development, SEO, Integration.",
  },
  {
    logo: siteAndscope,
    activeLogo: active2,
    title: "2nd Amendment Armory",
    industry: "Optics industry",
    image: laptop2,
    conversions: "+103%",
    revenue: "+40%",
    aov: "+5%",
    content: " Magento to BigCommerce Migration, Data Migration, BigCommerce store Design, Custom Theme Development, SEO, Integration.",
  },  
  {
    logo: KickEzz,
    activeLogo: active3,
    title: "Black Rhino Concealment",
    industry: "Shooting accessories",
    image: laptop3,
    conversions: "+60%",
    revenue: "+38%",
    aov: "+4%",
    content: " Magento to BigCommerce Migration, Data Migration, BigCommerce store Design, Custom Theme Development, SEO, Integration.",
  },
  {
    logo: madFish,
    activeLogo: active4,
    title: "MadFish",
    industry: "Fishing industry",
    image: laptop4,
    conversions: "+105%",
    revenue: "+60%",
    aov: "+3%",
    content: " Magento to BigCommerce Migration, Data Migration, BigCommerce store Design, Custom Theme Development, SEO, Integration.",
  },
  {
    logo: AAz,
    activeLogo: active5,
    title: "2AA",
    industry: "Fishing industry",
    image: laptop5,
    conversions: "+55%",
    revenue: "+30%",
    aov: "+3%",
    content: " Magento to BigCommerce Migration, Data Migration, BigCommerce store Design, Custom Theme Development, SEO, Integration..",
  },
];

const BigCommerceSlider = ({ activeIndex, setActiveIndex }) => {
  return (
    <section className="w-full bg-[#56C83C]/10 md:py-10 py-4 overflow-x-hidden">
      <div className=" max-w-[1720px] mx-auto overflow-hidden">

      <div className="flex max-w-7xl mx-auto flex-wrap md:flex-nowrap gap-5 md:gap-20 border-b pb-3 md:mb-10 justify-center">
          {sliderData.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer relative flex flex-col  items-center"
            >
              <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[190px] lg:h-[120px]  flex items-center justify-center">
                <img
                  src={activeIndex === index ? item.activeLogo : item.logo}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {activeIndex === index && (
                <div className="absolute bottom-[-12px] left-0 w-full h-[3px] bg-[#0B56E4] rounded"></div>
              )}
            </div>
          ))}
        </div>

        {/* dekstopslider */}
        <div
          key={activeIndex}
          className="hidden md:flex items-center justify-between p-10 animate-slide"
        >

          <div className="w-[40%] ">
            <div className=" max-w-[550px] h-[350px] flex items-center justify-center overflow-hidden">
              <img
                key={activeIndex}
                src={sliderData[activeIndex].image}
                className="max-h-full object-contain"
                alt="laptop"
              />
            </div>

          </div>

          <div className="flex mr-10  ">
            <button className="bg-white w-[80px] h-[60px] text-[20px]">View</button>
            <button className="bg-[#444951] w-[80px] h-[60px] flex justify-center items-center text-white ">
              <img src={arrow} />
            </button>
          </div>

          {/* right section  */}
          <div className="w-[50%]">

            <h2 className="lg:text-5xl sm:text-3xl font-[500] mb-6">
              {sliderData[activeIndex].title}
            </h2>

            <div className="flex gap-3 mb-6">
              <span className="bg-white font-[500] px-3 py-1 rounded-full lg:text-xl">
                B2B
              </span>

              <span className="bg-white font-[500] px-3 py-1 rounded-full lg:text-xl">
                {sliderData[activeIndex].industry}
              </span>
            </div>

            <p className="text-black- mb-6 lg:text-xl ">
              <span className="font-[400] ">  What We Did:</span>
              <span>{sliderData[activeIndex].content}</span>
            </p>

            <div className="space-y-3 max-w-[400px]">

              <div className="flex lg:text-xl justify-between border-b pb-2">
                <span>Increased Conversions</span>
                <span className="font-semibold">{sliderData[activeIndex].conversions}</span>
              </div>

              <div className="flex lg:text-xl  justify-between border-b pb-2">
                <span>Increased Revenue</span>
                <span className="font-semibold">{sliderData[activeIndex].revenue}</span>
              </div>

              <div className="flex lg:text-xl  justify-between border-b pb-2">
                <span>Increased AOV</span>
                <span className="font-semibold">{sliderData[activeIndex].aov}</span>
              </div>

            </div>

          </div>
        </div>

        {/* mobileslider*/}
        <div

          className="md:hidden px-4 ">

          <div
            key={activeIndex}

            className="bg-[#EEF4EC] p-8 animate-slide ">

            <h2 className="text-[22px] font-semibold text-center mb-6">
              {sliderData[activeIndex].title}
            </h2>


            <div className="flex justify-center mb-6 relative">

              <img
                src={sliderData[activeIndex].image}
                className="max-h-[220px] object-contain"
              />

              <div className="flex absolute bottom-0">
                <button className="bg-white w-[80px] h-[50px]">
                  View
                </button>

                <button className="bg-[#444951] w-[80px] flex justify-center items-center">
                  <img src={arrow} />
                </button>
              </div>

            </div>


            <div className="flex justify-center gap-3 mb-6">
              <span className="bg-white px-3 py-1 rounded-full text-sm">
                B2B
              </span>

              <span className="bg-white px-3 py-1 rounded-full text-sm">
                {sliderData[activeIndex].industry}
              </span>
            </div>

            <p className="text-sm mb-6 text-center">
              <span className="font-[500]">What We Did: </span>
              {sliderData[activeIndex].content}
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span>Increased Conversions</span>
                <span>{sliderData[activeIndex].conversions}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Increased Revenue</span>
                <span>{sliderData[activeIndex].revenue}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Increased AOV</span>
                <span>{sliderData[activeIndex].aov}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BigCommerceSlider;


