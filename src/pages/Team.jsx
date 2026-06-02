import PageHero from "../components/pageHero";
import { teamData } from "../assets/DesignHaven-Assets/teamData";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
const Team = () => {
  return (
    <div>
      <PageHero
        title={"Our"}
        highlight={"Teams"}
        description={
          "A talented team of architects, interior designers, and model makers dedicated to creating exceptional spaces."
        }
      />
      <div className="bg-white py-24">
        {/* container */}
        <div className="max-w-6xl px-6 mx-auto">
          {/* grid card */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            {teamData.map((item, id) => (
              <div
                key={id}
                className="  bg-accent-light rounded-3xl cursor-pointer hover:translate-y-2 duration-300 "
              >
                {/* image */}
                <div className="">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-3xl w-full h-60 object-cover"
                  />
                </div>

                {/* name */}
                <div className="p-8 space-y-3">
                  <h2 className="font-bold font-heading text-2xl text-gray-800">
                    {item.name}
                  </h2>

                  {/* role */}
                  <h2 className="text-accent">{item.role}</h2>
                  {/* bio */}
                  <p className="text-sm text-gray">{item.bio}</p>

                  {/* social */}
                  <div className="flex gap-5 text-gray">
                    <FaLinkedin />
                    <FaTwitter />
                    <FaInstagramSquare />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Data */}
      <div className="py-24 bg-accent">
        {/* grid */}
        <div className="grid md:grid-cols-2  grid-cols-1 m-8 ">
          {/* Data */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
              Join Our Design Team
            </h2>
            <p className="text-white mt-3  ">
              We're always looking for talented designers, architects, and
              creative minds to join our studio
            </p>

            <div className="bg-white rounded-full px-4 py-3  justify-center inline-block mt-6">
              <button className="text-accent">View Open Position</button>
            </div>
          </div>

          {/* icon */}
          <div className="flex justify-center">
            <div className="bg-accent-light rounded-full w-60 h-60 flex justify-center items-center">
              <IoPeopleSharp className="text-white text-8xl  " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
