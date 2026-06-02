import PageHero from "../components/pageHero";
import ServiceCard from "../components/ServiceCard";
import ServiceProcess from "../components/ServiceProcess";

const Service=()=>{
    return(
        <div>
           <PageHero
           
           title={'Our'}
           highlight={'Services'}
           description={'Comprehensive home modeling and design solutions tailored to your unique needs and vision.'}
           
           />
           <ServiceCard/>
           <ServiceProcess/>
        </div>

    );
}
export default Service;