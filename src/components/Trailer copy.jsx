import { trailerQuizzes } from "../data/trailer-quizzes";
import { useState } from "react";
import { useLocation } from "react-router-dom";


export default function Trailer() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const pickedId = location.state.id - 1;
  console.log(pickedId);
  const pickedTrailer = trailerQuizzes[pickedId];
  const correctAnswers = pickedTrailer.trailerQuizKey;
  const [userCorrectAnswers, setUserCorrectAnswers] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(pickedTrailer.trailerQuizQuestions.length).fill("")
  );
  const [submitted, setSubmitted] = useState(false); 


  const handleAnswerChange = (index, e) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = e.target.value;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const checkCorrect = correctAnswers.every(
      (element, index) => element === userAnswers[index]
    );
    const countCorrectAnswers = correctAnswers.filter((answer, index) => answer === userAnswers[index]);
    setUserCorrectAnswers(countCorrectAnswers);

    console.log("user answers", userAnswers);
    console.log("correctAnswers", correctAnswers);
    console.log("checkCorrect", checkCorrect);
    setShowModal(true);
    setSubmitted(true); 

  };

  const printResult = () => {
    const showAnswers = correctAnswers.map(answer => (
      <p>{answer}</p>
    ))

    return (
      <div className="glass w-5/12 m-auto p-5 text-center">
        <h3 className="subtitle text-1xl " >Your Score: {userCorrectAnswers.length}/{correctAnswers.length}</h3>
        {showAnswers}

      </div>
    );
  };

  const showResult = printResult();

  return (
    <>
      <main>
        <div className="trailer-quiz-wrapper flex flex-col gap-5">
          <h2 className="text-4xl text-center font-bold">{pickedTrailer.title}</h2>
          <div className="trailer">
            <iframe
              className="rounded-2xl mx-auto w-5/12"
              width="420"
              height="315"
              src={pickedTrailer.trailerUrl}
            ></iframe>
          </div>
          <h3 className="text-center">Fill in the blanks</h3>
          <div className="trailer-quiz glass flex flex-col justify-center gap-6 py-4 px-2 m-auto w-5/12 border-dark-blue">
            {pickedTrailer.trailerQuizQuestions.map((qu, quIndex) => (
              <div className="" key={quIndex}>
                {qu.map((part, partIndex) =>
                  typeof part === "string" ? (
                    part
                  ) : (
                    <input
                      key={partIndex}
                      type="text"
                      value={userAnswers[quIndex]}
                      onChange={(e) => handleAnswerChange(quIndex, e)}
                      className={submitted && correctAnswers[quIndex] === userAnswers[quIndex] ? "correct" : (submitted ? "wrong" : "")}
                    />
                  )
                )}
              </div>
            ))}

            <button className="glass p-2 w-5/12 m-auto bg-light-green text-white" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          {showModal && showResult}
        </div>
      </main>
    </>
  );
}

