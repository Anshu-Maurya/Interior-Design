import { services } from "../assets/DesignHaven-Assets/servicesData";
import { FaArrowRight, FaCheck } from "react-icons/fa";

function ServiceCard() {
  return (
    <div className="py-24 bg-white">
      {/* container */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* MainCard */}

          {services.map((item, id) => (
            <div
              key={id}
              className="bg-secondary rounded-2xl p-8 transition-all duration-300 hover:translate-y-1 cursor-pointer ease-in-out space-y-4"
            >
              {/* icon */}
              <div className="w-16 h-16 bg-accent flex justify-center items-center rounded-full  ">
                <item.icon className="text-2xl text-white" />
              </div>
              {/* text */}
              <div>
                {/* title */}
                <h2 className="font-bold text-2xl font-heading text-gray-900 mb-4">
                  {item.title}
                </h2>

                {/* descriptions */}
                <p className="text-gray-500">{item.description}</p>
              </div>
              {/* features */}
              <div className="space-y-4">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="text-gray-500 flex items-center gap-2">
                    <FaCheck className="text-accent"/>
                    {feature}
                  </div>
                ))}
              </div>
              {/* button */}
              <div className="bg-accent inline-block rounded-3xl px-5 py-2">
                <button className="flex items-center gap-2 text-white">
                    Learn More
                    <FaArrowRight/>

                </button>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}
export default ServiceCard;
