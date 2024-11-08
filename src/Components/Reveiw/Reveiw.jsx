

const Reveiw = () => {
    return (
        <div className="w-10/12 mx-auto text-center">
            <h1 className="font-bold text-2xl text-green-400">User Review</h1>
        <div className=" flex flex-col md:flex-row mt-5 md:mt-20 gap-10 mb-10">
            <div>
                {/* <h1>User Review</h1> */}
            </div>
            <div>
                <img className="rounded-2xl w-96 object-cover h-72" src="https://t4.ftcdn.net/jpg/07/94/11/61/240_F_794116151_VNPsLsLWpJkI4TamjpIXAa51CFJ0Mcx1.jpg" alt="" />

            </div>

           <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-200 w-full h-90">
           <div class="flex items-center justify-between ">
        <span class="text-sm font-light text-gray-600 dark:text-black">Nov 10, 2024</span>
        <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">Review</a>
    </div>

    <div class="mt-2">
        <a href="#" class="text-xl font-bold text-gray-700 dark:text-gray-500 hover:text-green-400 dark:hover:text-green-300 hover:underline" tabindex="0" role="link">User reveiw about this system</a>
        <p class="mt-2 text-black dark:text-black">I found this idea is nobel. This web site can help our farmer about their regular problem they can have competitive market price also help about scientific method of cultivation</p>
    </div>

    <div class="flex items-center justify-between mt-4">
        <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link">Read more</a>

        <div class="flex items-center">
            <img class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar">
            </img>
            <a class="font-bold text-gray-700 cursor-pointer dark:text-black" tabindex="0" role="link">Nabil</a>
        </div>
    </div>
    </div>

                


            
            
        </div>
           </div>
    );
};

export default Reveiw;