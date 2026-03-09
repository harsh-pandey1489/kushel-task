import kushellogo from "../assets/logo/Kds logo 1.png";
import followlogo from "../assets/logo/Frame 1000010954.png"
import vector from "../assets/logo/Vector.png"
const quicklink = ["Home", "About ", "Service", "Portfolio", "Contact Us"];
const services = [
  "Store Development & Setup",
  "Custom Theme Developiment",
  "Custom Development & Integrations",
  "BigCommerce B2B Development",
  "BigCommerce Platform Migration",
  "Multi-Storefront & Internationalization"

]
const Footer = () => {
  const scrolltop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
  return (
    <footer className='w-full bg-[#FEFDFD]'>
     
      <div className='max-w-7xl mx-auto flex flex-col'>
        <div className="w-full flex md:flex-row flex-col gap-3 md:justify-between text-[#444444] py-6 px-10">
          <div className="flex flex-col text-[17px] gap-5">
            <div className="w-[200px]">
              <img className="max-w-[170px] object-contain" src={kushellogo} />
            </div>
            <p>Phone: +1-585-566-2070</p>
            <p>Email: info@kusheldigi.com</p>
          </div>

          <div>
            <h1 className="text-[21px] mb-4 font-[600]">Quick Links</h1>
            <ul className="flex flex-col gap-3">
              {
                quicklink.map((item,index) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
          </div>


          <div>
            <h1 className="text-[21px] mb-4 font-[600]">Our Services</h1>
            <ul className="flex flex-col gap-3">
              {
                services.map((item,index) => (
                  <li key={index}>{item}</li>
                ))
              }
            </ul>
          </div>


          <div className=" flex flex-col gap-4">
            <div className=" flex flex-col gap-4">
              <h1 className="text-[21px] text-[#444444] font-[600]">Company</h1>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <h1 className="text-[21px] font-[600]">Follow us</h1>
            <img className="max-w-[170px] " src={followlogo} />
          </div>



        </div>

      </div>

      <div className="relative bg-[#F5F8FA] py-10 flex justify-center">
        <button onClick={scrolltop} className=" flex justify-center gap-2 cursor-pointer bg-[#0B56E4] px-6 rounded-full items-center text-white md:text-[23px] py-3 ">Back to top <img className="w-2 h-2" src={vector} /> </button>
        <p className="absolute right-19 text-[#737476] top-0 md:top-15">@2025 Kusheldigi.All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
