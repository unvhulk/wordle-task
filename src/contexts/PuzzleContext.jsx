import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import words from "../words.json";

const PuzzleContext = createContext();

const PuzzleProvider = ({ children }) => {
	const [word, setWord] = useState(
		words[Math.round(Math.random() * words.length)]
	);
	const [currentGuess, setCurrentGuess] = useState("");
	const [guesses, setGuesses] = useState(new Array(6).fill(""));
	const [guessCount, setGuessCount] = useState(0);

	const allGuesses = () => {
		return guesses.slice(0, guessCount).join("").split("");
	};

	const init = () => {
		setWord(words[Math.round(Math.random() * words.length)]);
		setGuesses(new Array(6).fill(""));
		setCurrentGuess("");
		setGuessCount(0);
	};

	return (
		<PuzzleContext.Provider
			value={{
				word,
				init,
				guesses,
				setGuesses,
				guessCount,
				setGuessCount,
				currentGuess,
				setCurrentGuess,
			}}>
			{children}
		</PuzzleContext.Provider>
	);
};

const usePuzzle = () => useContext(PuzzleContext);

export { PuzzleProvider, usePuzzle };
