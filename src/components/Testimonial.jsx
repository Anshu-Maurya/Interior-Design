import { FaStar } from "react-icons/fa";
import { homePageData } from "../assets/DesignHaven-Assets/homePageData";
import SectionHeader from "./SectionHeader";
function Testimonial() {
  const { testimonials } = homePageData;
  return (
    <div className="bg-secondary py-20">
      {/* container */}
      <div className="max-w-6xl mx-auto px-6">
        {/* section header */}
        <SectionHeader
          badge={"Client"}
          title={"What Our"}
          highlight={"Client Say"}
          description={
            "Hear from homeowners who transformed their living spaces with our designs."
          }
        />

        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((item, index) => (
            <div key={index} 
            className="fade-in bg-white p-8 rounded-2xl hover:translate-y-3 transition-all ease-in-out cursor-pointer duration-300">
              {/* propfile */}
              <div>
                <div className="flex gap-4 items-center ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-full h-16 w-16 object-cover"
                  />
                  <div className="">
                    <h1 className="font-bold font-heading">{item.name}</h1>
                    <p className="text-gray-800">{item.role}</p>
                  </div>
                </div>
                {/* description */}
                <p className="text-gray-800 mt-5">{item.quote}</p>
                {/* stars */}
                <div className="flex mt-2">
                  {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                    <FaStar key={i} className=" text-yellow-400" />
                  ))}

                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
