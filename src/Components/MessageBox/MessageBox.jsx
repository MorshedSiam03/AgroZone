import React from 'react';
import img from '../../assets/element.png'
const MessageBox = () => {
    return (
        <div className="bg-[url('assets/element.png')] object-cover bg-no-repeat mt-16 bg-green-900 mb-24">
            <div className='flex flex-col md:flex-row justify-between items-center w-10/12 mx-auto space-x-20'>
                {/* Card & Title */}
                <div className="w-full md:w-1/2">
                    <div className="  text-gray-50 space-y-4 mt-6" >
                        <h4 className='text-green-500'>Who we are</h4>
                        <h1 className='text-2xl md:text-5xl'>Nourishing world from seed to table</h1>
                        <p>Agriculture and farming are essential industries that involve the cultivation of crops,raising of livestock, and production of food.</p>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className="card w-72 h-72 shadow-xl mt-10 mb-10 bg-[#2A5747]">
                            <figure className="px-10 pt-10 cursor-pointer">
                                <img
                                    src="https://wphtml.com/html/tf/farmhub/assets/img/icon/hand-planp900.svg"
                                    alt="Shoes"
                                    className="rounded-xl bg-yellow-500 p-6" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-white font-semibold hover:text-green-500 hover:scale-105 transition ease-in duration-300">Growing stron
                                    a feeding</h2>
                            </div>
                        </div>
                        <div className="card w-72 h-72 shadow-xl mt-10 mb-10 bg-[#2A5747]">
                            <figure className="px-10 pt-10 cursor-pointer">
                                <img
                                    src="https://wphtml.com/html/tf/farmhub/assets/img/icon/wheath-p900.svg"
                                    alt="Shoes"
                                    className="rounded-xl bg-yellow-500 p-6" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-white font-semibold hover:text-green-500 hover:scale-105 transition ease-in duration-300">Taking care of
                                    the Earth</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Message */}
                <div className='w-full md:w-1/2'>
                    <div className='bg-[#2A5747] p-11 rounded-xl mt-5'>
                        <h2 className='text-gray-50 text-xl md:text-4xl fon font-semibold md:font-bold'>Leave a message</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2  gap-5  mt-6 mb-4'>
                            <input type="text" placeholder="Name" className="input bg-gray-200 input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Email" className="input bg-gray-200 input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Your Number" className="input bg-gray-200 input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Area" className="input bg-gray-200 input-bordered w-full max-w-xs" />
                        </div>
                        <textarea className="textarea bg-gray-200 w-[80%] md:w-full textarea-bordered mb-4" placeholder="Message"></textarea>
                        <button className="bg-yellow-500 w-[80%] md:w-full hover:bg-green-600 text-green-700 font-bold text-base sm:text-xl py-2 sm:py-3 px-24 md:px-44 rounded-full transition duration-300 mb-12">
                            Submit Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageBox;