import { NavLink } from "react-router-dom";
import { FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";
import { footerData } from "../assets/DesignHaven-Assets/footerData";

const footerLinkClasses =
  "relative block w-fit px-0 py-1 text-gray-500 font-semibold transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-accent hover:after:w-full";

const Footer = () => {
  const { company, quickLinks, services, contactInfo } = footerData;

  return (
    <div className="pt-20 py-20 pb-8 bg-gray-900">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full bg-accent flex justify-center items-center">
                <company.logoIcon className="text-white text-3xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-heading text-white">
                  Design <span className="text-accent">Haven</span>
                </h2>
              </div>
            </div>

            <p className="text-gray-500 text-xl">{company.description}</p>

            <div className="flex gap-4 items-center mt-4">
              {company.socialLinks.map((item, id) => (
                <a
                  href={item.url}
                  key={id}
                  className="w-10 h-10 bg-gray-800 justify-center flex items-center rounded-full hover:bg-accent transition-all duration-300 ease-in-out hover:translate-y-0.5"
                >
                  <item.icon className="text-white text-2xl" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white font-heading mb-7">Quick Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {quickLinks.map((item, id) => (
                <NavLink
                  key={id}
                  to={item.path}
                  className={({ isActive }) =>
                    [
                      footerLinkClasses,
                      isActive ? "text-accent after:w-full" : "",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white font-heading mb-7">Services</h2>

            {services.map((item, id) => (
              <a
                href="#"
                key={id}
                className={footerLinkClasses}
              >
                {item}
              </a>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white font-heading mb-7">Contact Info</h2>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <FaMapPin className="text-accent" />
                <span className="text-gray-500 font-semibold">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-accent" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-500 font-semibold hover:text-accent transition-colors duration-300"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-accent" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-500 font-semibold hover:text-accent transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;