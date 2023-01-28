import React from "react";
import { usePuzzle } from "../contexts/PuzzleContext";

export const Result = () => {
	const { result, reset, word } = usePuzzle();
	return (
		<>
			<div className='  z-10 fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70'></div>
			<div
				className={` absolute z-10 bg-gradient-to-tr ${
					result === "won"
						? "from-green-400 to bg-yellow-400"
						: "from-yellow-400 to bg-green-400"
				} 
         top-24 w-80 h-96 rounded-lg`}>
				<div className='mt-36 flex flex-col items-center'>
					<h1 className=''>{result === "won" ? "You won!" : "You Lost!"}</h1>
					<h2>The Word was: {word}</h2>
					{
						<button
							onClick={reset}
							className=' bg-neutral-800 text-white px-5 mt-2 rounded-lg'>
							Play Again
						</button>
					}
				</div>
			</div>
		</>
	);
};
