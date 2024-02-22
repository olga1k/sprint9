import { Link } from "react-router-dom";
export const idioms = "./home/idioms.jpg";
import { features } from "../data/homeData";

export default function Intro() {
  const renderFeatures = () => {
    return features.map((feature, index) => (
      <div
        key={index}
        className="bg-white p-5 rounded-2xl size-60 flex flex-col items-center"
      >
        <h2
          className={`text-center p-3 rounded-3xl text-white w-11/12 bg-${feature.color}`}
        >
          {feature.title}
        </h2>
        <p className="text-gray text-sm mt-4 font-thin">
          {feature.description}
        </p>
      </div>
    ));
  };

  return (
    <>
      <section className="bg-blue w-8/12 m-auto p-5 rounded-3xl text-white">
        <div className="flex m-auto justify-around w-12/12">
          <div className="flex flex-col justify-around w-6/12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:text-7xl">Fun English</h1>
            <p>
              "Revolutionize Your English Learning Experience: Dive into Dynamic
              Challenges, Engage with Interactive Content, and Watch Your Skills
              Soar!"
            </p>
          </div>
          <img className="hidden md:block home-img size-56 rounded-2xl" src={idioms} />
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap m-auto mt-10 text-dark-blue justify-center gap-7 w-12/12">
          {renderFeatures()}
        </div>
      </section>
      <div className="border-2 border-blue w-8/12 mt-10 m-auto p-5 rounded-3xl text-dark-blue p-10 text-center dark:text-white">
        "Embark on an Epic Language Journey: Dive into Engaging Quizzes, Explore
        Vibrant Cultures, Master Vocabulary with Flashcards, and Conquer Daily
        Challenges to Unlock Your Full Potential in English!"
      </div>
    </>
  );
}
