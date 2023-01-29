import React from "react";
import { usePuzzle } from "../contexts/PuzzleContext";

export const Toast = () => {
	return (
		<>
			<div
				className={` absolute z-10 bg-gradient-to-tr from-green-300 to bg-yellow-100
         top-16 w-52 h-10 rounded-lg`}>
				<div className='grid justify-center items-center text-black'>
					<h1>Word not found!!</h1>
				</div>
			</div>
		</>
	);
};
