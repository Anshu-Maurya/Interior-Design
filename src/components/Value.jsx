import SectionHeader from "../components/SectionHeader";
import { values } from "../assets/DesignHaven-Assets/aboutData";
function Value() {
  return (
    <div className="py-24 bg-secondary">
      {/* container */}
      <div className="max-w-6xl px-6 mx-auto">
        {/* section header */}
        <SectionHeader
          badge={"Our Value"}
          title={"What "}
          highlight={"Drive Us"}
          description={
            "The core principles that guide every project we undertake."
          }
        />

        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((item, id) => (
            <div key={id}>
              <div className="bg-white rounded-2xl flex flex-col items-center text-center p-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                {/* icon */}
                <div className="w-16 h-16 rounded-full bg-accent flex justify-center items-center text-2xl text-white mb-4">
                  <item.icon />
                </div>
                {/* title */}
                <h4 className="font-bold font-heading text-2xl text-gray-800 mb-4">{item.title}</h4>
                {/* paragraph */}
                <p className="text-sm text-gray-900">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Value;
