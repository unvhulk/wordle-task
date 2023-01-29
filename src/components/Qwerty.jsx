import React from "react";
import { usePuzzle } from "../contexts/PuzzleContext";

export const Qwerty = () => {
	const { accurateGuesses, inaccurateGuesses, allGuesses, word, handleKeyUp } =
		usePuzzle();
	const qwerty = [
		"q,w,e,r,t,y,u,i,o,p",
		"a,s,d,f,g,h,j,k,l",
		"Enter,z,x,c,v,b,n,m,Clear",
	];

	console.log("Accurate:", accurateGuesses);
	console.log("Inaccurate: ", inaccurateGuesses);

	return (
		<div className=' w-screen mb-4 '>
			{qwerty.map((row, i) => (
				<div key={i + 26} className='flex justify-center'>
					{row.split(",").map((char, i) => {
						const bgColor = accurateGuesses.includes(char)
							? "bg-green-400"
							: inaccurateGuesses.includes(char)
							? "bg-yellow-600"
							: allGuesses.includes(char)
							? " bg-gray-800"
							: " bg-slate-500";

						return (
							<div
								key={i + 26}
								className={`cursor-pointer m-0.5 px-2 py-3 mx-0.5 flex items-center justify-center text-white font-semibold uppercase ${bgColor} md:px-4 lg:px-5`}
								onClick={(e) => handleKeyUp({ key: e.target.innerText })}>
								{char}
							</div>
						);
					})}
				</div>
			))}
		</div>
	);
};
