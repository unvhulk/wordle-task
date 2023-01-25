import React from "react";
import { useState, useRef } from "react";
import { useContext } from "react";
import { createContext } from "react";
import words from "../words.json";

const PuzzleContext = createContext();

const PuzzleProvider = ({ children }) => {
	const [word, setWord] = useState(
		words[Math.round(Math.random() * words.length)]
	);
	const [guesses, setGuesses] = useState(new Array(6).fill(""));
	const [currentGuess, setCurrentGuess] = useState(0);

	const allGuesses = () => {
		return guesses.slice(0, currentGuess).join("").split("");
	};

	// const init = () => {
	// 	setWord(words[Math.round(Math.random() * words.length)]);
	// 	setGuesses(new Array(6).fill(""));
	// 	setCurrentGuess(0);
	// };

	return (
		<PuzzleContext.Provider
			value={{
				word,
				guesses,
				setGuesses,
				currentGuess,
				setCurrentGuess,
			}}>
			{children}
		</PuzzleContext.Provider>
	);
};

const usePuzzle = () => useContext(PuzzleContext);

export { PuzzleProvider, usePuzzle };
