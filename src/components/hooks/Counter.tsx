import { useEffect, useState } from "react";

export interface CounterProps {
	description: string;
}
export interface Todo {
		userId: number;
		id: number;
		title: string;
		completed: boolean;
}

export function Counter({ description }: CounterProps) {
	const [count, setCount] = useState(0);
	const [todo, setTodo] = useState<Todo>()

	// cancel timeout using its id
	// useEffect(() => {
	// 	const id = setTimeout(() => {
	// 		console.log('from cancel timeout', description)
	// 	}, 3000)
	// }, [description])

	// cancel time out using boolean
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
	useEffect(() => {
		async function loadData() {
			const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + description)
			const json = await res.json();
			// console.log("fetching...", json);
			setTodo(json)
		}
		loadData();
	}, [description]);
	

	return (
		<div className="">
			<h5>Desc: {description}</h5>
			<div className="badge bg-secondary fs-1 text-wrap my-4" style={{width: "10rem"}}>
				{todo?.title}
			</div>
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