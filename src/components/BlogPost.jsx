import { useLocation } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
export default function BlogPost() {
  const location = useLocation();
  const pickedId = location.state.id - 1;
  const pickedPost = blogPosts[pickedId];




    return(
      <main>
      <h2 className="text-center m-5 size-lg">{pickedPost.title}</h2>
      <img className="w-4/12 rounded-lg opacity-70 m-auto" src={pickedPost.image}/>
      </main>
      
    )
}