import { useLocation } from "react-router-dom";
import "./footer.css"


const Footer = () => {
  const location = useLocation();

  const getActivePageClass = (pathname) => {
    if (pathname === "/fantapage") {
      return "active-fanta";
    } 
    if (pathname === "/spritepage") {
      return "active-sprite";
    } 

    if (pathname === "/fuzeteapage") {
      return "active-fuzetea";
    } 
    if (pathname === "/schweppespage") {
      return "active-schweppes";
    } 
  
    return ""; // Default class when not on a specific page
  };

  const activePageClass = getActivePageClass(location.pathname);
  return (
    <>
       <div className={`bg-red-800 w-full p-4 flex justify-center ${activePageClass}`}>
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="flex flex-col  items-center lg:items-start px-24">
            <h4 className="text-white text-lg font-bold">About Us</h4>
            <div className="text-gray-400 font-light items-center lg:items-start flex flex-col text-lg pb-5 lg:pb-0">
              <p>About Us</p>
              <p>Sustainability</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start px-24">
            <h4 className="text-white text-lg font-bold">Support</h4>
            <div className="text-gray-400 font-light items-center lg:items-start flex flex-col text-lg pb-5 lg:pb-0">
          
              <p>Contact Us</p>
              <p>Privacy & Policy</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start px-24">
            <h4 className="text-white text-lg font-bold">Media Center</h4>
            <div className="text-gray-400 font-light  items-center lg:items-start flex flex-col text-lg pb-5 md:pb-0">
              <p>Coca‑Cola Foundation</p>
              <p>Investors</p>
            </div>
          </div>
        </div>
        <img
          src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/cocacola-512.png"
          alt="ColaCola"
          className="h-32 hidden lg:flex lg:flex-end "
        />
      </div>
    </>
  );
};

export default Footer;
