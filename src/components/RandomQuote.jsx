import axios from "axios";
import { useState, useEffect } from "react";

export default function RandomQuote() {
  const [quote, setQuote] = useState({ author: "", content: "" });

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/quotes/random");
        if (!response.ok) {
          throw new Error("Failed to fetch quote");
        }
        const data = await response.json();
        setQuote({ author: data[0].author, content: data[0].content });
        console.log("quote", quote);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchQuote();
  }, []);
  const [visible, setVisible] = useState(false);

  const makeVisible = () => {
    setVisible(true);


  }

  return (
    <>
      <h2>Get Inspired!</h2>
      <div className={!visible && "blurred"} onClick={makeVisible}>
      <p>"{quote.content}"</p>
      <p>{quote.author}</p>
      </div>
    </>
  );
}
