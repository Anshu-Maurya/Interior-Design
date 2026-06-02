import PageHero from '../components/pageHero';
import Story from '../components/story';
import Value from '../components/Value';
import TimeLine from '../components/TimeLine';
const About=()=>{
    return(
        <div>
           <PageHero
            title={'About'}
            highlight={'DesignHaven'}
            description={"For nearly two decades, we've been transforming vision into breathtaking realities, creating homes that tell stories and reflect prsonalities." }
            />
            <Story/>
            <Value/>
            <TimeLine/>
        </div>

    );
}
export default About;