import { useEffect, useState } from "react";

export interface CounterProps {
	description: string;
}

export function Counter({ description }: CounterProps) {
	const [count, setCount] = useState(0);

	// useEffect(() => {
	// 	const id = setTimeout(() => {
	// 		console.log('from cancel timeout', description)
	// 	}, 3000)
	// }, [description])

	// useEffect(() => {
	// 	let currentRender = true;
		
	// 	setTimeout(() => {
	// 		if (currentRender) {
	// 			console.log('from variable', description);
	// 		} else {
	// 			console.log('timeout is done here.');
	// 		}
	// 	}, 3000)
	// 	return () => {
	// 		currentRender = false;
	// 	};
	// }, [description]);
	

	return (
		<div className="">
			<h5>Desc: {description}</h5>
			<div className="col m-4">
				<button type='button' className="btn btn-danger" onClick={() => setCount(count - 1)}>
					-
				</button>
				<span className="mx-5 fs-2">{count}</span>
				<button type='button' className="btn btn-primary" onClick={() => setCount(count + 1)}>
					+
				</button>
			</div>
		</div>
	)
}