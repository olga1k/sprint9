import { useEffect, useState } from "react";
import { matchQuizzes, foodIdiomsArray } from "../data/match";
import SingleCard from "./SingleCard";

export default function Match() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...foodIdiomsArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);

    setCards(shuffledCards);
    setTurns(0);
  };
  //handle choice

  const handleChoice = (card) => {
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    console.log("choices", choiceOne, choiceTwo);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.idCard === choiceTwo.idCard) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.idCard === choiceOne.idCard) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <main>
      <h2 className="text-4xl text-center font-bold">Challenge Your Memory</h2>

      <div className="p-5">
        <div className="flex justify-center gap-3 m-auto m-4 items-center">
          <button
            className="text-center p-3 rounded-3xl text-white w-32 bg-blue hover:bg-light-green m-5"
            onClick={shuffleCards}
          >
            New Game
          </button>
          <div>Turns: {turns}</div>
        </div>
        <div className="card-grid w-5/12 m-auto">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
