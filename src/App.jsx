import { useEffect } from "react";
import "./App.css";
import { Guess, Qwerty } from "./components";
import { usePuzzle } from "./contexts/PuzzleContext";
import words from "./words.json";

function App() {
	const { word, guesses, setGuesses, currentGuess, setCurrentGuess } =
		usePuzzle();

	const won = guesses[currentGuess - 1] === word;

	const lost = currentGuess === 6;

	const submitGuess = () => {
		if (words.includes(guesses[currentGuess]))
			setCurrentGuess((prevState) => {
				console.log(prevState);
				return prevState + 1;
			});
	};

	const handleKeyUp = (e) => {
		console.log(guesses);
		// if (won || lost) {
		// 	return;
		// }
		// if (e.key === "Enter") {
		// 	return submitGuess();
		// }
		// if (e.key === "Backspace") {
		// 	let newArr = [...guesses];
		// 	newArr[currentGuess] = newArr[currentGuess].slice(
		// 		0,
		// 		newArr[currentGuess].length - 1
		// 	);
		// 	setGuesses(prevState => newArr);
		// 	return;
		// }
		// if (guesses[currentGuess].length < 5 && e.key.match(/^[A-z]$/)) {
		// 	let newArr = [...guesses];
		// 	newArr[currentGuess] = newArr[currentGuess] + e.key.toLowerCase();
		// 	setGuesses(prevState => {prevState});
		// 	console.log("newArr", newArr);
		// }
		setGuesses((prevGuess) => {
			if (won || lost) {
				return prevGuess;
			}
			if (e.key === "Enter") {
				return submitGuess();
			}
			if (e.key === "Backspace") {
				let newArr = [...guesses];
				newArr[currentGuess] = newArr[currentGuess].slice(
					0,
					newArr[currentGuess].length - 1
				);
				setGuesses((prevState) => newArr);
				return prevGuess;
			}
			if (prevGuess[currentGuess].length < 5 && e.key.match(/^[A-z]$/)) {
				let newArr = [...prevGuess];
				newArr[currentGuess] = newArr[currentGuess] + e.key.toLowerCase();
				return newArr;
			}
		});
	};

	useEffect(() => {
		window.addEventListener("keyup", (e) => handleKeyUp(e));
		return () => window.removeEventListener("keyup", (e) => handleKeyUp(e));
	}, [guesses]);

	useEffect(() => {
		console.log(currentGuess);
	}, [currentGuess]);

	return (
		<div className='flex h-screen w-screen flex-col items-center justify-center bg-gray-600'>
			<h1 className='bg-gradient-to-br from-blue-400 to-green-400 bg-clip-text text-6xl font-bold uppercase text-transparent'>
				Wordle
			</h1>
			{guesses?.map((_, i) => (
				<Guess key={i} guess={guesses[i]} isGuessed={i < currentGuess} />
			))}
			<h1>Won/Loss</h1>
			<Qwerty />
			<div className=''>Word: {word}</div>
			<div className=''>Guesses: {JSON.stringify(guesses)}</div>
			<div className=''>{currentGuess}</div>
		</div>
	);
}

export default App;
