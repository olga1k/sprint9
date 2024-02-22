import { blogPosts } from "../data/blogPosts";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Blog() {
  const printBlogImg = () => {
    return blogPosts.map((blogPost) => (
      <Link to={`${blogPost.id}`} state={{ id: blogPost.id }}>
                <div className="flex flex-col justify-center size-72">

        <img
          className="size-64 rounded-3xl m-5"
          src={blogPost.image}
          alt={blogPost.title}
        />
                  <div className="font-thin w-full">{blogPost.title}</div>
                  </div>

      </Link>
    ));
  };
  //unnecessary?
  const pickPost = (e, name) => {
    const pickedPost = blogPosts.find((blogPost) => blogPost.title === name);
    console.log(pickedPost);
  };

  const blogImgs = printBlogImg();

  return (
      <main>

      <div className="text-center ">
        <h2 className="subtitle font-bold"> Blog</h2>
        <div className="flex margin-auto justify-center gap-5">{blogImgs}</div>
      </div>
      </main>

  );
}
