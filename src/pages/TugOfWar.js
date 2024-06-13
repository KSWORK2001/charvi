// src/pages/TugOfWar.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './TugOfWar.css';
import { FaMale, FaFemale } from 'react-icons/fa';
import Letters from './Letters';

const randomLetter = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)];
};

const TugOfWar = () => {
  const [currentLetter, setCurrentLetter] = useState(randomLetter());
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [winner, setWinner] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);
  const inputRef = useRef(null);

  const determineWinner = useCallback(() => {
    if (player1Score > player2Score) {
      setWinner('Karan');
    } else if (player2Score > player1Score) {
      setWinner('Charvi');
    } else {
      setWinner('It\'s a tie!');
    }
  }, [player1Score, player2Score]);

  useEffect(() => {
    if (winner) return;

    if (gameStarted) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 1) {
            clearInterval(timer);
            if (currentPlayer === 1) {
              setCurrentPlayer(2);
              setTimeLeft(30);
              setCurrentLetter(randomLetter());
            } else {
              determineWinner();
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameStarted, currentPlayer, determineWinner, winner]);

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    if (key === currentLetter) {
      if (currentPlayer === 1) {
        setPlayer1Score(player1Score + 1);
      } else if (currentPlayer === 2) {
        setPlayer2Score(player2Score + 1);
      }
      setCurrentLetter(randomLetter());
    }
  };

  useEffect(() => {
    if (!winner && gameStarted) {
      inputRef.current.focus();
    }
  }, [currentLetter, winner, gameStarted]);

  const handlePlayAgain = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setWinner(null);
    setCurrentPlayer(1);
    setTimeLeft(30);
    setCurrentLetter(randomLetter());
    setGameStarted(false);
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="tug-of-war">
      <h1>Who loves who more?</h1>
      <div className="game-area">
        <div className="player player1">
          <FaMale className="icon" />
          <p>Karan</p>
          <p>Score: {player1Score}</p>
        </div>
        <div className="rope">
          <Letters letters={[currentLetter]} />
          <p>Time Left: {timeLeft}</p>
          <p>Current Turn: {currentPlayer === 1 ? 'Karan' : 'Charvi'}</p>
          {winner && <p>Who loves who more? {winner} loves more! (By a lot)</p>}
        </div>
        <div className="player player2">
          <FaFemale className="icon" />
          <p>Charvi</p>
          <p>Score: {player2Score}</p>
        </div>
      </div>
      {!winner && !gameStarted && <button onClick={handleStartGame}>Start Game</button>}
      {!winner && gameStarted && <input type="text" ref={inputRef} onKeyDown={handleKeyPress} />}
      {winner && <button onClick={handlePlayAgain}>Play Again</button>}
    </div>
  );
};

export default TugOfWar;
