import "./App.css";
import { useState, useEffect } from "react";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);
  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }
  return (
      <div className="app">
      <div className="card">
      <h1 className="heading">{quote?.text}</h1>
      <i>- {quote?.author}</i>
      <section>
      <br></br>
        <button className="button" onClick={getNewQuote}>
          <span>HIT ME TO BOOST YOU UP!!</span>
            </button>
        
      </section>
      </div>
      </div>
      
  );
}
