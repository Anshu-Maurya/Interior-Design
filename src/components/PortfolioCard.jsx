import { FaArrowRight } from "react-icons/fa";

function PortfolioCard({item,index}){
    return(
        <div key={index} className="rounded-2xl overflow-hidden">
           {/* image */}
           <div>
            <img src={item.image} alt="" className="rounded-2xl hover:scale-105 transition-transform ease-in-out  duration-300 cursor-pointer grow mb-6 h-64 w-full object-cover" />
           </div>

           {/* title */}
           <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 ">{item.title}</h3>

           {/* paragraph */}
           <p className="text-sm text-gray-800 mb-4">{item.description}</p>


           {/* link */}
           <div className="flex items-center  justify-between">
          <span className="text-accent font-medium ">{item.location}</span>
          <FaArrowRight className="text-xl hover:text-accent cursor-pointer transition-duration-200"/>

           </div>
        </div>

    );
}
export default PortfolioCard;