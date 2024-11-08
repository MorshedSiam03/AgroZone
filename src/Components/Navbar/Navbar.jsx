import { LuMoveRight } from "react-icons/lu";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar bg-[#1f4e3d] sticky top-0 z-50 md:px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box text-black z-[20] mt-3 w-52 p-2 shadow"
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
          <img
            src="/src/assets/LogoNav.png"
            className="w-48 cursor-pointer"
            alt=""
          />
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
          <div className="hidden md:block">
            <a className="btn bg-[#2ab939] border-0 rounded-full text-white font-normal">
              Book a Consultant
            </a>
          </div>
        </div>
      </div>
      <div className="image">
        <div className=" md:mx-20 mx-4 flex flex-col md:flex-row justify-between items-center">
          <div className="my-10 lg:mt-40 md:mb-0 font-NotoSarif">
            <h1 className="text-white font-bold text-4xl md:text-7xl">
              Plowing the earth
            </h1>
            <p className="text-white  text-3xl md:text-6xl my-2">
              harvesting hope
            </p>
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
            <button className="bg-green-500 font-montserrat hover:bg-green-600 btn text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 mt-3">
              View more
            </button>
          </div>
          <div className="w-full ml-16 md:ml-0 max-w-xs md:mt-32 sm:max-w-sm md:max-w-md lg:max-w-lg ">
            <img
              className="w-[85%] border-gray-300 border-8 h-auto rounded-full object-cover"
              src="/src/assets/Hero.jpg"
              alt=""
            />
          </div>
        </div>
        {/* <div>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/Fg7ZEUAh90quVFwmwWyKQ"
            width="100%"
            style="height: 100%; min-height: 700px"
            frameborder="0"
          ></iframe>
        </div> */}
        
      </div>
    </>
  );
}

export default Navbar;
