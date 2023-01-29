import { useEffect, useState } from "react";
import "./App.css";
import { Guess, Qwerty, Result, Toast } from "./components";
import { usePuzzle } from "./contexts/PuzzleContext";

function App() {
	const { result, guesses, openToast, guessCount, handleKeyUp } = usePuzzle();

	useEffect(() => {
		window.addEventListener("keyup", handleKeyUp);

		return () => window.removeEventListener("keyup", handleKeyUp);
	}, [handleKeyUp]);

	return (
		<div className='flex h-screen flex-col items-center justify-between bg-slate-900 lg:justify-center'>
			<header className=' w-screen flex justify-center mb-2 bg-gradient-to-tr from-black to-gray-800 bg-black'>
				<h1 className='  bg-gradient-to-br from-yellow-400 to-green-400 bg-clip-text text-5xl font-bold uppercase text-transparent flex items-start m-4'>
					Wordle
				</h1>
			</header>

			{openToast && <Toast />}

			<div className='mb-3 mt-2'>
				{guesses.map((_, i) => (
					<Guess
						key={i + 8}
						guess={guesses[i]}
						currentGuess={guesses[guessCount]}
						isGuessed={i < guessCount}
					/>
				))}
			</div>

			{(result === "won" || result === "lost") && <Result />}

			<Qwerty />
		</div>
	);
}

export default App;
