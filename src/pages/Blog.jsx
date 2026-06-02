import PageHero from '../components/pageHero';
import BlogCard from '../components/BlogCard';
const Blog=()=>{
    return(
        <div>
           <PageHero
           title={'Design'}
           highlight={'Insight'}
           description={'Explore design trends, tips, and insights from our team of experts.'}
           
           />
           {/* card */}
           <BlogCard/>
           
           

        </div>

    );
}
export default Blog;