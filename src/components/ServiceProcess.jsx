import SectionHeader from '../components/SectionHeader';
import { processSteps } from '../assets/DesignHaven-Assets/servicesData';
function ServicrProcess (){
    return(
        <div className="bg-secondary py-24">
            {/* container */}
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeader
                badge={'Our Process'}
                title={'How We'}
                highlight={'Work'}
                description={'A systematic approach to delivering exceptional design solutions.'}
                
                
                />
                {/* cards */}
                <div className='grid grid-cols-1 md:grid-cols-4 items-center gap-8'>
                    {
                       processSteps.map((item,id)=>(
                        <div key={id} className='space-y-4 items-center flex flex-col'>
                            {/* Steps */}
                            <div className='w-16 h-16 rounded-full flex items-center justify-center bg-accent text-2xl text-white'>
                                {item.step}
                            </div>
                            {/* titel */}
                            <h2 className='font-bold text-2xl font-heading text-gray-800'>
                                {item.title}

                            </h2>
                            {/* description */}
                            <p className='text-sm text-gray-800'>
                                {item.description}

                            </p>
                


                        </div>
                       ))
                    }

                </div>

            </div>

        </div>

    );
}
export default ServicrProcess;