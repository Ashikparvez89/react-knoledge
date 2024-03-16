
import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    console.log(blog)
    return (
        <div>

            <div className="">
                <div className="">
                    <img src={blog.cover} alt="" />
                </div>
            </div>
            
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired
}

export default Blog;