import farmer from '/src/assets/Footer.png'
import React from 'react'

function Footer() {
  return (
    <div className="bg-green-900">
      <footer className="text-base-content p-10 mt-60">
        <div className="relative">
          {/*News Letter Section */}
          <div className="absolute inset-x-0 -top-96 md:-top-48 flex justify-center">
            <div className="p-2 border-2 border-white rounded-2xl">
              <div className="relative w-full md:w-[1200px] p-10 rounded-xl bg-yellow-500">
                <div className='flex flex-col md:flex-row justify-between   mx-auto'>
                  <div className='absolute bottom-0 left-0'>
                    <img className='w-[450px]' src={farmer} alt="" srcset="" />
                  </div>
                  <div  className='mt-14 ml-80'>
                    <h3 className="text-lg md:text-3xl font-bold text-start text-gray-800 mb-2">Subscribe to our Newsletter</h3>
                    <p className="text-gray-600 text-sm md:text-base mb-4 text-start">Get the latest updates and news right in your inbox!</p>
                    <div className="flex justify-center items-center gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="py-2 md:py-3 px-3 md:px-5 w-full md:w-[400px] text-sm md:text-lg rounded-xl  border border-gray-300"
                      />
                      <button className="py-2 md:py-3 px-3 md:px-5 text-sm md:text-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-gray-800 font-semibold rounded-xl">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className=" pt-36">
            <div className='flex flex-col lg:flex-row justify-center items-center mb-10'>
              {/* <img src={FooterImg} alt="Logo" className=" h-40 w-40- mb-4" /> */}
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center'>
              {/* Column-1: About Us */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
                <span className="text-gray-300 text-lg font-extrabold">About Us</span>
                <div className="text-sm text-gray-300 mt-4">
                  <p>We are a passionate team </p>
                  <p>dedicated to providing</p>
                  <p>the best services to our customers.</p>
                </div>
                <div className="flex items-center gap-x-4 mt-4 justify-center lg:justify-start">
                  <i className="fa-brands text-3xl text-white fa-square-facebook"></i>
                  <i className="fa-brands text-3xl text-white fa-square-x-twitter"></i>
                  <i className="fa-brands text-3xl text-white fa-youtube"></i>
                  <i className="fa-brands text-3xl text-white fa-instagram"></i>
                </div>
              </div>

              {/* Column-2: Quick Links */}
              <div className="flex flex-col items-center lg:items-start text-center text-white lg:text-left mb-8 lg:mb-0">
                <h3 className="text-center font-bold text-gray-300 text-lg mb-2 w-full">Quick Links</h3>
                <a className="hover:text-yellow-500 transition hover:scale-105 text-sm text-gray-300 cursor-pointer mb-2">Home</a>
                <a className="hover:text-yellow-500 transition hover:scale-105 text-sm text-gray-300 cursor-pointer mb-2">Services</a>
                <a className="hover:text-yellow-500 transition hover:scale-105 text-sm text-gray-300 cursor-pointer mb-2">About Us</a>
                <a className="hover:text-yellow-500 transition hover:scale-105 text-sm text-gray-300 cursor-pointer">Contact</a>
              </div>

              {/* Column-3: Subscribe */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
                <h3 className="text-lg font-bold text-gray-300 mb-2">Subscribe</h3>
                <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter for the latest updates</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="py-3 px-5 w-full rounded-l-xl text-sm md:text-lg focus:outline-none border border-gray-300"
                  />
                  <button className="py-3 px-5 text-sm md:text-lg bg-green-600 text-gray-50 font-bold rounded-r-xl">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider and Footer Bottom Text */}
        <hr className="border-t border-2 border-gray-100 opacity-5 w-full my-8" />
        <p className="text-center text-sm text-gray-300 p-5">
          &copy;2024 AgroZone All Rights Reserved
        </p>
      </footer>
    </div>
  )
}

export default Footer
