import { useEffect, useState } from "react";

export default function LearnWords() {
  const [wordsLearn, setWordsLearn] = useState([]);
  const [userWords, setUserWords] = useState([]);
  //const [isClicked, setIsClicked] = useState(false);
  const [showWords, setShowWords] = useState(false);
  const [numWords, setNumWords] = useState(7);
  //const [newFields, setNewFields] = useState([]);
  const [showFields, setShowFields] = useState(true);
  const [clickedIndex, setClickedIndex] = useState(null);

  const fetchWords = async () => {
    console.log("fetchWords fired");
    try {
      const fetchPromises = userWords.map(async (word) => {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch word");
        }
        return response.json();
      });

      const wordDataArray = await Promise.all(fetchPromises);
      console.log(wordDataArray);

      const wordDefinitions = wordDataArray.map((data) => ({
        word: data[0].word,
        definition: data[0].meanings[0].definitions[0].definition,
      }));
      console.log(wordDefinitions);

      setWordsLearn(wordDefinitions);
      console.log(wordsLearn, "wordsLearn");
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  const handleClick = (index) => {
    setWordsLearn(prevWordsLearn => {
      const updatedWordsLearn = [...prevWordsLearn];
      updatedWordsLearn[index] = {
        ...updatedWordsLearn[index],
        isClicked: !updatedWordsLearn[index].isClicked
      };
      return updatedWordsLearn;
    });
  };
  

  const handleSubmitNum = async (e) => {
    e.preventDefault();
    setNumWords(e.target.value);
    console.log(e.target.value, numWords, "numWords");
    setShowFields(true);
    initializeWordsLearn(parseInt(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchWords();
    setShowWords(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const index = parseInt(name);
    const newWords = [...userWords];
    newWords[index] = value;
    setUserWords(newWords);
  };
  const initializeWordsLearn = (num) => {
    const initialWordsLearn = Array.from({ length: num }, (_, index) => ({
      word: "",
      definition: "",
      isClicked: false,
    }));
    setWordsLearn(initialWordsLearn);
  };
  const printFields = () => {
    console.log("printFields fired")
    if (showFields) {
      const newFields = Array.from({ length: numWords }, (_, index) => ({
        //needed??
        id: index,
        value: "",
      }));

      return newFields.map((field, index) => (
        <input
          className="p-2"
          key={field.id}
          type="text"
          name={index}
          value={userWords[index]}
          onChange={handleChange}
        ></input>
      ));
    }
  };
  const fields = printFields();


  const printWords = () => {
    if (wordsLearn.length > 0) {
      return wordsLearn.map((word, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`p-2 m-2 card ${word.isClicked ? "is-flipped" : ""}`}
        >
          <div className="card__face card__face--front flex items-center justify-center">{word.word}</div>
          <div className="card__face card__face--back flex items-center justify-center">{word.definition}</div>
        </div>
      ));
    }
  };
  const wordsToLearn = printWords();



  //DELETE IF NOT INSERTED
  /*<div className=" rounded-full w-4/12 flex flex-col gap-5 m-auto p-5 justify-center items-center text-white">
          <h2 className="font-bold text-center text-light-green">
            How many phrases do you want to learn?
          </h2>

          <form className="flex gap-3">
            <input
              className="px-6 rounded-full size-16 bg-light-green"
              type="text"
              placeholder="up to 20 phrases"
              name="numWords"
              value={numWords}
              onChange={(e) => {
                setNumWords(e.target.value);
                initializeWordsLearn(parseInt(e.target.value));
              }}
            />
            <button type="submit" onClick={handleSubmitNum}>
              Submit
            </button>
          </form>
        </div> */

  return (
    <main>
      <h2 className="subtitle font-bold text-center"> Create Your Quiz</h2>
      <div className="flex items-start h-full">
        <div className="bg-light-green rounded-3xl w-4/12 flex m-auto p-5 justify-center items-center text-white">
          <form className="flex flex-col gap-3">
            <h2 className="text-center text-2xl">Throw in Your Own Phrases</h2>
            {fields}

            <button type="submit" className="m-auto text-center p-3 rounded-3xl  text-light-green w-11/12 bg-white " onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
      {showWords && (
        <div className="m-auto">
          <div className="flex flex-wrap my-2 gap-3 justify-center text-center m-auto">
            {wordsToLearn}
          </div>
        </div>
      )}
    </main>
  );
}
