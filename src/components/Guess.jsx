import { useEffect } from "react";
import { usePuzzle } from "../contexts/PuzzleContext";

export const Guess = ({ isGuessed, guess, currentGuess }) => {
	const { word } = usePuzzle();

	return (
		<div className='mb-2 grid grid-cols-5 gap-2'>
			{new Array(5).fill("").map((_, i) => {
				const bgColor = !isGuessed
					? "bg-black"
					: guess[i].toLowerCase() === word[i]
					? "bg-green-400"
					: word.includes(guess[i].toLowerCase())
					? "bg-yellow-600"
					: "bg-gray-800";

				return (
					<div
						key={i}
						className={`flex h-12 w-12 items-center justify-center border border-gray-400 font-bold text-2xl uppercase text-white ${bgColor} ${
							guess[i] !== undefined && isGuessed === false
								? "animate-pulse ease-in-out border-2"
								: null
						}  `}>
						{guess[i]}
					</div>
				);
			})}
		</div>
	);
};
