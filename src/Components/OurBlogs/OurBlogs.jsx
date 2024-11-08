import { useEffect, useState } from "react";
import OurBlog from "../OurBlog/OurBlog";

const OurBlogs = () => {
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('OurBlogs.json')
        .then(response=>response.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-11/12 mx-auto">
            {/* Blog Titles */}
            <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl text-center text-green-600 font-semibold lg:font-bold ">Our Blogs</h3>
                <h2 className="text-xl md:text-3xl lg:text-5xl text-center mt-6 text-gray-900 mb-12 font-semibold lg:font-bold">Cultivating a sustainable future for all</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ml-8 md:ml-12 ">
               {
                blogs.map((blog)=><OurBlog key={blog.id} blog={blog}></OurBlog>)
               }
            </div>
        </div>
    );
};

export default OurBlogs;