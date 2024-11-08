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
