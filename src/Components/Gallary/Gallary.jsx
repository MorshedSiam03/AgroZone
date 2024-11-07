

const Gallary = () => {
    return (
        <div className="w-full bg-slate-100 h-auto pt-10 mt-10   ">
            <div className="text-center  w-full">
                <h1 className="text-green-400 font-bold text-xl mt-10">OUR GALLARY</h1>
                <h1 className="text-gray-700 font-bold text-2xl md:text-4xl">Bringing nature's bounty <br /> to your plate</h1>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-10 w-10/12 mx-auto gap-4  pb-5 ">
                <img className="rounded-2xl w-full h-48 md:h-80 object-cover" src="https://plus.unsplash.com/premium_photo-1682092642861-742c2a19d652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFuZ2xhZGVzaCUyMGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <img   className="rounded-2xl w-full h-48 md:h-80 object-cover" src="https://images.unsplash.com/photo-1644101211459-7f9be46fad04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZ2xhZGVzaCUyMGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <img   className="rounded-2xl w-full h-48 md:h-80 object-cover" src="https://media.istockphoto.com/id/2101256208/photo/pumpkin-in-hand-on-the-background-of-the-field-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=YsZm-SEjljwEEO9_YoYMIodU4YaVKN4LhSzHyld8F7Y=" alt="" />
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
                   
                    
        

            
            
        
    );
};
export default Gallary;