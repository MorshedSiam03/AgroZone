import './Navbar.css'

function Navbar() {
  return (
    
      // collaps navbar for small screen is required 
      <div className="image">
          <div className='w-full bg-green-900 h-24 sticky top-0 z-50'>
              <nav className='w-11/12 md:10/12 mx-auto pt-5 flex justify-between items-center flex-wrap '>
                  <div>
                      <h1 className='text-white font-extrabold text-2xl'>AgroZone</h1>
                  </div>

                  <div className='flex items-center gap-5 flex-wrap'>
                      <h1 className='text-slate-300 font-bold text-xl'>Home</h1>
                      <h1 className='text-slate-300 font-bold text-xl'>About Us</h1>
                      <h1 className='text-slate-300 font-bold text-xl'>Service</h1>
                      <h1 className='text-slate-300 font-bold text-xl'>Projects</h1>
                      <h1 className='text-slate-300 font-bold text-xl'>Blog</h1>
                      <h1 className='text-slate-300 font-bold text-xl'>Pages</h1>
                      <h1 className='text-slate-300 font-bold text-xl'>Contact</h1>
                      <button className='bg-green-500 hover:bg-green-600 text-slate-200 font-bold text-base sm:text-xl py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300'>
                          Get A Quote
                      </button>
                  </div>
              </nav>
          </div>

          <div className='w-10/12 mx-auto my-32 flex flex-col md:flex-row justify-between items-center'>
              <div className='mb-10 md:mb-0'>
                  <h1 className='text-gray-300 font-bold text-4xl md:text-7xl'>Plowing the earth <br /> harvesting hope</h1>
                  <p className='text-slate-50 text-lg md:text-xl mt-3'>Education is the key to student success. Unlock your potential through learning. <br />
                  Expand your horizons with the most.</p>
                  <p className='text-slate-50 text-lg md:text-xl mt-3'>Crops of opportunity, fields of dreams.</p>
                  <p className='text-slate-50 text-lg md:text-xl mt-3'>Where innovation meets cultivation.</p>
                  <button className='bg-green-500 hover:bg-green-600 text-slate-200 font-bold text-base sm:text-xl py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 mt-3'>View more</button>
                  
              </div>
              <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg '>
                  <img className='w-full h-auto object-cover' src="https://wphtml.com/html/tf/farmhub/assets/img/banner/hero1.png" alt="" />
              </div>
          </div>
      </div>
  );
};

export default Navbar
