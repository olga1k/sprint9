import { homeData } from "../data/homeData";
import { Link } from "react-router-dom";
export default function HomeCategories() {
  const printCategories = () => {
    return homeData.map((cat, index) => (
      <div className="flex flex-col" key={index}>
        <Link to={cat.link}>
          <div className="category glass size-72 mx-auto my-3 rounded-3xl pt-10 cursor-pointer relative bg-light-green">
            <div className="glass rounded-full size-12 absolute top-5 left-16"></div>

            <img className="size-28 m-auto rounded-full " src={cat.image} />
            <div className="glass rounded-full size-20 top-24 left-36 absolute"></div>

            <h2 className="text-center align-middle mt-12 text-lg">
              {cat.title}
            </h2>
          </div>
        </Link>
      </div>
    ));
  };
  const categories = printCategories();
  return (
    <div className="flex flex-wrap justify-between m-auto w-8/12 mt-10">
      {categories}
    </div>
  );
}
