import { brAmQuizzes } from "../data/brAm";
import { Link } from "react-router-dom";
//        className="w-3/12 rounded-3xl h-25"
//<div className="grid m-auto justify-center grid-cols-4 gap-4">


export default function BrAmQuizzes() {
  const printBrAmImg = () => {
    return brAmQuizzes.map((quiz, index) => (
      <Link key={index} to={`${quiz.id}`} state={{ id: quiz.id }}>
        <div className="flex flex-col justify-center">
          <img
            className="size-64 rounded-3xl object-cover text-center m-auto "
            src={quiz.image}
            alt={quiz.title}
          />
          <div className="font-thin">{quiz.title}</div>
        </div>
      </Link>
    ));
  };
  /*
  const pickTrailer = (e, name) => {
    const pickedTrailer = trailerQuizzes.find(
      (trailer) => trailer.title === name
    );
    console.log(pickedTrailer);
  };
*/
  const brAmImgs = printBrAmImg();

  return (
      <main>
      <section className="m-auto w-8/12">

        <div className="text-center font-bold">
          <h2 className="text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-5xl mb-5">Challenge your Intuition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 m-auto justify-center gap-4">
            {brAmImgs}
          </div>
        </div>
        </section>
      </main>
  );
}
