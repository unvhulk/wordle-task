import React from "react";
import { usePuzzle } from "../contexts/PuzzleContext";

export const Qwerty = () => {
	const { accurateGuesses, inaccurateGuesses, allGuesses, handleKeyUp } =
		usePuzzle();
	const qwerty = [
		"q,w,e,r,t,y,u,i,o,p",
		"a,s,d,f,g,h,j,k,l",
		"Enter,z,x,c,v,b,n,m,Clear",
	];
	return (
		<div className=' w-screen'>
			{qwerty.map((row, i) => (
				<div key={i + 26} className='flex justify-center'>
					{row.split(",").map((char, i) => {
						const bgColor = accurateGuesses.includes(char)
							? "bg-green-400"
							: inaccurateGuesses.includes(char)
							? "bg-yellow-400"
							: allGuesses.includes(char)
							? " bg-gray-800"
							: " bg-slate-400";
						return (
							<div
								key={i + 26}
								className={`cursor-pointer m-px px-2.5 py-3 flex items-center justify-center text-black font-semibold uppercase ${bgColor} lg:px-5 `}
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
