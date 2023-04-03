import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [guessingNumber, setGuessingNumber] = useState("");
  const [correctGuessing, setCorrectGuessing] = useState("");
  const [number, setNumber] = useState(1)
  useEffect(() => {
    setNumber(Math.floor(Math.random() * 100))
  }, []);

  function checkGuessing() {
    console.log(number)
    if (guessingNumber === number.toString()) {
      setCorrectGuessing("Correct Guessing Number is " + number)
    }
    else {
      if (guessingNumber > number.toString()) {
        setCorrectGuessing("Too many")
      }
      else if(guessingNumber < number.toString()) {
        setCorrectGuessing("Too less")
      }
    }
  }


  return (
    <div className="App">
        <h1>
          Guessing Game
        </h1>
        <div className="guessing">
          <h4> Input Your Number between 0-99 For Guessing</h4>
          {correctGuessing && <h2> {correctGuessing} </h2>}
          <form>
              <input
                type="text" 
                value={guessingNumber}
                onChange={(e) => setGuessingNumber(e.target.value)}
              />
          </form>
          <button onClick={checkGuessing}> guess</button>
        </div>
    </div>

  );
}

export default App;
