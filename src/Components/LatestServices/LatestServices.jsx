

const LatestServices = () => {
    return (
        <div className=" pt-10 ">

             <div className="text-center  w-full">
                <h1 className="text-green-400 font-Mali text-xl mt-10">OUR Latest Service</h1>
                <h1 className="text-gray-700 font-semibold font-NotoSarif text-2xl md:text-4xl">Harvesting dreams one <br /> crop at a time</h1>

            </div>

       <div className="px-4 lg:mx-40 mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
       {/* cart-1  */}
       <div className="flex items-center border rounded-lg p-6 shadow-md max-w-lg bg-white">
            
            <div >
                <img src="assets/count1.svg" alt="" />
            </div>

            <div className="border-l h-24 mx-4"></div>

            <div>
                <h2 className="text-lg font-bold text-green-700">E-Bazar</h2>
                <p className="text-gray-600 text-sm mb-2">
                    Customer can purchase product and farmer can buy their goods.
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
                <h2 className="text-lg font-bold text-green-700">Agro consultation</h2>
                <p className="text-gray-600 text-sm mb-2">
                    Farmers can take appointment for specialist. 
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
                <h2 className="text-lg font-bold text-green-700">Smart Farming</h2>
                <p className="text-gray-600 text-sm mb-2">
                    Our blog and Ai integration will educate farmers.
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