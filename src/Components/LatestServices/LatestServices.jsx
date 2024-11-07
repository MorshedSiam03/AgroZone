

const LatestServices = () => {
    return (
        <div className=" pt-10 ">

             <div className="text-center  w-full">
                <h1 className="text-green-400 font-bold text-xl mt-10">OUR Latest Service</h1>
                <h1 className="text-gray-700 font-bold text-2xl md:text-4xl">Harvesting dreams one <br /> crop at a time</h1>

            </div>

       <div className="w-10/12 md:w-9/12 mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
       {/* cart-1  */}
       <div className="flex items-center border rounded-lg p-6 shadow-md max-w-sm bg-white">
            
            <div >
                <img src="assets/count1.svg" alt="" />
            </div>

            <div className="border-l h-24 mx-4"></div>

            <div>
                <h2 className="text-lg font-bold text-green-700">Green Grow</h2>
                <p className="text-gray-600 text-sm mb-2">
                    Agriculture and farming are essential industries
                </p>

                <h1  className="text-gray-800 font-semibold flex items-center">
                    Read More <span className="ml-1 text-green-500">→</span>
                </h1>
            </div>
        
            
        </div>
        {/* cart-2  */}
        <div className="flex items-center border rounded-lg p-6 shadow-md max-w-sm bg-white">
            
            <div >
                <img src="assets/wheat-sesh.svg" alt="" />
            </div>

            <div className="border-l h-24 mx-4"></div>

            <div>
                <h2 className="text-lg font-bold text-green-700">Green Grow</h2>
                <p className="text-gray-600 text-sm mb-2">
                    Agriculture and farming are essential industries
                </p>

                <h1  className="text-gray-800 font-semibold flex items-center">
                    Read More <span className="ml-1 text-green-500">→</span>
                </h1>
            </div>
        </div>

        {/* cart-3  */}
        <div className="flex items-center border rounded-lg p-6 shadow-md max-w-sm bg-white">
            
            <div >
                <img src="assets/smart-flower.svg" alt="" />
            </div>

            <div className="border-l h-24 mx-4"></div>

            <div>
                <h2 className="text-lg font-bold text-green-700">Green Grow</h2>
                <p className="text-gray-600 text-sm mb-2">
                    Agriculture and farming are essential industries
                </p>

                <h1  className="text-gray-800 font-semibold flex items-center">
                    Read More <span className="ml-1 text-green-500">→</span>
                </h1>
            </div>
        </div>
            
        </div>
        </div>
        
       
    );
};

export default LatestServices;