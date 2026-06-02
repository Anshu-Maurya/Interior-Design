import { timeline } from "../assets/DesignHaven-Assets/aboutData";
import SectionHeader from "./SectionHeader";
function TimeLine() {
  return (
    <div className="py-24 bg-white">
      {/* containe */}
      <div className="mx-auto max-w-6xl px-6">
        {/* sectionheader  */}
        <SectionHeader
          badge={"Our Journey"}
          title={"Milestones"}
          highlight={"Timeline"}
          description={"Key moments in our journey of design excellence."}
        />
        {/* time line section */}
        <div className="max-w-4xl mx-atuo fade-in">
          <div className="space-y-12">
            {timeline.map((item, id) => (
              <div
                key={id}
                className="flex flex-col md:flex-row items-center gap-6"
              >
                {/* year */}
                <div className="h-16 w-16 bg-accent rounded-full flex items-center justify-center  text-white">
                  {item.year}
                </div>
                {/* title */}
                <div className="bg-accent-light/50 p-6 rounded-2xl grow ">
                  <h2 className="font-bold text-xl font-heading text-gray-800">
                    {item.title}
                  </h2>
                  {/* description */}
                  <p className="text-gray-900 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TimeLine;
