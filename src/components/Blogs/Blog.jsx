import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { id, title, author, author_img, reading_times, posted_date, cover,hashtag } =
    blog;
  return (
    <div>
      <div className="">
        <div className="py-5">
          <img className="rounded-xl w-full" src={cover} alt="" />
        </div>
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-14">
              <img className="w-[80px] rounded-full" src={author_img} alt="" />
              <div className="">
                <p>{author}</p>
                <p>{posted_date}</p>
              </div>
            </div>
          <div className="">
            <p>{reading_times}</p>
          </div>
        </div>
        <h1>{title}</h1>
        <h1>{hashtag}</h1>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
