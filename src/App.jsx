import { useEffect, useState } from "react";
import "./App.css";
import { Guess, Qwerty, Result } from "./components";
import { usePuzzle } from "./contexts/PuzzleContext";

function App() {
	const { result, open, setOpen, guesses, guessCount, handleKeyUp } =
		usePuzzle();

	useEffect(() => {
		window.addEventListener("keyup", handleKeyUp);

		return () => window.removeEventListener("keyup", handleKeyUp);
	}, [handleKeyUp]);

	return (
		<div className='flex h-screen w-screen flex-col items-center justify-start bg-slate-900 '>
			<header className=' w-screen flex justify-center mb-2 bg-gradient-to-tr from-black to-gray-800 bg-black'>
				<h1 className='  bg-gradient-to-br from-yellow-400 to-green-400 bg-clip-text text-5xl font-bold uppercase text-transparent flex items-start m-4'>
					Wordle
				</h1>
			</header>

			<div className='mb-3 mt-2'>
				{guesses.map((_, i) => (
					<Guess key={i + 8} guess={guesses[i]} isGuessed={i < guessCount} />
				))}
			</div>

			{(result === "won" || result === "lost") && <Result />}

			<Qwerty />
		</div>
	);
}

export default App;
