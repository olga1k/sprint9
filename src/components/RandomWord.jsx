import axios from "axios";

export default function RandomWord() {
  // I have a list of words I can get them by index
  //get a random word
  const apiRandom = "https://random-word-api.herokuapp.com/word?lang=en";
/*
  const fetchRandom = async () => {
    try {
      const response = await axios.get(apiRandom, {
        headers: {
          "Cache-Control": "no-cache",
          //  "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log("word", response.json());
    } catch (error) {
      console.error(error);
    }
  };*/

  const randomWord = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
    .then(response => {
        const data = response.json();
    })
    
    .then(data => {
      //console.log("getword", data[0])
      console.log("data", data)
        //word.textContent = response
      // randomDefinition(word);
    })
    .catch(err => {
        console.log(err);
        return "No Word Available"
    });

}
randomWord()
//const newWord = randomWord(word);
  const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          "Cache-Control": "no-cache",
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();

  return (
    <div className="random-wrapper">
      <h2>What does it mean?</h2>
      <p>The word is <span>{}</span></p>
    </div>
  );
}
