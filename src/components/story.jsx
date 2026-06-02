import { FaArrowRight } from 'react-icons/fa';
import {story } from '../assets/DesignHaven-Assets/aboutData'
function Story(){
    return(
        <div className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* left side content */}
                <div className='fade-in'>
                    {/* badge */}
                    <span className='text-accent  px-4 py-2  bg-accent-light rounded-full'>
                        {story.badge}
                       
                    </span>
                    {/* title */}
                    <h2 className='text-4xl md:text-5xl lg:text-6xl mt-6 font-heading font-bold text-gray-800 mb-6'>
                        our
                        <span className='text-accent'>{story.title}</span>
                        
                    </h2>
                    {/* paragrph */}
                    {
                        story.paragraphs.map((item,id)=>(
                            <p key={id}className='text-gray-800 mb-6'>
                                {item}
                            </p>
                        ))
                    }
                    <div>
                        <button className='text-white bg-accent rounded-full px-4 py-2 cursor-pointer hover:bg-accent-hover transition-all duration-300 
                       hover:translate-y-1 flex items-center gap-2 ease-in-out hover:shadow-lg' >
                            Meet Our Team
                           <FaArrowRight/>
                        </button>
                    </div>
                   
                      
                  

                </div>
                {/* right side image */}
                <div className='fade-in'>
                    <div className='rounded-3xl bg-accent-light overflow-hidden shadow-2xl p-2'>
                        <img  className="w-full rounded-3xl hover:scale-105 trnasition duration-500" src={story.image} alt="About DesignHaven" />
                    </div>



                </div>

            </div>

        </div>

    );
}
export default Story;