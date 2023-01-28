import { usePuzzle } from "../contexts/PuzzleContext";

export const Guess = ({ isGuessed, guess }) => {
	const { word } = usePuzzle();
	return (
		<div className='mb-2 grid grid-cols-5 gap-2'>
			{new Array(5).fill("").map((_, i) => {
				const bgColor = !isGuessed
					? "bg-black"
					: guess[i].toLowerCase() === word[i]
					? "bg-green-400"
					: word.includes(guess[i].toLowerCase())
					? "bg-yellow-400"
					: "bg-black";

				return (
					<div
						key={i}
						className={`flex h-12 w-14 items-center justify-center border border-gray-400 font-bold uppercase text-white ${bgColor}`}>
						{guess[i]}
					</div>
				);
			})}
		</div>
	);
};
