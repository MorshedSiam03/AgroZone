

const WhyChooseUs = () => {
    return (
        <div className="mt-16 md:w-9/12 w-11/12 mx-auto flex flex-col md:flex-row gap-10 md:gap-40 ">
        <div className="w-full md:w-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ">
            <img className="w-full h-auto object-cover" src="https://wphtml.com/html/tf/farmhub/assets/img/about/choose-man.png" alt="" />
        </div>

        <div className="w-full md:w-1/2 text-center  md:text-left">
             <h1 className="text-green-400 font-bold text-xl">Why Choose us</h1> 
             <h1 className="text-4xl text-slate-600 font-bold">Farming with passion the <br /> feeding purpose</h1>
             <p className="text-lg text-slate-500 mt-5">Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum se facilisis sem. Imperdiet massa turpis sit Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem. Imperdiet</p>

             <button className='bg-green-500 hover:bg-green-600 text-slate-200 font-bold text-base sm:text-xl py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300 mt-3'>View more</button>

        </div>
        
    </div>
);
};

export default WhyChooseUs;