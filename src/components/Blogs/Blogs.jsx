import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    }, [])


    return (
        <div className="w-2/3 mt-5">
            {
                blogs.map(blog=><Blog blog={blog} key={blog.id}></Blog>)
            }

        </div>
    );
};

export default Blogs;