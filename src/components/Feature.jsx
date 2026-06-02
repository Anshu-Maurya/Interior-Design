import { homePageData } from "../assets/DesignHaven-Assets/homePageData";
import SectionHeader from "./SectionHeader";

function Feature() {
    const {features}=homePageData;
  return (
    <div className="py-30 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* section heder */}
        <SectionHeader
          badge={"why Choose Us"}
          title={"premium"}
          highlight={"design Solution"}
          description={
            "We combine creativity with functionality to deliver exceptional home modeling experiences."
          }
        />
         {/* feature Card */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.items.map((item,index)=>(
            <div key={index} className="bg-secondary rounded-2xl  p-8 hover:translate-y-2
            transition duration-300  ease-in-out cursor-pointer">
                
                    {/* icon */}
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                        <item.icon className=" text-2xl text-white"/>
                    </div>
                    <div>
                        <h2 className="font-black font-heading text-xl mb-3 mt-3">{item.title}</h2>
                        <p className="text-gray-800">{item.description}</p>
                    </div>
                

            </div>
        ))}

      </div>
      </div>
     
    </div>
  );
}
export default Feature;
