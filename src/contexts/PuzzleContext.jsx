import React, { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import words from "../words.json";
import dictionary from "../dictionay.json";

const PuzzleContext = createContext();

const PuzzleProvider = ({ children }) => {
	const [word, setWord] = useState(
		words[Math.round(Math.random() * words.length)]
	);
	const currentGuess = useRef("");
	const [guesses, setGuesses] = useState(new Array(6).fill(""));
	const [guessCount, setGuessCount] = useState(0);

	const result =
		guesses[guessCount - 1] === word ? "won" : guessCount < 6 ? "play" : "lost";

	const allGuesses = guesses
		.slice(0, guessCount)
		.join("")
		.toLowerCase()
		.split("");

	const accurateGuesses = word.split("").filter((char, i) => {
		return guesses
			.slice(0, guessCount)
			.map((word) => word[i])
			.includes(char);
	});

	const inaccurateGuesses = word
		.split("")
		.filter((char) => allGuesses.includes(char));

	const reset = () => {
		setWord(words[Math.round(Math.random() * words.length)]);
		setGuesses(new Array(6).fill(""));
		currentGuess.current = "";
		setGuessCount(0);
	};

	const handleKeyUp = ({ key }) => {
		if (result === "won" || result === "lost") {
			return;
		}

		if (key === "Enter" || key === "ENTER") {
			console.log(guessCount);
			if (dictionary.includes(currentGuess.current.toLowerCase())) {
				currentGuess.current = "";
				setGuessCount((prev) => prev + 1);
			}
		}

		if (key === "Backspace" || key === "CLEAR") {
			currentGuess.current = currentGuess.current.slice(0, -1);
			setGuesses((prev) => {
				let arr = [...prev];
				arr[guessCount] = currentGuess.current;
				return arr;
			});
			return;
		}
		if (currentGuess.current.length < 5 && /^[A-Za-z]$/.test(key)) {
			currentGuess.current += key;
			setGuesses((prev) => {
				let arr = [...prev];
				arr[guessCount] = currentGuess.current;
				return arr;
			});
		}
	};

	return (
		<PuzzleContext.Provider
			value={{
				word,
				reset,
				result,
				guesses,
				setGuesses,
				guessCount,
				setGuessCount,
				currentGuess,
				accurateGuesses,
				inaccurateGuesses,
				allGuesses,
				handleKeyUp,
			}}>
			{children}
		</PuzzleContext.Provider>
	);
};

const usePuzzle = () => useContext(PuzzleContext);

export { PuzzleProvider, usePuzzle };
