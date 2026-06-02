import PageHero from '../components/pageHero'
import PortfolioFilter from '../components/PortfolioFilter';
import PortfolioCard from '../components/PortfolioCard';
import { useState } from 'react';
import {projects} from '../assets/DesignHaven-Assets/portfolioData'
import { FaArrowRight } from 'react-icons/fa';
const Portfolio=()=>{
    const[activeFilter,setActiveFilter] =useState('All Projects');
    const filterproject = activeFilter === 'All Projects'? projects :
    projects.filter((project)=>(
        project.categories.includes(activeFilter)
    ))

    return(
        <div>
          <PageHero
          title={'Our'}

          highlight={'Portfolio'}
          decription={'Explore our award-winning home modeling projects that showcase our design excellence.'}
          description={'Explore our award-winning home modeling projects that showcase our design excellence.'}
          
          
          />
          <PortfolioFilter
          active={activeFilter}
          setActive={setActiveFilter}


          />
          {/* portfolioCard */}
          <div className='py-24 bg-white'>
            {/* container */}
            <div className="max-w-6xl mx-auto px-6 ">
                {/* grid */}
                <div className='grid grid-col-1 md:grid-cols-3 gap-8'>
                    {
                        filterproject.map((project,id)=>(
                           <PortfolioCard item={project} index={id}/>
                        ))
                    }


                </div>
                {/* button */}
                <div className=' mt-10  flex items-center justify-center'>
                    <button className='cursor-pointer text-white  flex gap-3 justify-center items-center  px-4 py-2 bg-accent rounded-full '>
                        View All Project
                        <FaArrowRight/>
                    </button>
                </div>

            </div>

          </div>
        </div>

    );
}
export default Portfolio;