import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/service", label: "Service" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/team", label: "Team" },
    { path: "/blog", label: "Blog" },
  ];
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="w-full fixed shadow-lg  py-4 px-4 bg-white backdrop-blur-3xl">
      {/* container */}
      <div className="max-w-6xl mx-auto flex justify-between">
        {/* logo */}
        <Link to={"/"} className="flex items-center space-x-4">
          <div className="flex justify-center items-center w-10 h-10 bg-accent rounded-full">
            <FaHome className="text-2xl text-white" />
          </div>
          <div className="text-2xl font-heading font-bold text-gray-800">
            Design
            <span className="text-accent">Haven</span>
          </div>
        </Link>
        {/* Destop Nav items */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link to={'/contact'}
          className="px-6 py-2 bg-accent text-white rounded-full">
            Contact
          </Link>

        </div>

        {/* Mobile Button */}
        <div className="md:hidden ml-auto flex items-center justify-end">
          <button className="cursor-pointer text-2xl text-accent" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu item */}
      {
        openMenu && (
            <div className="md:hidden mt-6 pb-4">
                <div className="flex flex-col space-y-6 py-4">
                    {
                      navItems.map((item)=>(
                        <Link key={item.path} to={item.path} onClick={() => setOpenMenu(false)}>
                            {item.label}
                            </Link>
                        ))
                    }
                    <Link to={'/contact/ '} className="px-6 py-3 bg-accent text-white rounded-full flex items-center justify-center">
                    <FaCalendarAlt/>
                    Contact
                    </Link>
                      
                </div>

            </div>
        )
      }

    </div>
  );
};

export default Header;
