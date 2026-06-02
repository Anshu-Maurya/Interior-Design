import { FaAward, FaCalendarAlt, FaPlayCircle, FaTable, FaTrophy } from "react-icons/fa";
import {homePageData} from '../assets/DesignHaven-Assets/homePageData'

const Hero = () =>{

    const {hero} = homePageData;
    return(
        <div className="py-20 min-h-screen flex items-center justify-center bg-linear-to-r from-primary to-secondary">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* left side */}
                <div>
                    {/* badge */}
                    <div className="inline-block items-center  rounded-full bg-accent-light px-6 py-3 text-accent text-sm mb-6">
                        <div className=" flex gap-2 items-center ">
                            <FaAward/>
                            {hero.badge}
                        </div>
                    </div>

                {/* section Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-gray-800 mb-6">

                    {hero.title.normal} {""}
                    <span className="text-accent">{hero.title.highlight}</span>
                    {hero.title.end}
                    
                   
                </h1>
              

                {/* section summary */}
                <p className="text-gray-600 text-lg max-w-xl mb-10">
                    {hero.description}
                </p>

                {/* buttons */}

                <div className="flex gap-4 flex-wrap">
                    <button className="rounded-full text-white flex px-4 py-3 items-center bg-accent gap-2 hover:bg-accent-hover transition-all hover:translate-y-0.5 duration-300 cursor-pointer">
                        <FaCalendarAlt/>
                        Book Consultation
                    </button>
                    <button  className="rounded-full text-accent flex px-6 py-3 items-center border-2  gap-2 hover:bg-accent-light transition-all hover:translate-y-0.5 duration-300 cursor-pointer">
                        <FaPlayCircle/>
                        View Project
                    </button>
                </div>

                {/* numbers sections */}
                <div className="mt-16 grid grid-cols-3 gap-8 ">
                    {
                        hero.stats.map((stat,id)=>(
                            <div key={id}>
                                <h3 className="font-bold text-gray-800 text-3xl font-heading">{stat.value}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))
                    }
                    </div>
                     





                </div>
                 {/* Right Section */}
                <div className="mt-15">
                    <div className="relative ">
                        {/* image */}
                        <div className="bg-accent-light rounded-3xl p-2 shadow-2xl overflow-hidden ">
                            <img src={hero.image.src} alt={hero.image.alt}  className="rounded-3xl w-full hover:scale-105 transition-transform duration-500"/>
                        </div>

                        {/* float */}
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 w-64">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 ">
                                    <div className="bg-accent rounded-full p-2">  <FaTrophy className="text-white text-2xl" /></div>
                                  
                                    <h4 className="font-semibold  ">
                                        Design Excellence
                                    </h4>
                                </div>
                                <p className="text-gray-800 text-sm">2026 International Design Award Winner</p>
                            </div>
                        </div>

                    </div>
                </div>
                


              


                </div>

            </div>
           
       

    );
}
export default Hero;