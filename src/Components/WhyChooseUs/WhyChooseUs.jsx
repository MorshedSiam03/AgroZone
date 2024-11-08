const WhyChooseUs = () => {
  return (
    <div className="mt-16 md:w-9/12 w-11/12 mx-auto flex flex-col md:flex-row  ">
      <div className="w-full md:w-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ">
        <div className="">
          {" "}
          <img
            className="w-[80%] h-auto border-spacing-2 border-2 border-green-400 rounded-full object-cover"
            src="https://img.freepik.com/premium-photo/indian-milk-dairy-farmer-busy-using-mobile-phone-farm-house_662214-368598.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 text-center  md:text-left">
        <h1 className="text-green-400 text-xl font-Mali">Why Choose us</h1>
        <h1 className="text-4xl text-slate-600 font-semibold font-NotoSarif">
          Farming with passion the <br /> feeding purpose
        </h1>
        <p className="text-lg text-slate-500 mt-5 font-NotoSarif">
          Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies
          dictum se facilisis sem. Imperdiet massa turpis sit Lorem ipsum dolor
          sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem.
          Imperdiet
        </p>
        <div className="my-5">
          <h1 className="font-NotoSarif">
            Puer and organic <span className="ml-48">70%</span>
          </h1>
          <progress
            className="progress progress-accent w-[90%]"
            value="70"
            max="100"
          >
            70%
          </progress>
          <br />
          <h1 className="font-NotoSarif">
            Healty Food <span className="ml-72">80%</span>
          </h1>
          <progress
            className="progress progress-accent w-[90%]"
            value="85"
            max="100"
          ></progress>
          <br />
        </div>

        <button className="bg-[#fdd61f]  hover:bg-[#2ab939]  font-montserrat  py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 mt-3">
          Read more
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
