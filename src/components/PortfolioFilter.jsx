import { filters } from "../assets/DesignHaven-Assets/portfolioData";

function PortfolioFilter({active,setActive}) {
  return (
    <div className="py-12 bg-white">
      {/* container */}
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-5 ">
        {/* Filters */}
        {filters.map((item, id) => (
          <button key={id} className={` px-4 py-3 rounded-full  cursor-pointer font-medium trasnsition duration-200 ${ 
            active === item ? 'bg-accent text-white': 'bg-accent-light text-accent hover:bg-accent hover:text-white'
          } `}
         onClick={()=>setActive(item)} >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
export default PortfolioFilter;
