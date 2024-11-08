import { FaArrowRight, FaRegComments } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

const OurBlog = ({ blog }) => {
    const { title, image, description, author, comments } = blog;
    console.log(blog)
    return (
        <div className="relative card bg-base-100 w-96 shadow-xl mb-56">
            <figure className="">
                <img
                    src={image}
                    alt="farm" />
            </figure>
            <div className=" absolute bg-gray-50 rounded-xl -bottom-52 left-20 card-body ">
                <div className="flex items-center gap-2">
                    <FaRegComments /><p>Comments ({comments.length})</p>
                    <IoPersonOutline /><p>By {author}</p>
                </div>
                <h2 className="card-title text-green-600 font-semibold">{title}</h2>
                <p className="">{description}</p>
                <div className="card-actions justify-start">
                    <button className=" btn rounded-full flex justify-between items-center gap-1 hover:text-green-600">Read More<FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default OurBlog;