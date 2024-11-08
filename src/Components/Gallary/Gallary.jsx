const Gallary = () => {
  return (
    <div className="w-full bg-slate-100 h-auto pt-10 mt-10   ">
      <div className="text-center  w-full">
        <h1 className="text-green-400  text-xl mt-10 font-Mali">OUR GALLARY</h1>
        <h1 className="text-gray-700 font-semibold text-2xl md:text-4xl font-NotoSarif">
          Bringing nature's bounty <br /> to your plate
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-9 mt-10 w-10/12 mx-auto gap-4 pb-5">
        <img
          className="rounded-2xl w-full h-80 object-cover col-span-5"
          src="/src/assets/Banner1.jpg"
          alt=""
        />

        <img
          className="rounded-2xl w-full h-80 object-cover col-span-5  md:col-span-4"
          src="/src/assets/Banner4.jpg"
          alt=""
        />

        <img
          className="rounded-2xl w-full md:h-96 object-cover col-span-5 md:col-span-3 row-span-2"
          src="/src/assets/Banner3.jpg"
          alt=""
        />
        <img
          className="rounded-2xl w-full h-96 object-cover col-span-5 md:col-span-3"
          src="/src/assets/Banner2.jpg"
          alt=""
        />

            <div className="grid grid-cols-1 md:grid-cols-3 mt-10 w-10/12 mx-auto gap-4  pb-5 ">
            <div className="grid md:grid-cols-2/3 ">
            <img className="rounded-2xl w-full h-48 md:h-80 object-cover" src="https://plus.unsplash.com/premium_photo-1682092642861-742c2a19d652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFuZ2xhZGVzaCUyMGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />

            </div>
            <div className="grid md:grid-cols-1/3">
            <img   className="rounded-2xl w-full h-48 md:h-80 object-cover" src="https://media.istockphoto.com/id/2101256208/photo/pumpkin-in-hand-on-the-background-of-the-field-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=YsZm-SEjljwEEO9_YoYMIodU4YaVKN4LhSzHyld8F7Y=" alt="" />

            </div>
                <img   className="rounded-2xl w-full h-48 md:h-80 object-cover" src="https://images.unsplash.com/photo-1681645695857-3d93ac43de56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhbmdsYWRlc2glMjBmYXJtZXJ8ZW58MHx8MHx8fDA%3D" alt="" />
                <img   className="rounded-2xl w-full h-48 md:h-80 object-cover" src="https://media.istockphoto.com/id/1312767296/photo/hands-with-bangles-picking-up-tea-leaves.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZLNko5b84oILLcplQirABsk0XiBAZLgf9dYMoOog-qA=" alt="" />
                <img
                        className="rounded-2xl w-full h-48 md:h-80 object-cover"
                        src="https://cdn.pixabay.com/photo/2022/01/06/19/23/shepherd-6920164_640.jpg"
                        alt=""
                    />
                    </div>
            <div className="flex justify-center pb-5 mb-10">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-xl py-2 sm:py-3 px-24 md:px-44 rounded-full transition duration-300">
                    View All Projects
                </button>
            </div>
        </div>
                   
                    
        


        <div className="col-span-5 md:col-span-3 grid grid-rows-6 gap-3">
          <img
            className="rounded-2xl w-full h-80 object-cover row-span-5"
            src="https://media.istockphoto.com/id/1312767296/photo/hands-with-bangles-picking-up-tea-leaves.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZLNko5b84oILLcplQirABsk0XiBAZLgf9dYMoOog-qA="
            alt=""
          />
          <button className="btn rounded-2xl text-white font-montserrat row-span-1 w-full bg-green-500">
            View More
          </button>
            
        </div>
      </div>
    </div>
  );
};
export default Gallary;
