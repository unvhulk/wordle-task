import React from "react";
import { usePuzzle } from "../contexts/PuzzleContext";

export const Qwerty = () => {
	const { accurateGuesses, inaccurateGuesses, allGuesses } = usePuzzle();
	const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
	return (
		<div>
			{qwerty.map((row, i) => (
				<div key={i + 26} className='flex justify-center'>
					{row.split("").map((char, i) => {
						const bgColor = accurateGuesses.includes(char)
							? "bg-green-400"
							: inaccurateGuesses.includes(char)
							? "bg-yellow-400"
							: allGuesses.includes(char)
							? "bg-gray-400"
							: "bg-gray-200";
						return (
							<div
								key={i + 26}
								className={`rounded-m m-px flex h-10 w-10 items-center justify-center uppercase ${bgColor}`}>
								{char}
							</div>
						);
					})}
				</div>
			))}
		</div>
	);
};
