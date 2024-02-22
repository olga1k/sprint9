import { trailerQuizzes } from "../data/trailer-quizzes";
import { Link } from "react-router-dom";

export default function Trailers() {
  const printTrailersImg = () => {
    return trailerQuizzes.map((trailer, index) => (
      <Link key={index} to={`${trailer.id}`} state={{ id: trailer.id }}>
        <img
          className="size-64 rounded-3xl object-cover my-3"
          src={trailer.image}
          alt={trailer.title}
        />
      </Link>
    ));
  };

  const pickTrailer = (e, name) => {
    const pickedTrailer = trailerQuizzes.find(
      (trailer) => trailer.title === name
    );
    console.log(pickedTrailer);
  };

  const trailersImgs = printTrailersImg();

  return (
    <>
      <main>
        <section className="m-auto w-8/12">
          <h2 className="text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-5xl mb-5 font-bold text-center">
            Improve your English with Movie Trailers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 m-auto justify-center gap-4">
            {trailersImgs}
          </div>
        </section>
      </main>
    </>
  );
}
