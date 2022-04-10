import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [state, setState] = useState("START");

  const [guess, setGuess] = useState(150);
  const [numOfGuesses, setNumOfGuesses] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const startGame = () => {
    setState("PLAYING");
    setGuess(150);
    setNumOfGuesses(1);
    setMin(0);
    setMax(300);
  };
  if (state === "START") {
    return <button onClick={startGame}>Comecar o Jogo!</button>;
  }

  const lessThen = () => {
    setNumOfGuesses(numOfGuesses + 1);
    setMax(guess);
    const nextGuess = parseInt((guess - min) / 2) + min;
    setGuess(nextGuess);
  };
  const greaterThen = () => {
    setNumOfGuesses(numOfGuesses + 1);
    setMin(guess);
    const nextGuess = parseInt((max - guess) / 2) + guess;
    setGuess(nextGuess);
  };
  const nailedIt = () => {
    setState("GAMEOVER");
  };
  if (state === "GAMEOVER") {
    return (
      <div>
        <h3>
          Acertei o numero {guess} com {numOfGuesses}!
        </h3>
        <button onClick={startGame}>Jogar Novamente!</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h2>O numero correto seria {guess}?</h2>
      <button onClick={lessThen}>Menor!</button>
      <button onClick={nailedIt}>Acertou!</button>
      <button onClick={greaterThen}>Maior!</button>
    </div>
  );
}
