import { GrContactInfo } from "react-icons/gr";
import { footerData } from "../assets/DesignHaven-Assets/footerData";
import { FaEnvelope, FaLocationArrow, FaMapPin, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
const Footer = () => {
  const { company, quickLinks, services ,contactInfo} = footerData;
  return (
    <div className="pt-20 py-20 pb-8 bg-gray-900">
      {/* container */}
      <div className="max-w-6xl px-6 mx-auto">
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* company-info */}
          <div className="flex flex-col gap-3">
            {/* logo */}
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full bg-accent flex justify-center items-center">
                <company.logoIcon className="text-white text-3xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-heading text-white">Design <span className="text-accent">Haven</span></h2>
              </div>
            </div>

            <p className="text-gray-500 text-xl">
               {company.description}

            </p>
            {/* social */}
            <div className="flex gap-4 items-center mt-4">
                {company.socialLinks.map((item,id)=>(
                   <a href="#"   key={id}className="w-10 h-10 bg-gray-800 justify-center flex items-center rounded-full hover:bg-accent trasition-all duration-300 ease-in-out hover:translate-y-0.5">
                    <item.icon className="text-white text-2xl"/>
                   </a>
                )
                
               ) }
            </div>


          </div>

          {/* quick links */}
          <div>
            <h2 className="text-2xl font-bold text-white font-heading mb-7">Quick Links</h2>
            {
                quickLinks.map((item,id)=>(
                  
                    <a href="#" className="flex text-gray-500 mt-2 font-semibold key={id}">
                        {item.label}
                    </a>
                   

                ))
            }
            
          </div>

          {/* services */}
          <div>
            <h2 className="text-2xl font-bold text-white font-heading mb-7">
                Services

            </h2>

            {
                services.map((item,id)=>(
                  
                    <a href="#" className="flex text-gray-500 mt-2
                    font-semibold ">
                        {item}
                    </a>
                   
                
           )) }
          </div>

          {/* contact-info */}
          <div>
            <h2 className="text-2xl font-bold text-white font-heading mb-7">
                Contact Info
            </h2>
            
                <ul className="space-y-4 ">
                    <li className="flex items-center gap-2">
                         <FaLocationArrow className="text-accent"/>
                        <span className="text-gray-500 font-semibold">
                            New Ashok Nagar,Delhi
                        </span>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaPhone  className="text-accent"/>
                        <span className="text-gray-500 font-semibold">
                            New Ashok Nagar,Delhi
                        </span>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaEnvelope className="text-accent"/>
                        <span className="text-gray-500 font-semibold">
                            New Ashok Nagar,Delhi
                        </span>
                    </li>
                </ul>
                   

                
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
