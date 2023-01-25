import { useEffect } from "react";
import "./App.css";
import { Guess, Qwerty } from "./components";
import { usePuzzle } from "./contexts/PuzzleContext";
import words from "./words.json";

function App() {
	const {
		init,
		word,
		guesses,
		setGuesses,
		guessCount,
		setGuessCount,
		currentGuess,
		setCurrentGuess,
	} = usePuzzle();

	const won = guesses[guessCount - 1] === word;

	const lost = guessCount === 6;

	const handleKeyUp = ({ key }) => {
		if (won || lost) {
			return;
		}

		if (key === "Enter") {
			if (words.includes(currentGuess)) {
				setGuesses((prev) => {
					let arr = [...prev];
					arr[guessCount] = currentGuess;
					return arr;
				});
				setCurrentGuess("");
				setGuessCount((prev) => prev + 1);
			}
		}

		if (key === "Backspace") {
			setCurrentGuess((prev) => prev.slice(0, -1));
			return;
		}
		if (currentGuess.length < 5 && /^[A-Za-z]$/.test(key)) {
			setCurrentGuess((prev) => prev + key);
		}
	};

	useEffect(() => {
		window.addEventListener("keyup", handleKeyUp);

		return () => window.removeEventListener("keyup", handleKeyUp);
	}, [handleKeyUp]);

	return (
		<div className='flex h-screen w-screen flex-col items-center justify-center bg-gray-600'>
			<h1 className='bg-gradient-to-br from-blue-400 to-green-400 bg-clip-text text-6xl font-bold uppercase text-transparent'>
				Wordle
			</h1>
			<div>
				<div>Current Guess - {currentGuess}</div>
			</div>
			<div>
				<div>Current Guesses - {guesses}</div>
			</div>
			{guesses.map((_, i) => (
				<Guess key={i} guess={guesses[i]} isGuessed={i < guessCount} />
			))}

			{won && <h1>You won!</h1>}
			{lost && <h1>You lost!</h1>}
			{(won || lost) && <button onClick={init}>Play Again</button>}
			<h2 onClick={init}>Reset</h2>
			<Qwerty />
		</div>
	);
}

export default App;
