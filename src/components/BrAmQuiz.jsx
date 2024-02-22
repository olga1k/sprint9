import React from "react";
import { brAmQuizzes } from "../data/brAm";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

export default function BrAmQuiz() {
  const [brAmQuizzes2, setBrAmQuizzes2] = useState(brAmQuizzes);
  const [quizData, setQuizData] = useState(null);
  console.log("brAmQuizzes2", brAmQuizzes2);

  const location = useLocation();
  console.log("location", location.state.id);
  const pickedId = location.state.id - 1;
  const pickedQuiz = brAmQuizzes2[pickedId];
  console.log("pickedQuiz", pickedQuiz);

  useEffect(() => {
    if (!brAmQuizzes2) {
      return;
    }

    const quizInfo = pickedQuiz.quizQuestions.map((qu, index) => (
      <div className="h-64 m-5 glass flex flex-col justify-center relative" key={index}> 
        <h4 className="mb-4">{qu.question}</h4>
        <img className="word-img size-32 rounded-md mx-auto" src={qu.image} />
        <div className="flex flex-row justify-around">
          {qu.variants.map((variant, index) => (
            <div className="size-15 rounded-full p-1" key={index}>
                <div
                  className={`word text-4xl ${
                    variant.clicked
                      ? variant.isCorrect
                        ? "correct"
                        : "wrong"
                      : ""
                  }`}
                  onClick={() =>
                    checkAnswer(
                      pickedQuiz,
                      qu,
                      variant,
                      variant.word1,
                      variant.region,
                      variant.isCorrect
                    )
                  }
                >
                  {variant.word1}
                </div>
                <div
                  className={`word text-4xl ${
                    variant.clicked
                      ? variant.isCorrect
                        ? "correct"
                        : "wrong"
                      : ""
                  }`}
                  value={variant.word2}
                  onClick={() =>
                    checkAnswer(
                      pickedQuiz,
                      qu,
                      variant,
                      variant.word1,
                      variant.region,
                      variant.isCorrect
                    )
                  }
                >
                  {variant.word2}
                </div>
                {qu.variants.some(variant => variant.clicked) && <div className="example glass rounded-full size-48 absolute -right-16 -top-7 flex items-center p-1">{qu.examplePhrase}</div>}

            </div>

          ))}
        </div>
      </div>
    ));

    setQuizData(quizInfo);
  }, [brAmQuizzes2]);

  const checkAnswer = (
    currentQuiz,
    currentQu,
    currentVariant,
    word,
    region,
    isCorrect
  ) => {

    setBrAmQuizzes2((prevQuizzes) => {
      const updatedQuizzes = prevQuizzes.map((quiz) => {
        if (quiz.id !== currentQuiz.id) return quiz;

        const updatedQuestions = quiz.quizQuestions.map((question) => {
          if (question.questionId !== currentQu.questionId) return question;

          const updatedVariants = question.variants.map((variant) => {
            if (variant.wordIndex !== currentVariant.wordIndex) return variant;

            return { ...variant, clicked: true };
          });

          return { ...question, variants: updatedVariants };
        });

        return { ...quiz, quizQuestions: updatedQuestions };
      });

      return updatedQuizzes;
    });
  };



  return (
    <>
        <main>
          <div className="text-center">
          <h3 className="text-5xl font-bold mb-5">{pickedQuiz.title.toUpperCase()}</h3>

            <div className="word word-left br-am-wrapper text-center p-5 w-6/12 m-auto">
              {quizData}
            </div>
          </div>
        </main>
    </>
  );
}
