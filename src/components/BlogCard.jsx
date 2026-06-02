import { FaArrowRight } from "react-icons/fa";
import { blogPosts } from "../assets/DesignHaven-Assets/blogPostData";
import { CiCalendar } from "react-icons/ci";
import { MdWatchLater } from "react-icons/md";
function BlogCard() {
  return (
    <div className="py-24 bg-white">
      {/* container */}
      <div className="mx-auto max-w-6xl px-6">
        {/* grid */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((item, id) => (
            <div key={id} className="bg-accent-light rounded-3xl  cursor-pointer hover:translate-y-2 transition ease-in-out duration-300">
              {/* image */}
              <div>
                <img src={item.image} alt=""  className="w-full h-60 rounded-3xl"/>
              </div>
              {/* date , time */}
              <div className="p-8 space-y-4">
              <div className="flex gap-3 text-gray-500 ">
                <p className="flex gap-1 items-center">
                    <CiCalendar />
                    {item.date}
                    </p>

                <p className="flex gap-1 items-center">
                    <MdWatchLater />
                    {item.readTime}
                    </p>
              </div>
              {/* title */}
              <h2 className="font-bold font-heading text-gray-900">{item.title}</h2>
              {/* description */}
              <p className="text-sm text-gray-500">{item.description}</p>
              {/* button */}
              <div>
                <div className="text-accent flex gap-2 items-center">
                    Read Artical
                    <FaArrowRight/>

                </div>
              </div>
            </div>
            </div>
          ))}
        </div>

        {/* button */}
        <div className=" flex justify-center">
       
        <div className="bg-accent rounded-full px-5 py-3  mt-10 cursor-pointer">
            <button className="flex gap-2 text-white justify-center items-center ">
                View All Article
                <FaArrowRight/>

            </button>
        </div>
         </div>
      </div>
    </div>
  );
}
export default BlogCard;
