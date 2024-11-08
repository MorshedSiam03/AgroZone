import { LuMoveRight } from "react-icons/lu";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar bg-[#1f4e3d] sticky top-0 z-50 px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box text-white z-[20] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About Us</a>
                <ul className="p-2">
                  <li>
                    <a>Our Services</a>
                  </li>
                  <li>
                    <a>Our Projects</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <img src="/src/assets/LogoNav.png" className="w-48 cursor-pointer" alt="" />
        </div>
        <div className="navbar-center hidden text-white lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>About Us</summary>
                <ul className="p-2 w-32 text-black">
                  <li>
                    <a>Our Services</a>
                  </li>
                  <li>
                    <a>Our Projects</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn bg-[#2ab939] border-0 rounded-full text-white font-normal">Book a Consultant <LuMoveRight className="text-xl font-extralight" />          </a>
        </div>
      </div>
      <div className="image">
        <div className=" mx-10 flex flex-col md:flex-row justify-between items-center">
          <div className="my-10 mt-20 md:mb-0 font-NotoSarif">
            <h1 className="text-white font-bold text-4xl md:text-7xl">
              Plowing the earth
            </h1>
            <p className="text-white  text-3xl md:text-6xl my-2">harvesting hope</p>
            <p className="text-slate-50 text-lg md:text-xl mt-3">
              Education is the key to student success. Unlock your potential
              through learning. <br />
              Expand your horizons with the most.
            </p>
            <p className="text-slate-50 text-lg md:text-xl mt-3">
              {">>"} Crops of opportunity, fields of dreams.
            </p>
            <p className="text-slate-50 text-lg md:text-xl mt-3">
            {">>"} Where innovation meets cultivation.
            </p>
            <button className="bg-green-500 font-montserrat hover:bg-green-600 text-slate-200 py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 mt-3">
              View more
            </button>
          </div>
          <div className="w-full max-w-xs mt-20 sm:max-w-sm md:max-w-md lg:max-w-lg ">
            <img
              className="w-full h-auto object-cover"
              src="https://wphtml.com/html/tf/farmhub/assets/img/banner/hero1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
